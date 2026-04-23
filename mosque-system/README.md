# Web-Based Mosque Information System with Geo-Tagging

Full-stack capstone-ready application for locating mosques in Kalamansig with an admin dashboard for managing mosque records, photos, and map coordinates.

## Stack

- Frontend: React, Vite, React Router, Axios, React Leaflet, Tailwind CSS
- Backend: Laravel, Laravel Sanctum, MySQL

## Project Structure

```text
mosque-system/
├── backend/
└── frontend/
```

## Quick Start

### Backend

1. Open a terminal in `backend`.
2. Run `composer install`.
3. Configure the database in `.env`.
4. Run `php artisan key:generate`.
5. Run `php artisan migrate --seed`.
6. Run `php artisan storage:link`.
7. Run `php artisan serve`.

Default admin account:

- Email: `admin@mosque-system.test`
- Username: `admin`
- Password: `password123`

### Frontend

1. Open a terminal in `frontend`.
2. Run `npm install`.
3. Confirm `.env` contains `VITE_API_URL=http://127.0.0.1:8000/api`.
4. Run `npm run dev`.

## Notes

- Frontend build verified with Vite 7 on Windows.
- Uploaded mosque photos are served from Laravel public storage after `php artisan storage:link`.
- The admin dashboard supports creating, editing, deleting, and uploading multiple photos to mosque records.
