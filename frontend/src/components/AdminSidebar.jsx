import {
  ChevronRight,
  Database,
  Home,
  Landmark,
  LayoutDashboard,
  LogOut,
  Map,
  MessageSquare,
  PlusCircle,
  Settings,
  X,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const adminLinks = [
  {
    to: '/admin',
    label: 'Dashboard',
    description: 'Overview & stats',
    end: true,
    icon: LayoutDashboard,
  },
  {
    to: '/admin/mosques',
    label: 'Manage Mosques',
    description: 'Edit & review listings',
    icon: Landmark,
  },
  {
    to: '/admin/mosques/add',
    label: 'Add Mosque',
    description: 'Create a new record',
    icon: PlusCircle,
  },
];

const toolLinks = [
  {
    to: '/admin/feedback',
    label: 'Feedback',
    description: 'Guest ratings & comments',
    icon: MessageSquare,
  },
  {
    to: '/admin/backup',
    label: 'Backup & Recovery',
    description: 'Export & restore data',
    icon: Database,
  },
  {
    to: '/admin/settings',
    label: 'Settings',
    description: 'Account & preferences',
    icon: Settings,
  },
];

const publicLinks = [
  {
    to: '/',
    label: 'Public Home',
    description: 'Back to landing page',
    end: true,
    icon: Home,
  },
  {
    to: '/mosques',
    label: 'Mosque Directory',
    description: 'Browse public listings',
    icon: Landmark,
  },
  {
    to: '/map',
    label: 'Interactive Map',
    description: 'Geo-tagged map view',
    icon: Map,
  },
];

const sidebarLinkClass = ({ isActive }) =>
  `group relative flex items-start gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
    isActive
      ? 'bg-green-50 text-green-900 ring-1 ring-green-100'
      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
  }`;

function SidebarSection({ title, links, onNavigate }) {
  return (
    <div className="space-y-0.5">
      <h3 className="mb-2 px-3 text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">
        {title}
      </h3>
      <nav className="space-y-0.5">
        {links.map(({ to, label, description, end, icon: Icon }) => {
          const isAddLink = to.endsWith('/add');
          return (
            <NavLink key={to} to={to} end={end} className={sidebarLinkClass} onClick={onNavigate}>
              {({ isActive }) => (
                <>
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all ${
                      isActive
                        ? 'bg-green-800 text-white shadow-sm'
                        : isAddLink
                        ? 'bg-green-50 text-green-700 group-hover:bg-green-100'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`block truncate font-semibold ${isActive ? 'text-green-900' : ''}`}>
                      {label}
                    </span>
                    <span className="block truncate text-xs font-normal text-slate-400">
                      {description}
                    </span>
                  </div>
                  <ChevronRight
                    className={`mt-1 h-4 w-4 shrink-0 transition-all ${
                      isActive ? 'text-green-700 opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                    strokeWidth={2}
                  />
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

function SidebarContent({ onNavigate, onClose }) {
  const { user, logout } = useAuth();

  return (
    <div className="flex h-full flex-col bg-white">
      {/* ── Header ── */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-green-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white shadow-sm">
            <Landmark className="h-5 w-5" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Admin Panel</h2>
            <p className="text-xs text-green-200">Mosque Management</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-700 text-white transition hover:bg-green-600 md:hidden"
          aria-label="Close admin navigation"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      {/* ── Navigation ── */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-6">
          <SidebarSection title="Administration" links={adminLinks} onNavigate={onNavigate} />
          <div className="border-t border-slate-100 pt-4">
            <SidebarSection title="Tools" links={toolLinks} onNavigate={onNavigate} />
          </div>
          <div className="border-t border-slate-100 pt-4">
            <SidebarSection title="Public Pages" links={publicLinks} onNavigate={onNavigate} />
          </div>
        </div>
      </div>

      {/* ── User section ── */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white shadow-sm">
            {user?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">{user?.name || 'Admin'}</p>
            <p className="truncate text-xs text-slate-500">Administrator</p>
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
        >
          <LogOut className="h-4 w-4" strokeWidth={2} />
          Sign out
        </button>
      </div>
    </div>
  );
}

export default function AdminSidebar({ mobileOpen, onClose }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-40 md:flex md:w-64 md:flex-col">
        <div className="flex h-screen flex-col border-r border-slate-200 bg-white shadow-sm">
          <SidebarContent onNavigate={onClose} onClose={onClose} />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close sidebar overlay"
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 shadow-2xl">
            <SidebarContent onNavigate={onClose} onClose={onClose} />
          </aside>
        </div>
      )}
    </>
  );
}
