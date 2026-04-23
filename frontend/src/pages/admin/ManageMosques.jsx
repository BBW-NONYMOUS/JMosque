import { useState } from 'react';
import { AlertTriangle, ExternalLink, Landmark, Loader2, MapPin, PlusCircle, SquarePen, Trash2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import useFetchMosques from '../../hooks/useFetchMosques';
import { deleteMosque } from '../../services/api';

/* ── Inline delete confirmation dialog ── */
function DeleteConfirmModal({ mosqueName, onConfirm, onCancel, deleting }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onCancel}
      />
      {/* Modal */}
      <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100">
            <AlertTriangle className="h-5 w-5 text-rose-600" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-900">Delete Mosque?</h3>
            <p className="mt-1 text-sm text-slate-500">
              You are about to permanently delete{' '}
              <span className="font-semibold text-slate-800">{mosqueName}</span>. This action
              cannot be undone.
            </p>
          </div>
          <button
            type="button"
            onClick={onCancel}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={deleting}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={deleting}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 disabled:opacity-60"
          >
            {deleting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                Deleting…
              </>
            ) : (
              <>
                <Trash2 className="h-4 w-4" strokeWidth={2} />
                Delete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Skeleton row ── */
function SkeletonRow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="grid gap-5 lg:grid-cols-[160px_1fr_auto] lg:items-center">
        <div className="h-36 w-full animate-pulse rounded-2xl bg-gray-200 lg:h-28" />
        <div className="space-y-3">
          <div className="h-4 w-20 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-3/4 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-4 w-1/2 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-4 w-1/3 animate-pulse rounded-lg bg-gray-200" />
        </div>
        <div className="flex gap-3 sm:flex-col">
          <div className="h-10 w-28 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-10 w-28 animate-pulse rounded-xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default function ManageMosques() {
  const { mosques, loading, error, refetch } = useFetchMosques();
  const [confirmId, setConfirmId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const pendingMosque = mosques.find((m) => m.id === confirmId);

  const handleDeleteConfirm = async () => {
    try {
      setDeleting(true);
      await deleteMosque(confirmId);
      setConfirmId(null);
      await refetch();
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* ── HEADER ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="label-chip">Mosque Listings</span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Mosque Records
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
            Review all listings, then edit or remove records from the directory.
            {!loading && (
              <span className="ml-1 font-semibold text-green-800">
                {mosques.length} mosque{mosques.length !== 1 ? 's' : ''} total.
              </span>
            )}
          </p>
        </div>
        <Link
          to="/admin/mosques/add"
          className="btn-primary w-full justify-center sm:w-auto"
        >
          <PlusCircle className="add-cta-icon h-4 w-4" strokeWidth={2.2} />
          Add Mosque
        </Link>
      </div>

      {/* ── ERROR ── */}
      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">
          {error}
        </div>
      )}

      {/* ── CONTENT ── */}
      {loading ? (
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)}
        </div>
      ) : mosques.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white py-16 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
            <Landmark className="h-8 w-8 text-green-300" strokeWidth={1.5} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-800">No mosques yet</h3>
          <p className="mt-1 max-w-xs text-sm text-slate-500">
            Start building the directory by adding the first mosque record.
          </p>
          <Link to="/admin/mosques/add" className="btn-primary mt-6">
            <PlusCircle className="h-4 w-4" strokeWidth={2} />
            Add First Mosque
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {mosques.map((mosque) => (
            <article
              key={mosque.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="grid gap-5 p-5 lg:grid-cols-[160px_1fr_auto] lg:items-center">
                {/* Image */}
                <div className="relative h-36 w-full overflow-hidden rounded-2xl bg-slate-100 lg:h-28">
                  {mosque.image_url ? (
                    <img
                      src={mosque.image_url}
                      alt={mosque.mosque_name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl">
                      🕌
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <span className="label-chip text-xs">{mosque.barangay}</span>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 line-clamp-1">
                    {mosque.mosque_name}
                  </h3>
                  <div className="mt-2 flex items-start gap-1.5 text-sm text-slate-500">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" strokeWidth={2} />
                    <span className="line-clamp-1">{mosque.address}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    Imam:{' '}
                    <span className="font-semibold text-slate-700">
                      {mosque.imam_name || 'Not set'}
                    </span>
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-row gap-3 sm:flex-row lg:flex-col lg:gap-2">
                  <Link
                    to={`/admin/mosques/${mosque.id}/edit`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-green-800 bg-white px-4 py-2.5 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-50 lg:flex-none lg:w-32"
                  >
                    <SquarePen className="h-4 w-4" strokeWidth={2.2} />
                    Edit
                  </Link>
                  <Link
                    to={`/mosques/${mosque.id}`}
                    target="_blank"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-800 lg:w-32"
                  >
                    <ExternalLink className="h-4 w-4" strokeWidth={2} />
                    Preview
                  </Link>
                  <button
                    type="button"
                    onClick={() => setConfirmId(mosque.id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-rose-50 border border-rose-200 px-4 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 lg:flex-none lg:w-32"
                  >
                    <Trash2 className="h-4 w-4" strokeWidth={2.2} />
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* ── DELETE CONFIRM MODAL ── */}
      {confirmId && pendingMosque && (
        <DeleteConfirmModal
          mosqueName={pendingMosque.mosque_name}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setConfirmId(null)}
          deleting={deleting}
        />
      )}
    </div>
  );
}
