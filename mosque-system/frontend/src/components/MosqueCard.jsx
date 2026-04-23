import { Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MosqueCard({ mosque, compact = false }) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mosque.latitude},${mosque.longitude}`;

  if (compact) {
    return (
      <article className="card-surface overflow-hidden p-4 transition-all duration-200 hover:shadow-[0_12px_30px_rgba(15,94,156,0.14)]">
        <div className="flex gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
            <img
              src={mosque.image_url || '/placeholder-mosque.svg'}
              alt={mosque.mosque_name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            {!mosque.image_url && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-2xl">🕌</div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-bold text-sky-700">
                  {mosque.barangay}
                </span>
              </div>
              <h3 className="mt-1 truncate text-sm font-bold text-slate-900">{mosque.mosque_name}</h3>
              <p className="truncate text-xs text-slate-500">{mosque.address}</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to={`/mosques/${mosque.id}`}
                className="btn-primary py-1.5 px-3 text-xs"
              >
                View
              </Link>
              <Link
                to={`/map?focus=${mosque.id}`}
                className="btn-secondary py-1.5 px-3 text-xs"
              >
                Map
              </Link>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                <Navigation className="h-3 w-3" strokeWidth={2.5} />
                Directions
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card-surface group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(15,94,156,0.16)]">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={mosque.image_url || '/placeholder-mosque.svg'}
          alt={mosque.mosque_name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!mosque.image_url && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-6xl">🕌</div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Barangay badge */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 backdrop-blur">
            {mosque.barangay}
          </span>
        </div>

        {/* Directions quick button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-emerald-600"
          title="Get Directions"
        >
          <Navigation className="h-3.5 w-3.5" strokeWidth={2.5} />
        </a>
      </div>

      {/* Body */}
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            Imam: {mosque.imam_name}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-700 line-clamp-1">
            {mosque.mosque_name}
          </h3>
          <p className="mt-1 text-sm leading-5 text-slate-500 line-clamp-2">{mosque.address}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            to={`/mosques/${mosque.id}`}
            className="btn-primary flex-1 justify-center py-2.5 text-sm"
          >
            View Details
          </Link>
          <Link
            to={`/map?focus=${mosque.id}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
            title="Open on Map"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </Link>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100 hover:text-emerald-700"
            title="Get Directions"
          >
            <Navigation className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </article>
  );
}
