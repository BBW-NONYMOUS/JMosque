import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  MapPin,
  User,
  Building2,
  Navigation,
  ArrowLeft,
  Map as MapIcon,
  Globe,
  Loader2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import MapView from '../components/MapView';
import { fetchMosque } from '../services/api';

function InfoCard({ icon: Icon, label, value, className = '' }) {
  return (
    <div className={`rounded-2xl border border-stone-200 bg-white p-4 shadow-sm ${className}`}>
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-700">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-slate-800 sm:text-base">
            {value || '—'}
          </p>
        </div>
      </div>
    </div>
  );
}

function CoordinateCard({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value?.toString() || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-stone-100 p-2.5 text-slate-700">
            <Navigation className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
            <p className="mt-1 font-mono text-sm font-semibold text-slate-800 sm:text-base">
              {value || '—'}
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="rounded-lg border border-stone-200 p-2 text-slate-500 transition hover:bg-stone-50 hover:text-slate-700"
          title="Copy to clipboard"
          type="button"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="section-shell py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm animate-pulse">
          <div className="aspect-[4/3] bg-stone-200" />
        </div>

        <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="h-6 w-28 rounded-full bg-stone-100" />
          <div className="mt-4 h-10 w-3/4 rounded-xl bg-stone-200" />
          <div className="mt-4 h-20 rounded-2xl bg-stone-100" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-24 rounded-2xl bg-stone-100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MosqueDetails() {
  const { id } = useParams();
  const [mosque, setMosque] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const loadMosque = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await fetchMosque(id);
        setMosque(response.data);
      } catch (requestError) {
        setError(requestError.response?.data?.message || 'Unable to load mosque details.');
      } finally {
        setLoading(false);
      }
    };

    loadMosque();
  }, [id]);

  if (loading) return <LoadingSkeleton />;

  if (error || !mosque) {
    return (
      <div className="section-shell py-10 sm:py-12">
        <div className="mx-auto max-w-lg rounded-[28px] border border-stone-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-600">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Unable to Load Mosque</h2>
          <p className="mt-2 text-slate-600">{error || 'The requested mosque record was not found.'}</p>
          <Link
            to="/mosques"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Mosques
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <div className="section-shell py-8 sm:py-10">
        <Link
          to="/mosques"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Mosques
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
                  <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
                </div>
              )}

              <img
                src={mosque.image_url || '/placeholder-mosque.svg'}
                alt={mosque.mosque_name}
                onLoad={() => setImageLoaded(true)}
                className={`h-full w-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>

            <div className="border-t border-stone-200 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                  <MapPin className="h-4 w-4" />
                  Barangay {mosque.barangay || 'Kalamansig'}
                </span>
                <a
                  href={`https://www.google.com/maps?q=${mosque.latitude},${mosque.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  Mosque Profile
                </span>
                <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                  {mosque.mosque_name}
                </h1>
              </div>

              <Link
                to={`/map?focus=${mosque.id}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                <Navigation className="h-4 w-4" />
                View on Map
              </Link>
            </div>

            {mosque.description && (
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                {mosque.description}
              </p>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard icon={User} label="Imam" value={mosque.imam_name} />
              <InfoCard icon={Building2} label="Barangay" value={mosque.barangay} />
              <InfoCard icon={MapPin} label="Full Address" value={mosque.address} className="sm:col-span-2" />
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                <Globe className="h-4 w-4" />
                Geo Coordinates
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <CoordinateCard label="Latitude" value={mosque.latitude} />
                <CoordinateCard label="Longitude" value={mosque.longitude} />
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                <MapIcon className="h-3.5 w-3.5" />
                Location Map
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                {mosque.mosque_name} in Kalamansig
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                View the exact location and open directions for easier navigation.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
            <MapView mosques={[mosque]} height="clamp(320px, 46vh, 460px)" />
          </div>
        </section>
      </div>
    </div>
  );
}