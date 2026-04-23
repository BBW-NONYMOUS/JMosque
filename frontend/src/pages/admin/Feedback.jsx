import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Star,
  User,
} from 'lucide-react';
import { fetchFeedback } from '../../services/api';

const SEEN_KEY = 'mosque_feedback_seen';

function StarDisplay({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`h-3.5 w-3.5 ${
            value <= rating ? 'fill-amber-400 text-amber-400' : 'fill-transparent text-slate-200'
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ratingLabel(rating) {
  return ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating] || '-';
}

function ratingColor(rating) {
  if (rating >= 4) return 'bg-green-100 text-green-800';
  if (rating === 3) return 'bg-amber-100 text-amber-800';
  return 'bg-rose-100 text-rose-700';
}

function formatDisplayDate(value) {
  if (!value) return 'Unknown date';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Unknown date';

  return date.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function getErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    'Failed to load feedback. Please try again.'
  );
}

function StatCard({ label, value, icon: Icon, color }) {
  const colors = {
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    blue: 'bg-sky-100 text-sky-700',
  };

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors[color]}`}>
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div>
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">{label}</p>
        <p className="mt-0.5 text-2xl font-black text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function FeedbackSkeleton() {
  return (
    <div className="divide-y divide-slate-50">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-start gap-4 px-6 py-5">
          <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-40 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-3 w-24 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-3 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="h-3 w-3/4 animate-pulse rounded-lg bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AdminFeedback() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError('');

    fetchFeedback(page)
      .then((response) => {
        if (!active) return;

        setData(response);
        localStorage.setItem(SEEN_KEY, String(response?.total ?? 0));
        window.dispatchEvent(new Event('mosque-feedback-seen'));
      })
      .catch((err) => {
        if (!active) return;
        setError(getErrorMessage(err));
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [page]);

  const items = Array.isArray(data?.data) ? data.data : [];
  const total = typeof data?.total === 'number' ? data.total : items.length;
  const lastPage = Math.max(1, data?.last_page ?? 1);
  const currentPage = Math.min(page, lastPage);

  const avgRating = items.length
    ? (items.reduce((sum, feedback) => sum + (Number(feedback.rating) || 0), 0) / items.length).toFixed(1)
    : '-';
  const positive = items.filter((feedback) => Number(feedback.rating) >= 4).length;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total Feedback" value={total} icon={MessageSquare} color="blue" />
        <StatCard label="Avg Rating (page)" value={avgRating} icon={Star} color="amber" />
        <StatCard label="Positive (4+ star)" value={positive} icon={Star} color="green" />
      </div>

      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm text-rose-700">
          {error}
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">All Feedback</h3>
            <p className="text-xs text-slate-400">
              {total} submission{total !== 1 ? 's' : ''} total
            </p>
          </div>
        </div>

        {loading ? (
          <FeedbackSkeleton />
        ) : items.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <MessageSquare className="mx-auto h-10 w-10 text-slate-200" strokeWidth={1.5} />
            <p className="mt-3 text-sm font-semibold text-slate-400">No feedback submitted yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-50">
            {items.map((feedback) => (
              <div
                key={feedback.id}
                className="flex items-start gap-4 px-6 py-5 transition hover:bg-slate-50/60"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-black text-green-800">
                  {feedback.name ? (
                    feedback.name.charAt(0).toUpperCase()
                  ) : (
                    <User className="h-4 w-4 text-green-600" strokeWidth={2} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-bold text-slate-900">
                      {feedback.name || <span className="italic text-slate-400">Anonymous</span>}
                    </p>

                    {feedback.email && (
                      <span className="text-xs text-slate-400">{feedback.email}</span>
                    )}

                    <span
                      className={`ml-auto rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold ${ratingColor(
                        Number(feedback.rating) || 0
                      )}`}
                    >
                      {ratingLabel(Number(feedback.rating) || 0)}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center gap-2">
                    <StarDisplay rating={Number(feedback.rating) || 0} />
                    <span className="text-xs text-slate-400">{formatDisplayDate(feedback.created_at)}</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feedback.comment || 'No comment provided.'}</p>

                  {feedback.mosque?.mosque_name && (
                    <p className="mt-2 text-xs text-slate-400">
                      Re: <span className="font-semibold text-slate-600">{feedback.mosque.mosque_name}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {lastPage > 1 && (
          <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
            <button
              type="button"
              onClick={() => setPage((current) => Math.max(1, current - 1))}
              disabled={currentPage === 1 || loading}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" strokeWidth={2.5} />
              Previous
            </button>

            <span className="text-xs text-slate-400">
              Page <span className="font-bold text-slate-700">{currentPage}</span> of {lastPage}
            </span>

            <button
              type="button"
              onClick={() => setPage((current) => Math.min(lastPage, current + 1))}
              disabled={currentPage === lastPage || loading}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
