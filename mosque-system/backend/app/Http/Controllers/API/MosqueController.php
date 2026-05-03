<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mosque;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MosqueController extends Controller
{
    public function stats(): JsonResponse
    {
        $total = Mosque::count();
        $barangays = Mosque::distinct('barangay')->count('barangay');
        $withImages = Mosque::whereNotNull('image')->count();
        $recentMosques = Mosque::latest()->take(5)->get();

        return response()->json([
            'data' => [
                'total_mosques' => $total,
                'covered_barangays' => $barangays,
                'mosques_with_images' => $withImages,
                'recent_mosques' => $recentMosques,
            ],
        ]);
    }

    public function index(Request $request): JsonResponse
    {
        $query = Mosque::query();

        if ($request->filled('search')) {
            $search = (string) $request->string('search');

            $query->where(function ($builder) use ($search): void {
                $builder->where('mosque_name', 'like', '%' . $search . '%')
                    ->orWhere('address', 'like', '%' . $search . '%')
                    ->orWhere('imam_name', 'like', '%' . $search . '%');
            });
        }

        if ($request->filled('barangay')) {
            $query->where('barangay', (string) $request->string('barangay'));
        }

        $mosques = $query->orderBy('mosque_name')->get();

        return response()->json([
            'message' => 'Mosques retrieved successfully.',
            'data' => $mosques,
        ]);
    }

    public function show(Mosque $mosque): JsonResponse
    {
        return response()->json([
            'message' => 'Mosque details retrieved successfully.',
            'data' => $mosque,
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->ensureAdmin($request);

        $validated = $this->validateMosque($request);
        $validated['image'] = $request->hasFile('image')
            ? $request->file('image')->store('mosques', 'public')
            : null;

        $mosque = Mosque::create($validated);

        return response()->json([
            'message' => 'Mosque created successfully.',
            'data' => $mosque->fresh(),
        ], 201);
    }

    public function update(Request $request, Mosque $mosque): JsonResponse
    {
        $this->ensureAdmin($request);

        $validated = $this->validateMosque($request, $mosque->id);

        if ($request->hasFile('image')) {
            if ($mosque->image) {
                Storage::disk('public')->delete($mosque->image);
            }

            $validated['image'] = $request->file('image')->store('mosques', 'public');
        } else {
            $validated['image'] = $mosque->image;
        }

        $mosque->update($validated);

        return response()->json([
            'message' => 'Mosque updated successfully.',
            'data' => $mosque->fresh(),
        ]);
    }

    public function destroy(Request $request, Mosque $mosque): JsonResponse
    {
        $this->ensureAdmin($request);

        if ($mosque->image) {
            Storage::disk('public')->delete($mosque->image);
        }

        $mosque->delete();

        return response()->json([
            'message' => 'Mosque deleted successfully.',
        ]);
    }

    public function export(Request $request): JsonResponse
    {
        $this->ensureAdmin($request);

        $mosques = Mosque::orderBy('mosque_name')->get()->map(function ($m) {
            return [
                'id'          => $m->id,
                'mosque_name' => $m->mosque_name,
                'address'     => $m->address,
                'barangay'    => $m->barangay,
                'imam_name'   => $m->imam_name,
                'description' => $m->description,
                'latitude'    => $m->latitude,
                'longitude'   => $m->longitude,
                'image'       => $m->image,
                'image_url'   => $m->image_url,
                'created_at'  => $m->created_at,
                'updated_at'  => $m->updated_at,
            ];
        });

        return response()->json([
            'exported_at' => now()->toIso8601String(),
            'total'       => $mosques->count(),
            'data'        => $mosques,
        ]);
    }

    public function import(Request $request): JsonResponse
    {
        $this->ensureAdmin($request);

        $validated = Validator::make($request->all(), [
            'mode' => ['nullable', 'in:merge,replace'],
            'data' => ['required', 'array', 'min:1', 'max:10000'],
            'data.*.id' => ['nullable', 'integer', 'min:1'],
            'data.*.mosque_name' => ['required', 'string', 'max:255'],
            'data.*.address' => ['required', 'string', 'max:255'],
            'data.*.barangay' => ['required', 'string', 'max:150'],
            'data.*.imam_name' => ['required', 'string', 'max:255'],
            'data.*.description' => ['required', 'string'],
            'data.*.latitude' => ['required', 'numeric', 'between:-90,90'],
            'data.*.longitude' => ['required', 'numeric', 'between:-180,180'],
            'data.*.image' => ['nullable', 'string', 'max:2048'],
            'data.*.image_url' => ['nullable', 'string', 'max:2048'],
            'data.*.created_at' => ['nullable', 'date'],
            'data.*.updated_at' => ['nullable', 'date'],
        ])->validate();

        $mode = $validated['mode'] ?? 'merge';
        $stats = [
            'created' => 0,
            'updated' => 0,
            'replaced' => $mode === 'replace',
            'total' => count($validated['data']),
        ];

        DB::transaction(function () use ($validated, $mode, &$stats): void {
            if ($mode === 'replace') {
                Mosque::query()->delete();
            }

            foreach ($validated['data'] as $record) {
                $attributes = $this->backupRecordAttributes($record);
                $mosque = $this->findImportTarget($record);

                if ($mosque) {
                    $mosque->update($attributes);
                    $stats['updated']++;
                    continue;
                }

                if (! empty($record['id']) && ! Mosque::whereKey($record['id'])->exists()) {
                    DB::table('mosques')->insert($attributes + [
                        'id' => $record['id'],
                        'created_at' => $record['created_at'] ?? now(),
                        'updated_at' => $record['updated_at'] ?? now(),
                    ]);
                } else {
                    Mosque::create($attributes);
                }

                $stats['created']++;
            }
        });

        return response()->json([
            'message' => 'Backup imported successfully.',
            'data' => $stats,
        ]);
    }

    private function ensureAdmin(Request $request): void
    {
        abort_unless($request->user()?->isAdmin(), 403, 'Only admin users can manage mosque records.');
    }

    private function validateMosque(Request $request, ?int $mosqueId = null): array
    {
        return $request->validate([
            'mosque_name' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'barangay' => ['required', 'string', 'max:150'],
            'imam_name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        ]);
    }

    private function backupRecordAttributes(array $record): array
    {
        return [
            'mosque_name' => $record['mosque_name'],
            'address' => $record['address'],
            'barangay' => $record['barangay'],
            'imam_name' => $record['imam_name'],
            'description' => $record['description'],
            'latitude' => $record['latitude'],
            'longitude' => $record['longitude'],
            'image' => $record['image'] ?? $record['image_url'] ?? null,
        ];
    }

    private function findImportTarget(array $record): ?Mosque
    {
        if (! empty($record['id'])) {
            $mosque = Mosque::find($record['id']);

            if ($mosque) {
                return $mosque;
            }
        }

        return Mosque::where('mosque_name', $record['mosque_name'])
            ->where('barangay', $record['barangay'])
            ->first();
    }
}
