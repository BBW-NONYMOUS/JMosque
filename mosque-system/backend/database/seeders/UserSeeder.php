<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@mosque-system.test'],
            [
                'name' => 'System Administrator',
                'role' => 'admin',
                'password' => Hash::make('password123'),
            ]
        );
    }
}
