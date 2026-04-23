import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  AlertTriangle,
  Clock,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import KalamansigLogo from '../assets/images/Kalamansig Logo.jpg';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 5 * 60 * 1000; // 5 minutes
const STORAGE_KEY = 'mosque_login_attempts';

function getAttemptData() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"count":0,"lockedUntil":null}');
  } catch {
    return { count: 0, lockedUntil: null };
  }
}

function saveAttemptData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function clearAttemptData() {
  localStorage.removeItem(STORAGE_KEY);
}

function getRemainingLockout(lockedUntil) {
  if (!lockedUntil) return 0;
  return Math.max(0, lockedUntil - Date.now());
}

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login, authLoading } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);

  /* Check lockout on mount and keep countdown */
  useEffect(() => {
    const data = getAttemptData();
    const remaining = getRemainingLockout(data.lockedUntil);
    setLockoutRemaining(remaining);

    if (remaining > 0) {
      const timer = setInterval(() => {
        const d = getAttemptData();
        const rem = getRemainingLockout(d.lockedUntil);
        setLockoutRemaining(rem);
        if (rem <= 0) {
          clearAttemptData();
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const formatCountdown = (ms) => {
    const totalSec = Math.ceil(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((c) => ({ ...c, [name]: value }));
    if (error) setError('');
    if (fieldError) setFieldError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* ── Required-fields check ── */
    if (!form.email.trim() || !form.password.trim()) {
      setFieldError('Please fill in all fields.');
      return;
    }

    /* ── Lockout check ── */
    const attemptData = getAttemptData();
    const remaining = getRemainingLockout(attemptData.lockedUntil);
    if (remaining > 0) {
      setLockoutRemaining(remaining);
      return;
    }

    try {
      setError('');
      setFieldError('');
      await login(form);
      clearAttemptData();
      navigate('/admin');
    } catch (err) {
      const newCount = (attemptData.count || 0) + 1;
      const isLocked = newCount >= MAX_ATTEMPTS;

      saveAttemptData({
        count: isLocked ? 0 : newCount,
        lockedUntil: isLocked ? Date.now() + LOCKOUT_MS : null,
      });

      if (isLocked) {
        setLockoutRemaining(LOCKOUT_MS);
        setError(
          `Too many failed attempts. Please wait 5 minutes before trying again.`
        );
      } else {
        const left = MAX_ATTEMPTS - newCount;
        setError(
          (err.response?.data?.message ||
            err.response?.data?.errors?.email?.[0] ||
            'Incorrect email or password.') +
            (left <= 2 ? ` (${left} attempt${left === 1 ? '' : 's'} remaining)` : '')
        );
      }
    }
  };

  const isLocked = lockoutRemaining > 0;

  return (
    <div className="flex min-h-screen bg-white">
      {/* ── Login form ── */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Centered Logo */}
        <img
          src={KalamansigLogo}
          alt="Kalamansig Logo"
          className="h-20 w-20 rounded-full object-cover shadow-lg mb-4"
        />
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-8 text-center">
           
            <h2 className="mt-4 text-2md font-black text-slate-900">Mosque Information System</h2>
           </div>

{/* Endline */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                  <Mail className="h-4 w-4 text-slate-400" strokeWidth={2} />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  autoComplete="email"
                  disabled={isLocked}
                  className={`w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:outline-none focus:ring-3 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-50 ${
                    fieldError && !form.email.trim()
                      ? 'border-rose-400 focus:border-rose-400'
                      : 'border-slate-200 focus:border-green-500'
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700" htmlFor="password">
                Password <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center">
                  <Lock className="h-4 w-4 text-slate-400" strokeWidth={2} />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={isLocked}
                  className={`w-full rounded-xl border bg-white py-3 pl-10 pr-12 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:outline-none focus:ring-3 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-50 ${
                    fieldError && !form.password.trim()
                      ? 'border-rose-400 focus:border-rose-400'
                      : 'border-slate-200 focus:border-green-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  disabled={isLocked}
                  className="absolute inset-y-0 right-3 flex items-center px-1 text-slate-400 transition hover:text-slate-600 disabled:opacity-50"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" strokeWidth={2} />
                  ) : (
                    <Eye className="h-4 w-4" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Required fields message */}
            {fieldError && (
              <div className="flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" strokeWidth={2} />
                <p className="text-sm font-medium text-amber-700">{fieldError}</p>
              </div>
            )}

            {/* Lockout banner */}
            {isLocked && (
              <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
                <div>
                  <p className="text-sm font-semibold text-rose-700">Account temporarily locked</p>
                  <p className="mt-0.5 text-sm text-rose-600">
                    Too many failed attempts. Try again in{' '}
                    <span className="font-bold">{formatCountdown(lockoutRemaining)}</span>.
                  </p>
                </div>
              </div>
            )}

            {/* Error (non-lockout) */}
            {error && !isLocked && (
              <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
                <p className="text-sm text-rose-700">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={authLoading || isLocked}
              className="btn-primary w-full justify-center py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70"
            >
              {authLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2} />
                  Signing in…
                </>
              ) : isLocked ? (
                <>
                  <Clock className="h-5 w-5" strokeWidth={2} />
                  Locked — {formatCountdown(lockoutRemaining)}
                </>
              ) : (
                <>
                  <ShieldCheck className="h-5 w-5" strokeWidth={2} />
                  Sign In
                </>
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-400">
            This is a secure admin area. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}
