import { useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Send,
  Star,
} from 'lucide-react';
import { submitFeedback } from '../services/api';

const STAR_LABELS = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  return (
    <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? 's' : ''} — ${STAR_LABELS[star]}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="rounded-lg p-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <Star
            className={`h-8 w-8 transition-all duration-100 ${
              star <= active
                ? 'fill-amber-400 text-amber-400 scale-110'
                : 'fill-transparent text-slate-300'
            }`}
            strokeWidth={1.5}
          />
        </button>
      ))}
      {active > 0 && (
        <span className="ml-2 text-sm font-semibold text-amber-600">{STAR_LABELS[active]}</span>
      )}
    </div>
  );
}

export default function GuestFeedback() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((c) => ({ ...c, [name]: value }));
    setFieldErrors((c) => ({ ...c, [name]: '' }));
    if (serverError) setServerError('');
  };

  const validate = () => {
    const errs = {};
    if (!form.rating) errs.rating = 'Please select a rating.';
    if (!form.comment.trim()) errs.comment = 'Please enter your comment.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }

    setLoading(true);
    setServerError('');
    try {
      await submitFeedback({
        name: form.name.trim() || undefined,
        email: form.email.trim() || undefined,
        rating: form.rating,
        comment: form.comment.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.errors?.comment?.[0] ||
        'Something went wrong. Please try again.';
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <section className="section-shell py-16 sm:py-20">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-700" strokeWidth={1.5} />
          </div>
          <h2 className="mt-6 text-2xl font-black text-slate-900">Thank you for your feedback!</h2>
          <p className="mt-3 text-slate-500">
            Your response has been recorded. We appreciate you taking the time to share your thoughts.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: '', email: '', rating: 0, comment: '' });
            }}
            className="btn-primary mt-8 mx-auto"
          >
            Submit Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell py-10 sm:py-14">
      {/* ── Page header ── */}
      <div className="mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-800">
          <MessageSquare className="h-3.5 w-3.5" strokeWidth={2.5} />
          Community Feedback
        </div>
        <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Share Your Feedback</h1>
        <p className="mt-3 max-w-xl text-slate-500">
          Help us improve the Mosque Information System. Your rating and comments are valuable to us.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

        {/* ── Form ── */}
        <div className="card-surface p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>

            {/* Star rating */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">
                Overall Rating <span className="text-rose-500">*</span>
              </label>
              <StarRating value={form.rating} onChange={(v) => {
                setForm((c) => ({ ...c, rating: v }));
                setFieldErrors((c) => ({ ...c, rating: '' }));
              }} />
              {fieldErrors.rating && (
                <p className="flex items-center gap-1.5 text-xs font-medium text-rose-600">
                  <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                  {fieldErrors.rating}
                </p>
              )}
            </div>

            {/* Comment */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700" htmlFor="comment">
                Your Comments <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                value={form.comment}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us what you think about the system, what can be improved, or share your experience…"
                className={`field-input resize-none ${
                  fieldErrors.comment ? 'border-rose-400 focus:border-rose-400' : ''
                }`}
              />
              <div className="flex items-center justify-between">
                {fieldErrors.comment ? (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-rose-600">
                    <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                    {fieldErrors.comment}
                  </p>
                ) : (
                  <span />
                )}
                <span className={`text-xs ${form.comment.length > 1800 ? 'text-rose-500' : 'text-slate-400'}`}>
                  {form.comment.length}/2000
                </span>
              </div>
            </div>

            {/* Optional: Name */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700" htmlFor="name">
                Your Name <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Juan dela Cruz"
                maxLength={100}
                className="field-input"
              />
            </div>

            {/* Optional: Email */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
                Email Address <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                maxLength={150}
                className={`field-input ${
                  fieldErrors.email ? 'border-rose-400 focus:border-rose-400' : ''
                }`}
              />
              {fieldErrors.email && (
                <p className="flex items-center gap-1.5 text-xs font-medium text-rose-600">
                  <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} />
                  {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Required fields notice */}
            {Object.keys(fieldErrors).some((k) => fieldErrors[k]) && (
              <div className="flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" strokeWidth={2} />
                <p className="text-sm font-medium text-amber-700">
                  Please fill in all required fields.
                </p>
              </div>
            )}

            {/* Server error */}
            {serverError && (
              <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
                <p className="text-sm text-rose-700">{serverError}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2} />
                  Submitting…
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" strokeWidth={2} />
                  Submit Feedback
                </>
              )}
            </button>
          </form>
        </div>

        {/* ── Info panel ── */}
        <div className="space-y-5">
          <div className="card-surface p-6">
            <h3 className="font-bold text-slate-900">Why your feedback matters</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Helps us improve the mosque directory',
                'Guides future feature development',
                'Ensures accuracy of mosque information',
                'Supports the local Muslim community',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-green-800 p-6 text-white">
            <Star className="h-8 w-8 text-amber-400" strokeWidth={1.5} />
            <p className="mt-3 text-sm leading-relaxed text-green-100">
              Your identity is kept private. Name and email are completely optional —
              only your rating and comment are required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
