<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int         $id
 * @property string      $mosque_name
 * @property string      $address
 * @property string      $barangay
 * @property string      $imam_name
 * @property string      $description
 * @property float       $latitude
 * @property float       $longitude
 * @property string|null $image
 * @property string|null $image_url
 */
class Mosque extends Model
{
    use HasFactory;

    protected $fillable = [
        'mosque_name',
        'address',
        'barangay',
        'imam_name',
        'description',
        'latitude',
        'longitude',
        'image',
    ];

    protected $casts = [
        'latitude'  => 'float',
        'longitude' => 'float',
    ];

    protected $appends = [
        'image_url',
    ];

    public function feedbacks(): HasMany
    {
        return $this->hasMany(Feedback::class);
    }

    public function getImageUrlAttribute(): ?string
    {
        if (! $this->image) {
            return null;
        }

        // Already a full URL (e.g. seeded with http://…)
        if (filter_var($this->image, FILTER_VALIDATE_URL)) {
            return $this->image;
        }

        // Files are stored in storage/app/public — served via the /storage symlink
        return asset('storage/' . $this->image);
    }
}
