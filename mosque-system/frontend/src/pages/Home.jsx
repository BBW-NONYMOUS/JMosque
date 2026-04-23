import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Landmark, Map, Navigation, Search } from 'lucide-react';
import useFetchMosques from '../hooks/useFetchMosques';
import { SkeletonCard } from '../components/SkeletonCard';
import HeroSlider from '../components/HeroSlider';

const FEATURES = [
  {
    title: 'Mosque Directory',
    description: 'Browse verified mosque details, images, and location information in one place.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Smart Search',
    description: 'Find mosques quickly by name, imam, address, or barangay with auto-suggestions.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Interactive Map',
    description: 'View mosque locations with accurate coordinates on an easy-to-use map.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Directions',
    description: 'Open Google Maps instantly and navigate to the selected mosque.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FEATURED_LIMIT = 6;
const SKELETON_COUNT = 6;

export default function Home() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ search: '', barangay: '' });
  const { mosques, loading, error } = useFetchMosques();

  const barangays = useMemo(
    () => [...new Set(mosques.map((m) => m.barangay).filter(Boolean))].sort(),
    [mosques]
  );

  /* Auto-suggestion pool for the quick search */
  const suggestions = useMemo(
    () =>
      [
        ...mosques.map((m) => m.mosque_name),
        ...mosques.map((m) => m.imam_name).filter(Boolean),
        ...mosques.map((m) => m.barangay).filter(Boolean),
      ].filter((v, i, arr) => arr.indexOf(v) === i),
    [mosques]
  );

  /* Live filtered suggestions as user types */
  const liveSuggestions = useMemo(() => {
    if (!filters.search.trim()) return [];
    return suggestions
      .filter((s) => s.toLowerCase().includes(filters.search.toLowerCase()))
      .slice(0, 6);
  }, [filters.search, suggestions]);

  const featuredMosques = mosques.slice(0, FEATURED_LIMIT);

  const handleExplore = () => {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.barangay) params.set('barangay', filters.barangay);
    navigate(`/mosques${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ── HERO ── */}
      <section className="border-b border-slate-100 bg-white">
        <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <span className="label-chip">
              <Landmark className="mr-1.5 h-3 w-3" strokeWidth={2.5} />
              Kalamansig, Sultan Kudarat
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Discover mosques in{' '}
              <span className="text-green-800">Kalamansig</span> — your complete digital directory.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore mosque information, search by barangay, and open locations on the map with a faster and more user-friendly experience.
            </p>

            {/* Stats */}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/mosques" className="btn-primary">
                <Landmark className="h-4 w-4" strokeWidth={2} />
                Explore Directory
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link to="/map" className="btn-secondary">
                <Map className="h-4 w-4" strokeWidth={2} />
                View Map
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06]">
            {/* Full-bleed slider */}
            <div className="h-[380px] overflow-hidden sm:h-[440px] lg:h-[520px]">
              <HeroSlider />
            </div>

            {/* Gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />

            {/* Top-left live badge */}
            <div className="absolute left-5 top-5 z-20">
              <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Live Directory</span>
              </div>
            </div>

            {/* Bottom info overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-[3.75rem] pt-4">
              <h3 className="text-lg font-bold text-white drop-shadow-sm">
                Kalamansig Mosque Directory
              </h3>
              <p className="mt-1 text-sm text-white/70">
                Explore mosques across all barangays
              </p>

              {!loading && (
                <div className="mt-4 flex gap-2.5">
                  <div className="flex-1 rounded-xl border border-white/20 bg-white/15 px-3 py-2.5 text-center backdrop-blur-md">
                    <p className="text-xl font-black text-white">{mosques.length}</p>
                    <p className="text-[11px] font-medium text-white/65">Mosques</p>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/20 bg-white/15 px-3 py-2.5 text-center backdrop-blur-md">
                    <p className="text-xl font-black text-white">{barangays.length}</p>
                    <p className="text-[11px] font-medium text-white/65">Barangays</p>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/20 bg-white/15 px-3 py-2.5 text-center backdrop-blur-md">
                    <p className="text-xl font-black text-white">Free</p>
                    <p className="text-[11px] font-medium text-white/65">Access</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK SEARCH ── */}
      <section className="section-shell py-14">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
                Quick Search
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Find a mosque near you
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Search by mosque name, imam, or address, then narrow results by barangay.
              </p>
            </div>
          </div>

          {/* Search row with inline suggestions */}
          <div className="relative mt-6 grid gap-4 lg:grid-cols-[1fr_240px_160px]">
            {/* Input with auto-suggestions */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                <Search className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
              </div>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters((c) => ({ ...c, search: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleExplore()}
                placeholder="Search mosque name, imam, or address"
                autoComplete="off"
                className="field-input h-13 rounded-xl pl-10 text-base"
              />
              {/* Inline suggestions dropdown */}
              {liveSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                  {liveSuggestions.map((s) => {
                    const idx = s.toLowerCase().indexOf(filters.search.toLowerCase());
                    const before = s.slice(0, idx);
                    const match = s.slice(idx, idx + filters.search.length);
                    const after = s.slice(idx + filters.search.length);
                    return (
                      <button
                        key={s}
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left hover:bg-green-50"
                        onClick={() => {
                          setFilters((c) => ({ ...c, search: s }));
                        }}
                      >
                        <Search className="h-4 w-4 shrink-0 text-green-700" strokeWidth={2} />
                        <span className="text-sm text-slate-700">
                          {before}
                          <span className="font-bold text-green-800">{match}</span>
                          {after}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <select
              value={filters.barangay}
              onChange={(e) => setFilters((c) => ({ ...c, barangay: e.target.value }))}
              className="field-input h-13 rounded-xl text-base"
            >
              <option value="">All Barangays</option>
              {barangays.map((barangay) => (
                <option key={barangay} value={barangay}>
                  {barangay}
                </option>
              ))}
            </select>

            <button
              onClick={handleExplore}
              className="btn-primary h-13 justify-center text-base"
            >
              <Search className="h-4 w-4" strokeWidth={2.5} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-shell pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Features
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Designed to be simple, useful, and clear
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-100 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED MOSQUES ── */}
      <section className="section-shell pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Featured Mosques
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Start exploring the directory
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              A quick preview of mosques currently available in the system.
            </p>
          </div>

          <Link to="/mosques" className="btn-secondary">
            <Landmark className="h-4 w-4" strokeWidth={2} />
            View All
          </Link>
        </div>

        {error ? (
          <div className="mt-10 rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center text-rose-700">
            {error}
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {loading
              ? Array.from({ length: SKELETON_COUNT }).map((_, i) => <SkeletonCard key={i} />)
              : featuredMosques.map((mosque) => {
                  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mosque.latitude},${mosque.longitude}`;
                  return (
                    <article
                      key={mosque.id}
                      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="aspect-16/10 overflow-hidden bg-slate-100">
                        <img
                          src={mosque.image_url || '/placeholder-mosque.svg'}
                          alt={mosque.mosque_name}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                            {mosque.barangay || 'Kalamansig'}
                          </span>
                          <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-semibold text-green-800 transition hover:text-green-900"
                            title="Get Directions"
                          >
                            <Navigation className="h-3.5 w-3.5" strokeWidth={2.5} />
                            Directions
                          </a>
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-slate-900">
                          {mosque.mosque_name}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-sm text-slate-500">{mosque.address}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          Imam: {mosque.imam_name || 'Not available'}
                        </p>

                        <div className="mt-5 flex gap-3">
                          <Link
                            to={`/mosques/${mosque.id}`}
                            className="btn-primary flex-1 justify-center py-2.5 text-sm"
                          >
                            View Details
                          </Link>
                          <Link
                            to={`/map?focus=${mosque.id}`}
                            className="btn-secondary px-4 py-2.5 text-sm"
                          >
                            <Map className="h-4 w-4" strokeWidth={2} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
          </div>
        )}
      </section>
    </div>
  );
}
