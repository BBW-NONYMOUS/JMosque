<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('feedbacks', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->nullable();
            $table->string('email', 150)->nullable();
            $table->unsignedTinyInteger('rating'); // 1–5 stars
            $table->text('comment');
            $table->unsignedBigInteger('mosque_id')->nullable();
            $table->foreign('mosque_id')->references('id')->on('mosques')->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('feedbacks');
    }
};
