import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LayoutGrid, Map, SplitSquareHorizontal } from 'lucide-react';
import MosqueCard from '../components/MosqueCard';
import SearchBar from '../components/SearchBar';
import MapView from '../components/MapView';
import { SkeletonCard, SkeletonCardCompact } from '../components/SkeletonCard';
import useFetchMosques from '../hooks/useFetchMosques';

const VIEW_MODES = [
  { key: 'grid', label: 'Grid', icon: LayoutGrid },
  { key: 'split', label: 'Map + List', icon: SplitSquareHorizontal },
  { key: 'map', label: 'Map Only', icon: Map },
];

const SKELETON_COUNT = 6;

export default function MosqueList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    barangay: searchParams.get('barangay') || '',
  });

  const { mosques, loading, error } = useFetchMosques({
    search: searchParams.get('search') || '',
    barangay: searchParams.get('barangay') || '',
  });

  const barangays = useMemo(
    () => [...new Set(mosques.map((m) => m.barangay).filter(Boolean))].sort(),
    [mosques]
  );

  /* Auto-suggestion pool for SearchBar */
  const suggestions = useMemo(
    () =>
      [
        ...mosques.map((m) => m.mosque_name),
        ...mosques.map((m) => m.imam_name).filter(Boolean),
        ...mosques.map((m) => m.barangay).filter(Boolean),
      ].filter((v, i, arr) => arr.indexOf(v) === i),
    [mosques]
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (filters.search) params.search = filters.search;
    if (filters.barangay) params.barangay = filters.barangay;
    setSearchParams(params);
  };

  const hasFilters = searchParams.get('search') || searchParams.get('barangay');

  return (
    <div className="section-shell space-y-8 py-8 sm:py-10">
      {/* ── HEADER ── */}
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <span className="label-chip">Mosque Directory</span>
          <h2 className="mt-4 page-heading">
            {hasFilters ? 'Search Results' : 'All Mosques in Kalamansig'}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Browse mosque records with imam details and addresses.{' '}
            {!loading && (
              <span className="font-semibold text-green-800">
                {mosques.length} mosque{mosques.length !== 1 ? 's' : ''} found.
              </span>
            )}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
          {VIEW_MODES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setViewMode(key)}
              title={label}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                viewMode === key
                  ? 'bg-green-800 text-white shadow-md'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── SEARCH BAR ── */}
      <SearchBar
        filters={filters}
        onChange={setFilters}
        onSubmit={handleSearch}
        barangays={barangays}
        suggestions={suggestions}
        buttonLabel="Apply Filters"
      />

      {/* Active filter chips */}
      {hasFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Filtering by:</span>
          {searchParams.get('search') && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
              Name: &ldquo;{searchParams.get('search')}&rdquo;
              <button
                onClick={() => {
                  const p = {};
                  if (searchParams.get('barangay')) p.barangay = searchParams.get('barangay');
                  setSearchParams(p);
                  setFilters((c) => ({ ...c, search: '' }));
                }}
                className="ml-1 text-green-500 hover:text-green-800"
              >
                ×
              </button>
            </span>
          )}
          {searchParams.get('barangay') && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
              Barangay: {searchParams.get('barangay')}
              <button
                onClick={() => {
                  const p = {};
                  if (searchParams.get('search')) p.search = searchParams.get('search');
                  setSearchParams(p);
                  setFilters((c) => ({ ...c, barangay: '' }));
                }}
                className="ml-1 text-green-500 hover:text-green-800"
              >
                ×
              </button>
            </span>
          )}
          <button
            onClick={() => {
              setSearchParams({});
              setFilters({ search: '', barangay: '' });
            }}
            className="text-xs font-semibold text-slate-400 underline hover:text-slate-600"
          >
            Clear all
          </button>
        </div>
      )}

      {/* ── CONTENT ── */}
      {error ? (
        <div className="card-surface p-8 text-center text-rose-600">{error}</div>
      ) : !loading && mosques.length === 0 ? (
        <div className="card-surface p-12 text-center">
          <div className="text-5xl">🕌</div>
          <h3 className="mt-4 text-lg font-bold text-slate-900">No mosques found</h3>
          <p className="mt-2 text-sm text-slate-500">Try adjusting your search filters.</p>
          <button
            onClick={() => {
              setSearchParams({});
              setFilters({ search: '', barangay: '' });
            }}
            className="btn-primary mt-6"
          >
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'map' ? (
        /* ── MAP ONLY VIEW ── */
        <div className="space-y-4">
          <MapView mosques={mosques} height="clamp(400px, 70vh, 720px)" />
          <p className="text-center text-sm text-slate-500">
            Showing {mosques.length} mosque{mosques.length !== 1 ? 's' : ''} on the map.{' '}
            <button
              onClick={() => setViewMode('grid')}
              className="font-semibold text-green-800 underline"
            >
              Switch to grid view
            </button>
          </p>
        </div>
      ) : viewMode === 'split' ? (
        /* ── SPLIT VIEW ── */
        <div className="grid gap-6 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">
          <div className="grid auto-rows-min gap-4 overflow-y-auto lg:max-h-180 lg:pr-1">
            {loading
              ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <SkeletonCardCompact key={i} />
                ))
              : mosques.map((mosque) => <MosqueCard key={mosque.id} mosque={mosque} compact />)}
          </div>
          <div className="lg:sticky lg:top-24 h-fit">
            <MapView mosques={mosques} height="clamp(380px, 65vh, 680px)" />
            <p className="mt-2 text-center text-xs text-slate-400">
              Click any marker to view mosque details
            </p>
          </div>
        </div>
      ) : (
        /* ── GRID VIEW ── */
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => <SkeletonCard key={i} />)
            : mosques.map((mosque) => <MosqueCard key={mosque.id} mosque={mosque} />)}
        </div>
      )}

      {/* Bottom CTA */}
      {!loading && mosques.length > 0 && viewMode === 'grid' && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
          <p className="text-sm text-slate-500">
            Showing all{' '}
            <span className="font-semibold text-slate-700">{mosques.length}</span>{' '}
            mosque{mosques.length !== 1 ? 's' : ''}
          </p>
          <Link to="/map" className="btn-secondary">
            <Map className="h-4 w-4" strokeWidth={2} />
            View All on Map
          </Link>
        </div>
      )}
    </div>
  );
}
