<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('app:about-mosque-system', function (): void {
    $this->comment('Web-Based Mosque Information System with Geo-Tagging');
});
