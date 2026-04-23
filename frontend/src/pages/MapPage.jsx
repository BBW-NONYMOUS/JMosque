import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Map as MapIcon,
  MapPin,
  Building2,
  Navigation,
  ArrowRight,
  AlertCircle,
  Loader2,
  Compass,
} from 'lucide-react';
import MapView from '../components/MapView';
import useFetchMosques from '../hooks/useFetchMosques';

function StatCard({ icon: Icon, label, value, tone = 'default' }) {
  const toneClasses = {
    default: 'bg-stone-100 text-slate-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    blue: 'bg-sky-50 text-sky-700',
  };

  return (
    <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-black tracking-tight text-slate-900">{value}</p>
        </div>
        <div className={`rounded-2xl p-3 ${toneClasses[tone] || toneClasses.default}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function QuickInfoCard({ title, description, icon: Icon }) {
  return (
    <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-stone-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-stone-100 text-slate-500">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
        <p className="mt-4 text-sm font-medium text-slate-600">Loading map data...</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-28 animate-pulse rounded-[24px] border border-stone-200 bg-white shadow-sm" />
        ))}
      </div>
    </div>
  );
}

export default function MapPage() {
  const [searchParams] = useSearchParams();
  const focusId = Number(searchParams.get('focus'));
  const { mosques, loading, error } = useFetchMosques();

  const sortedMosques = useMemo(() => {
    if (!focusId) return mosques;
    return [...mosques].sort((a, b) => Number(b.id === focusId) - Number(a.id === focusId));
  }, [focusId, mosques]);

  const barangayCount = useMemo(
    () => new Set(mosques.map((mosque) => mosque.barangay).filter(Boolean)).size,
    [mosques]
  );

  const focusedMosque = useMemo(
    () => mosques.find((mosque) => Number(mosque.id) === focusId),
    [focusId, mosques]
  );

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <div className="section-shell py-8 sm:py-10">
        <section className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                <MapIcon className="h-4 w-4" />
                Interactive Map
              </span>

              <h1 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Explore geo-tagged mosque locations across Kalamansig
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Browse mosque markers on a clear map interface, identify locations faster, and open
                each mosque profile directly from the map.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/mosques"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Browse Directory
                </Link>
                <a
                  href="#map-section"
                  className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                >
                  View Map Area
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard icon={MapPin} label="Mosque markers" value={loading ? '—' : mosques.length} tone="blue" />
              <StatCard icon={Building2} label="Barangays represented" value={loading ? '—' : barangayCount} tone="emerald" />
              <div className="rounded-[24px] border border-stone-200 bg-stone-50 p-5 shadow-sm sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-white p-3 text-slate-700 shadow-sm">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Navigation-ready map experience</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Designed for easier location discovery with focused markers, popup access, and
                      quick transitions to mosque details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {focusedMosque && !loading && !error && (
          <section className="mt-6 rounded-[24px] border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Focused Mosque
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-900">{focusedMosque.mosque_name}</h2>
                <p className="mt-1 text-sm text-slate-600">
                  This mosque has been prioritized on the map for quicker viewing.
                </p>
              </div>

              <Link
                to={`/mosques/${focusedMosque.id}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Open Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        )}

        <section id="map-section" className="mt-6">
          {loading ? (
            <LoadingState />
          ) : error ? (
            <div className="rounded-[28px] border border-rose-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-900">Unable to load map</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{error}</p>
            </div>
          ) : (
            <>
              <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
                <div className="border-b border-stone-200 px-5 py-4 sm:px-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Kalamansig Mosque Map</p>
                      <p className="mt-1 text-sm text-slate-600">
                        Select a marker to preview a mosque and continue to its profile page.
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                      Live marker view
                    </span>
                  </div>
                </div>

                <MapView mosques={sortedMosques} height="clamp(340px, 68vh, 700px)" />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <QuickInfoCard
                  icon={Navigation}
                  title="Focused navigation"
                  description="When a mosque is selected from another page, it can be prioritized here for faster map access."
                />
                <QuickInfoCard
                  icon={MapPin}
                  title="Marker-based exploration"
                  description="Browse location points visually and inspect mosque positions across different barangays."
                />
                <QuickInfoCard
                  icon={Building2}
                  title="Connected directory flow"
                  description="Map browsing works together with the directory and detail pages for a smoother user journey."
                />
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
