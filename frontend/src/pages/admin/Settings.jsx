import { useRef, useState } from 'react';
import {
  Bell,
  Camera,
  CheckCircle2,
  Eye,
  EyeOff,
  Globe,
  KeyRound,
  Loader2,
  Lock,
  Save,
  Shield,
  Trash2,
  User,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const AVATAR_KEY = 'mosque_admin_avatar';

/* ── Helpers ── */
function SuccessBanner({ message }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700" strokeWidth={2} />
      <p className="text-sm font-medium text-green-800">{message}</p>
    </div>
  );
}

function ErrorBanner({ message }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3">
      <Shield className="h-4 w-4 shrink-0 text-rose-600" strokeWidth={2} />
      <p className="text-sm font-medium text-rose-700">{message}</p>
    </div>
  );
}

function SectionCard({ icon: Icon, title, description, children, accent = 'green' }) {
  const accents = {
    green: 'bg-green-800',
    blue:  'bg-sky-700',
    amber: 'bg-amber-600',
    slate: 'bg-slate-600',
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/70 px-6 py-4">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${accents[accent]}`}>
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-900">{title}</h2>
          {description && <p className="text-xs text-slate-400">{description}</p>}
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function Toggle({ checked, onChange, label, description }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/60 px-5 py-4 transition hover:border-green-200 hover:bg-green-50/30">
      <div>
        <p className="text-sm font-semibold text-slate-800">{label}</p>
        {description && <p className="mt-0.5 text-xs text-slate-400">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
          checked ? 'bg-green-700' : 'bg-slate-300'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

/* ── Main component ── */
export default function Settings() {
  const { user } = useAuth();
  const fileRef = useRef(null);

  /* Profile photo */
  const [avatar, setAvatar]         = useState(() => localStorage.getItem(AVATAR_KEY) || '');
  const [avatarSuccess, setAvatarSuccess] = useState('');

  /* Password */
  const [pwForm, setPwForm]         = useState({ current: '', newPw: '', confirm: '' });
  const [showPw, setShowPw]         = useState({ current: false, newPw: false, confirm: false });
  const [pwLoading, setPwLoading]   = useState(false);
  const [pwSuccess, setPwSuccess]   = useState('');
  const [pwError, setPwError]       = useState('');

  /* Notifications */
  const [notifs, setNotifs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mosque_admin_notifs') || '{"feedback":true,"browser":true}'); }
    catch { return { feedback: true, browser: true }; }
  });
  const [notifSaved, setNotifSaved] = useState(false);

  /* System info */
  const systemInfo = [
    { label: 'Application',  value: 'Mosque Information System' },
    { label: 'Municipality', value: 'Kalamansig, Sultan Kudarat' },
    { label: 'Region',       value: 'Soccsksargen' }
  ];

  /* ── Avatar upload ── */
  const handleAvatarFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Image must be smaller than 2 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      localStorage.setItem(AVATAR_KEY, dataUrl);
      setAvatar(dataUrl);
      setAvatarSuccess('Profile photo updated.');
      window.dispatchEvent(new Event('mosque-avatar-updated'));
      setTimeout(() => setAvatarSuccess(''), 3000);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const removeAvatar = () => {
    localStorage.removeItem(AVATAR_KEY);
    setAvatar('');
    window.dispatchEvent(new Event('mosque-avatar-updated'));
  };

  /* ── Password ── */
  const handlePwChange = (e) => {
    const { name, value } = e.target;
    setPwForm((c) => ({ ...c, [name]: value }));
    if (pwError) setPwError('');
    if (pwSuccess) setPwSuccess('');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!pwForm.current || !pwForm.newPw || !pwForm.confirm) {
      setPwError('Please fill in all password fields.');
      return;
    }
    if (pwForm.newPw.length < 8) {
      setPwError('New password must be at least 8 characters.');
      return;
    }
    if (pwForm.newPw !== pwForm.confirm) {
      setPwError('New passwords do not match.');
      return;
    }
    setPwLoading(true);
    try {
      await api.put('/admin/password', {
        current_password: pwForm.current,
        password: pwForm.newPw,
        password_confirmation: pwForm.confirm,
      });
      setPwSuccess('Password updated successfully.');
      setPwForm({ current: '', newPw: '', confirm: '' });
    } catch (err) {
      setPwError(
        err.response?.data?.message ||
        err.response?.data?.errors?.current_password?.[0] ||
        'Failed to update password.'
      );
    } finally {
      setPwLoading(false);
    }
  };

  /* ── Notifications ── */
  const saveNotifs = () => {
    localStorage.setItem('mosque_admin_notifs', JSON.stringify(notifs));
    setNotifSaved(true);
    setTimeout(() => setNotifSaved(false), 2500);
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() || 'A';

  return (
    <div className="mx-auto max-w-3xl space-y-6">

      {/* ══════════════════════════════════════════
          PROFILE HERO BANNER
      ══════════════════════════════════════════ */}
      <div className="overflow-hidden rounded-2xl bg-green-800 shadow-md">
        {/* Decorative pattern */}
        <div className="pointer-events-none absolute h-40 w-full opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        <div className="relative px-6 py-8 sm:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end">

            {/* ── Avatar ── */}
            <div className="relative shrink-0">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white/30 bg-green-700 shadow-xl sm:h-28 sm:w-28">
                {avatar ? (
                  <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-4xl font-black text-white sm:text-5xl">
                    {initial}
                  </span>
                )}
              </div>

              {/* Camera overlay button */}
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-600 text-white shadow-lg transition hover:bg-green-500"
                title="Upload photo"
              >
                <Camera className="h-3.5 w-3.5" strokeWidth={2.5} />
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleAvatarFile}
              />
            </div>

            {/* ── Name / role ── */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-green-300">
                Administrator
              </p>
              <h2 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                {user?.name || 'Admin'}
              </h2>
              <p className="mt-1 text-sm text-green-200">{user?.email}</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/25"
                >
                  <Camera className="h-3.5 w-3.5" strokeWidth={2} />
                  {avatar ? 'Change Photo' : 'Upload Photo'}
                </button>
                {avatar && (
                  <button
                    type="button"
                    onClick={removeAvatar}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-rose-500/20 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/30"
                  >
                    <Trash2 className="h-3.5 w-3.5" strokeWidth={2} />
                    Remove
                  </button>
                )}
              </div>

              {avatarSuccess && (
                <p className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-green-300 sm:justify-start">
                  <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
                  {avatarSuccess}
                </p>
              )}
            </div>

            {/* ── Badge ── */}
            <div className="hidden shrink-0 flex-col items-end gap-1 sm:flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white">
                <Shield className="h-3.5 w-3.5 text-green-300" strokeWidth={2.5} />
                Admin Access
              </span>
              <p className="text-[0.65rem] text-green-400">Full permissions</p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ACCOUNT INFO (read-only)
      ══════════════════════════════════════════ */}
      <SectionCard icon={User} title="Account Information" description="Your admin profile details">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: 'Full Name', value: user?.name || '—' },
            { label: 'Email Address', value: user?.email || '—' },
            { label: 'Role', value: 'Administrator' },
            { label: 'Access Level', value: 'Full permissions' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">{label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ══════════════════════════════════════════
          CHANGE PASSWORD
      ══════════════════════════════════════════ */}
      <SectionCard icon={KeyRound} title="Change Password" description="Update your login password" accent="blue">
        <form onSubmit={handlePasswordSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { key: 'current', label: 'Current Password' },
              { key: 'newPw',   label: 'New Password' },
              { key: 'confirm', label: 'Confirm New' },
            ].map(({ key, label }) => (
              <div key={key} className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                  {label} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                    <Lock className="h-4 w-4 text-slate-300" strokeWidth={2} />
                  </div>
                  <input
                    type={showPw[key] ? 'text' : 'password'}
                    name={key}
                    value={pwForm[key]}
                    onChange={handlePwChange}
                    placeholder="••••••••"
                    className="field-input pl-9 pr-10 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((c) => ({ ...c, [key]: !c[key] }))}
                    className="absolute inset-y-0 right-2.5 flex items-center text-slate-300 transition hover:text-slate-600"
                  >
                    {showPw[key]
                      ? <EyeOff className="h-4 w-4" strokeWidth={2} />
                      : <Eye className="h-4 w-4" strokeWidth={2} />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {pwSuccess && <SuccessBanner message={pwSuccess} />}
          {pwError   && <ErrorBanner   message={pwError} />}

          <button
            type="submit"
            disabled={pwLoading}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
          >
            {pwLoading
              ? <><Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /> Saving…</>
              : <><Save    className="h-4 w-4" strokeWidth={2} /> Update Password</>}
          </button>
        </form>
      </SectionCard>

      {/* ══════════════════════════════════════════
          NOTIFICATIONS
      ══════════════════════════════════════════ */}
      <SectionCard icon={Bell} title="Notifications" description="Manage what alerts you receive" accent="amber">
        <div className="space-y-3">
          <Toggle
            checked={notifs.feedback}
            onChange={() => setNotifs((c) => ({ ...c, feedback: !c.feedback }))}
            label="Feedback notifications"
            description="Show badge on bell when new feedback is submitted"
          />
          <Toggle
            checked={notifs.browser}
            onChange={() => setNotifs((c) => ({ ...c, browser: !c.browser }))}
            label="Browser notifications"
            description="Show OS-level alerts for important events"
          />

          {notifSaved && <SuccessBanner message="Notification preferences saved." />}

          <div className="pt-1">
            <button type="button" onClick={saveNotifs} className="btn-secondary">
              <Save className="h-4 w-4" strokeWidth={2} />
              Save Preferences
            </button>
          </div>
        </div>
      </SectionCard>

      {/* ══════════════════════════════════════════
          SYSTEM INFORMATION
      ══════════════════════════════════════════ */}
      <SectionCard icon={Globe} title="System Information" description="Technical details about this installation" accent="slate">
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {systemInfo.map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-slate-400">{label}</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>
      </SectionCard>
    </div>
  );
}
