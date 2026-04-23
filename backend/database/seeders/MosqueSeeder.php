<?php

namespace Database\Seeders;

use App\Models\Mosque;
use Illuminate\Database\Seeder;

class MosqueSeeder extends Seeder
{
    public function run(): void
    {
        $mosques = [
            [
                'mosque_name' => 'Masjid Al-Nur',
                'address' => 'Purok Riverside, Poblacion, Kalamansig, Sultan Kudarat',
                'barangay' => 'Poblacion',
                'imam_name' => 'Ustadz Abdulrahman Pendatun',
                'description' => 'A community-centered mosque near the town proper that regularly hosts prayer gatherings, Qur\'an classes, and youth activities.',
                'latitude' => 6.5515000,
                'longitude' => 124.0528000,
                'image' => null,
            ],
            [
                'mosque_name' => 'Masjid As-Salam',
                'address' => 'Sitio Proper, Barangay Santa Maria, Kalamansig, Sultan Kudarat',
                'barangay' => 'Santa Maria',
                'imam_name' => 'Imam Hamid Musa',
                'description' => 'Known for its peaceful environment and active religious instruction program for children and adults.',
                'latitude' => 6.5612000,
                'longitude' => 124.0634000,
                'image' => null,
            ],
            [
                'mosque_name' => 'Masjid Al-Huda',
                'address' => 'National Road, Barangay Limulan, Kalamansig, Sultan Kudarat',
                'barangay' => 'Limulan',
                'imam_name' => 'Imam Rashid Macapagal',
                'description' => 'A roadside mosque that serves nearby farming communities and traveling worshippers.',
                'latitude' => 6.5389000,
                'longitude' => 124.0314000,
                'image' => null,
            ],
            [
                'mosque_name' => 'Masjid Al-Falah',
                'address' => 'Sitio Upper Hinalaan, Barangay Hinalaan, Kalamansig, Sultan Kudarat',
                'barangay' => 'Hinalaan',
                'imam_name' => 'Imam Farouk Ali',
                'description' => 'A hill-side mosque with a growing congregation and regular family-focused community programs.',
                'latitude' => 6.5232000,
                'longitude' => 124.0711000,
                'image' => null,
            ],
            [
                'mosque_name' => 'Masjid Noor-ul-Islam',
                'address' => 'Barangay Sangay Center, Kalamansig, Sultan Kudarat',
                'barangay' => 'Sangay',
                'imam_name' => 'Imam Khalid Abdullah',
                'description' => 'This mosque supports neighborhood outreach activities and weekend Islamic studies classes.',
                'latitude' => 6.5751000,
                'longitude' => 124.0417000,
                'image' => null,
            ],
            [
                'mosque_name' => 'Masjid Darussalam',
                'address' => 'Coastal Road, Barangay Cadiz, Kalamansig, Sultan Kudarat',
                'barangay' => 'Cadiz',
                'imam_name' => 'Imam Yusop Sarip',
                'description' => 'A coastal barangay mosque that provides a welcoming prayer space for residents and visiting fisherfolk.',
                'latitude' => 6.5447000,
                'longitude' => 124.0865000,
                'image' => null,
            ],
        ];

        foreach ($mosques as $mosque) {
            Mosque::updateOrCreate(
                ['mosque_name' => $mosque['mosque_name']],
                $mosque
            );
        }
    }
}
