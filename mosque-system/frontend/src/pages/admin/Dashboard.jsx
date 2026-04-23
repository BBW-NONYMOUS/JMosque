import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  ChevronRight,
  ExternalLink,
  ImageOff,
  Landmark,
  MapPin,
  MapPinned,
  PlusCircle,
  SquarePen,
  TrendingUp,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import useFetchMosques from '../../hooks/useFetchMosques';

/* ── Stat Card ── */
function StatCard({ label, value, icon: Icon, colorClass, bgClass, trend, loading }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</p>
          {loading ? (
            <div className="mt-3 h-10 w-16 animate-pulse rounded-xl bg-gray-200" />
          ) : (
            <p className={`mt-3 text-4xl font-black ${colorClass}`}>{value}</p>
          )}
          {trend && !loading && (
            <div className="mt-3 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-green-600" strokeWidth={2.5} />
              <span className="text-xs font-semibold text-green-700">{trend}</span>
            </div>
          )}
        </div>
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${bgClass}`}>
          <Icon className={`h-6 w-6 ${colorClass}`} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

/* ── Recent Mosques Table ── */
function RecentMosquesTable({ mosques, loading }) {
  const recent = [...mosques].sort((a, b) => b.id - a.id).slice(0, 6);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
        <div>
          <h3 className="text-base font-bold text-slate-900">Recent Mosques</h3>
          <p className="mt-0.5 text-xs text-slate-500">Latest entries in the directory</p>
        </div>
        <Link
          to="/admin/mosques"
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-800"
        >
          View All
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </Link>
      </div>

      {loading ? (
        <div className="divide-y divide-slate-50">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4">
              <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-2/3 animate-pulse rounded-lg bg-gray-200" />
                <div className="h-3 w-1/3 animate-pulse rounded-lg bg-gray-200" />
              </div>
              <div className="hidden sm:flex gap-2">
                <div className="h-8 w-8 animate-pulse rounded-xl bg-gray-200" />
                <div className="h-8 w-8 animate-pulse rounded-xl bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      ) : recent.length === 0 ? (
        <div className="px-6 py-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
            <Landmark className="h-6 w-6 text-slate-300" strokeWidth={2} />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-500">No mosque records yet</p>
          <Link to="/admin/mosques/add" className="btn-primary mt-4 text-xs">
            <PlusCircle className="h-3.5 w-3.5" strokeWidth={2} />
            Add First Mosque
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-slate-50">
          {recent.map((mosque) => (
            <div
              key={mosque.id}
              className="flex items-center gap-4 px-6 py-4 transition hover:bg-slate-50/80"
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-100">
                {mosque.image_url ? (
                  <img
                    src={mosque.image_url}
                    alt={mosque.mosque_name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-green-50 text-2xl">
                    🕌
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-bold text-slate-900">{mosque.mosque_name}</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 shrink-0 text-slate-400" strokeWidth={2} />
                  <p className="truncate text-xs text-slate-500">{mosque.barangay}</p>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">
                  Imam
                </p>
                <p className="max-w-[120px] truncate text-xs font-semibold text-slate-700">
                  {mosque.imam_name || '—'}
                </p>
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/admin/mosques/${mosque.id}/edit`}
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-green-200 hover:bg-green-50 hover:text-green-800"
                  title="Edit"
                >
                  <SquarePen className="h-3.5 w-3.5" strokeWidth={2.2} />
                </Link>
                <Link
                  to={`/mosques/${mosque.id}`}
                  target="_blank"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                  title="View Public Page"
                >
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Quick Action Card ── */
function QuickActionCard({ to, label, description, chipLabel, icon: Icon, iconBg, iconColor }) {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-100 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-green-800">
          {chipLabel}
        </span>
        <ChevronRight
          className="h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-green-700"
          strokeWidth={2.5}
        />
      </div>
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ${iconColor} transition group-hover:scale-110`}>
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <div>
        <h3 className="text-base font-bold text-slate-900">{label}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
      </div>
    </Link>
  );
}

/* ── Barangay Coverage Chart ── */
function BarangayCoverage({ mosques, loading }) {
  const byBarangay = mosques.reduce((acc, m) => {
    if (m.barangay) acc[m.barangay] = (acc[m.barangay] || 0) + 1;
    return acc;
  }, {});

  const entries = Object.entries(byBarangay).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const max = entries[0]?.[1] || 1;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <h3 className="text-base font-bold text-slate-900">Mosques by Barangay</h3>
        <p className="mt-0.5 text-xs text-slate-500">Distribution across covered areas</p>
      </div>

      {loading ? (
        <div className="space-y-4 px-6 py-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="space-y-1.5">
              <div className="h-3.5 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-2 w-full animate-pulse rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      ) : entries.length === 0 ? (
        <p className="px-6 py-6 text-sm text-slate-500">No data available.</p>
      ) : (
        <div className="space-y-4 px-6 py-5">
          {entries.map(([barangay, count]) => (
            <div key={barangay}>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-slate-700 max-w-[160px]">
                  {barangay}
                </span>
                <span className="shrink-0 rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-800">
                  {count}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-green-700 transition-all duration-700"
                  style={{ width: `${(count / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Dashboard ── */
export default function Dashboard() {
  const { user } = useAuth();
  const { mosques, loading, error } = useFetchMosques();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60_000);
    return () => clearInterval(timer);
  }, []);

  const barangayCount = [...new Set(mosques.map((m) => m.barangay).filter(Boolean))].length;
  const withImages = mosques.filter((m) => m.image_url).length;
  const noImages = mosques.length - withImages;

  const greeting = () => {
    const h = currentTime.getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const dateLabel = currentTime.toLocaleDateString('en-PH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-6">

      {/* ── WELCOME HEADER ── */}
      <div className="overflow-hidden rounded-2xl bg-green-800 shadow-md">
        {/* Subtle decorative dots */}
        <svg
          className="absolute h-32 w-64 opacity-[0.07] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="admin-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#admin-dots)" />
        </svg>

        <div className="relative px-7 py-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
                Admin Dashboard
              </span>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                {greeting()}, {user?.name?.split(' ')[0] || 'Admin'} 👋
              </h2>
              <p className="mt-1.5 text-sm text-green-200">{dateLabel}</p>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Link
                to="/admin/mosques/add"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-800 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <PlusCircle className="add-cta-icon h-4 w-4" strokeWidth={2.2} />
                Add Mosque
              </Link>
              <p className="text-xs text-green-300">Updates the public directory instantly</p>
            </div>
          </div>

          {/* Quick summary strip */}
          {!loading && (
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl bg-white/10 px-4 py-2">
                <p className="text-xl font-black text-white">{mosques.length}</p>
                <p className="text-xs text-green-200">Total Mosques</p>
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-2">
                <p className="text-xl font-black text-white">{barangayCount}</p>
                <p className="text-xs text-green-200">Barangays</p>
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-2">
                <p className="text-xl font-black text-white">
                  {mosques.length ? Math.round((withImages / mosques.length) * 100) : 0}%
                </p>
                <p className="text-xs text-green-200">Photo Coverage</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── ERROR ── */}
      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">
          {error}
        </div>
      )}

      {/* ── STAT CARDS ── */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Mosques"
          value={mosques.length}
          icon={Landmark}
          colorClass="text-green-800"
          bgClass="bg-green-50"
          trend="In the directory"
          loading={loading}
        />
        <StatCard
          label="Barangays Covered"
          value={barangayCount}
          icon={MapPinned}
          colorClass="text-blue-700"
          bgClass="bg-blue-50"
          trend="Unique locations"
          loading={loading}
        />
        <StatCard
          label="With Photos"
          value={withImages}
          icon={Camera}
          colorClass="text-violet-700"
          bgClass="bg-violet-50"
          trend={`${mosques.length ? Math.round((withImages / mosques.length) * 100) : 0}% coverage`}
          loading={loading}
        />
        <StatCard
          label="Missing Photo"
          value={noImages}
          icon={ImageOff}
          colorClass="text-amber-700"
          bgClass="bg-amber-50"
          trend="Needs image upload"
          loading={loading}
        />
      </div>

      {/* ── QUICK ACTIONS ── */}
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">
          Quick Actions
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <QuickActionCard
            to="/admin/mosques"
            chipLabel="Manage"
            label="Mosque Records"
            description="Edit, delete, and review existing mosque listings."
            icon={Landmark}
            iconBg="bg-green-50"
            iconColor="text-green-800"
          />
          <QuickActionCard
            to="/admin/mosques/add"
            chipLabel="Create"
            label="Add New Mosque"
            description="Register a mosque with image, coordinates, and imam details."
            icon={PlusCircle}
            iconBg="bg-blue-50"
            iconColor="text-blue-700"
          />
          <QuickActionCard
            to="/map"
            chipLabel="View"
            label="Interactive Map"
            description="Preview the live geo-tagged map showing all mosque locations."
            icon={MapPinned}
            iconBg="bg-violet-50"
            iconColor="text-violet-700"
          />
        </div>
      </div>

      {/* ── BOTTOM ROW ── */}
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <RecentMosquesTable mosques={mosques} loading={loading} />
        <BarangayCoverage mosques={mosques} loading={loading} />
      </div>

      {/* ── SYSTEM INFO BAR ── */}
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
          <span className="text-sm font-semibold text-slate-700">System Online</span>
        </div>
        <span className="h-4 w-px bg-slate-200" />
        <p className="text-sm text-slate-500">
          Logged in as{' '}
          <span className="font-semibold text-slate-700">{user?.email}</span>
        </p>
        <span className="h-4 w-px bg-slate-200" />
        <p className="text-sm text-slate-500">
          All changes update the public directory in real time.
        </p>
        <div className="ml-auto">
          <Link
            to="/"
            target="_blank"
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-800"
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
            View Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}
