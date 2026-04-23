<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function index(): JsonResponse
    {
        $feedbacks = Feedback::with('mosque:id,mosque_name')
            ->latest()
            ->paginate(20);

        return response()->json($feedbacks);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name'      => 'nullable|string|max:100',
            'email'     => 'nullable|email|max:150',
            'rating'    => 'required|integer|min:1|max:5',
            'comment'   => 'required|string|max:2000',
            'mosque_id' => 'nullable|exists:mosques,id',
        ]);

        $feedback = Feedback::create($data);

        return response()->json($feedback, 201);
    }
}
