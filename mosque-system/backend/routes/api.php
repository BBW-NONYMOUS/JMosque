<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\FeedbackController;
use App\Http\Controllers\API\MosqueController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/mosques', [MosqueController::class, 'index']);
Route::get('/mosques/{mosque}', [MosqueController::class, 'show']);
Route::get('/stats', [MosqueController::class, 'stats']);

// Guest feedback (public — no auth required)
Route::post('/feedback', [FeedbackController::class, 'store']);

Route::middleware('auth:sanctum')->group(function (): void {
    Route::post('/mosques', [MosqueController::class, 'store']);
    Route::post('/mosques/{mosque}', [MosqueController::class, 'update']);
    Route::put('/mosques/{mosque}', [MosqueController::class, 'update']);
    Route::delete('/mosques/{mosque}', [MosqueController::class, 'destroy']);

    // Admin-only: feedback list & backup import/export
    Route::get('/feedback', [FeedbackController::class, 'index']);
    Route::get('/backup/export', [MosqueController::class, 'export']);
    Route::post('/backup/import', [MosqueController::class, 'import']);
});
