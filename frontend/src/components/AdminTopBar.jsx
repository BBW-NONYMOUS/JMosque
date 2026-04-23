import { useEffect, useRef, useState } from 'react';
import { Bell, Menu, MessageSquare, Star, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fetchFeedback } from '../services/api';

const pageTitles = {
  '/admin':             { title: 'Dashboard',         sub: 'Overview & statistics' },
  '/admin/mosques':     { title: 'Manage Mosques',    sub: 'Edit and review listings' },
  '/admin/mosques/add': { title: 'Add Mosque',        sub: 'Create a new record' },
  '/admin/settings':    { title: 'Settings',          sub: 'Account & preferences' },
  '/admin/backup':      { title: 'Backup & Recovery', sub: 'Export and restore data' },
  '/admin/feedback':    { title: 'Feedback',          sub: 'Guest ratings & comments' },
};

const SEEN_KEY = 'mosque_feedback_seen';
const AVATAR_KEY = 'mosque_admin_avatar';

function getPageInfo(pathname) {
  if (pageTitles[pathname]) return pageTitles[pathname];
  if (pathname.endsWith('/edit')) return { title: 'Edit Mosque', sub: 'Update mosque details' };
  return { title: 'Admin Panel', sub: 'Mosque Information System' };
}

function starColor(rating) {
  if (rating >= 4) return 'text-green-600';
  if (rating === 3) return 'text-amber-500';
  return 'text-rose-500';
}

function formatFeedbackDate(value) {
  if (!value) return '';

  return new Date(value).toLocaleDateString('en-PH', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function NotifDropdown({ items, unread, onMarkRead, onClose }) {
  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-96">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-green-700" strokeWidth={2} />
          <span className="text-sm font-bold text-slate-900">Feedback</span>
          {unread > 0 && (
            <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[0.6rem] font-black text-white">
              {unread} new
            </span>
          )}
        </div>
        <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600">
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
        {items.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <MessageSquare className="mx-auto h-8 w-8 text-slate-200" strokeWidth={1.5} />
            <p className="mt-2 text-sm text-slate-400">No feedback yet</p>
          </div>
        ) : (
          items.map((fb) => (
            <Link
              key={fb.id}
              to="/admin/feedback"
              onClick={() => {
                onMarkRead();
                onClose();
              }}
              className="block px-4 py-3 transition hover:bg-slate-50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-slate-800">{fb.name || 'Anonymous'}</p>
                  {fb.email && <p className="truncate text-[11px] text-slate-400">{fb.email}</p>}
                </div>
                <div className={`flex shrink-0 items-center gap-0.5 text-xs font-bold ${starColor(fb.rating)}`}>
                  <Star className="h-3 w-3 fill-current" strokeWidth={0} />
                  {fb.rating}/5
                </div>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-slate-500">{fb.comment}</p>
              <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-slate-400">
                <span className="truncate">{fb.mosque?.mosque_name || 'General feedback'}</span>
                <span className="shrink-0">{formatFeedbackDate(fb.created_at)}</span>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="border-t border-slate-100 px-4 py-3">
        <Link
          to="/admin/feedback"
          onClick={() => {
            onMarkRead();
            onClose();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-800 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          <MessageSquare className="h-4 w-4" strokeWidth={2} />
          View All Feedback
        </Link>
      </div>
    </div>
  );
}

export default function AdminTopBar({ onSidebarToggle }) {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const { title, sub } = getPageInfo(pathname);
  const [avatar, setAvatar] = useState(() => localStorage.getItem(AVATAR_KEY) || '');
  const [feedbackTotal, setFeedbackTotal] = useState(0);
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifs, setShowNotifs] = useState(false);
  const notifRef = useRef(null);

  const loadFeedbackPreview = () => {
    fetchFeedback(1)
      .then((res) => {
        const items = res.data ?? [];
        const total = res.total ?? items.length;
        const seen = parseInt(localStorage.getItem(SEEN_KEY) || '0', 10);

        setFeedbackItems(items.slice(0, 5));
        setFeedbackTotal(total);
        setUnreadCount(Math.max(0, total - seen));
      })
      .catch(() => {});
  };

  useEffect(() => {
    loadFeedbackPreview();
  }, []);

  useEffect(() => {
    const syncAvatar = () => setAvatar(localStorage.getItem(AVATAR_KEY) || '');
    window.addEventListener('mosque-avatar-updated', syncAvatar);
    return () => window.removeEventListener('mosque-avatar-updated', syncAvatar);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifs(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const syncReadState = () => {
      const seen = parseInt(localStorage.getItem(SEEN_KEY) || '0', 10);
      setUnreadCount(Math.max(0, feedbackTotal - seen));
    };

    window.addEventListener('mosque-feedback-seen', syncReadState);
    return () => window.removeEventListener('mosque-feedback-seen', syncReadState);
  }, [feedbackTotal]);

  useEffect(() => {
    if (showNotifs) {
      loadFeedbackPreview();
    }
  }, [showNotifs]);

  const markAllRead = () => {
    localStorage.setItem(SEEN_KEY, String(feedbackTotal));
    setUnreadCount(0);
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() || 'A';

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur sm:px-6">
      <button
        type="button"
        onClick={onSidebarToggle}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-100 md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-4 w-4" strokeWidth={2} />
      </button>

      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-black text-slate-900 sm:text-lg">{title}</h1>
        <p className="hidden truncate text-xs text-slate-400 sm:block">{sub}</p>
      </div>

      <div className="flex items-center gap-2">
        <div ref={notifRef} className="relative">
          <button
            type="button"
            onClick={() => setShowNotifs((current) => !current)}
            title="Feedback notifications"
            className={`relative flex h-9 w-9 items-center justify-center rounded-xl border transition ${
              showNotifs
                ? 'border-green-300 bg-green-50 text-green-800'
                : 'border-slate-200 text-slate-500 hover:border-green-200 hover:bg-green-50 hover:text-green-800'
            }`}
          >
            <Bell className="h-4 w-4" strokeWidth={2} />
            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[0.55rem] font-black text-white shadow">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>

          {showNotifs && (
            <NotifDropdown
              items={feedbackItems}
              unread={unreadCount}
              onMarkRead={markAllRead}
              onClose={() => setShowNotifs(false)}
            />
          )}
        </div>

        <Link
          to="/admin/settings"
          title="Your profile"
          className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 transition hover:border-green-200 hover:bg-green-50"
        >
          {avatar ? (
            <img
              src={avatar}
              alt="Profile"
              className="h-7 w-7 shrink-0 rounded-full object-cover ring-1 ring-green-200"
            />
          ) : (
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-800 text-xs font-black text-white shadow-sm">
              {initial}
            </div>
          )}
          <span className="hidden max-w-28 truncate text-sm font-semibold text-slate-700 sm:block">
            {user?.name || 'Admin'}
          </span>
        </Link>
      </div>
    </header>
  );
}
