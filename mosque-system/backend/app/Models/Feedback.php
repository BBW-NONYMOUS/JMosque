<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedbacks';

    protected $fillable = ['name', 'email', 'rating', 'comment', 'mosque_id'];

    public function mosque()
    {
        return $this->belongsTo(Mosque::class);
    }
}
