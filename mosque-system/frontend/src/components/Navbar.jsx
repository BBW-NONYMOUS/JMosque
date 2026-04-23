import { useEffect, useState } from 'react';
import { Home, Info, Landmark, LayoutDashboard, LogIn, LogOut, Map, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import KalamansigLogo from '../assets/images/Kalamansig Logo.jpg';

const publicLinks = [
  { to: '/', label: 'Home', end: true, icon: Home },
  { to: '/mosques', label: 'Mosque', icon: Landmark },
  { to: '/map', label: 'Map', icon: Map },
  { to: '/about', label: 'About', icon: Info },
];

const adminHeaderLinks = [
  { to: '/', label: 'Public Home', end: true, icon: Home },
  { to: '/mosques', label: 'Directory', icon: Landmark },
  { to: '/map', label: 'Map', icon: Map },
];

/* ── Desktop nav link — public (dark green bar) ── */
function publicNavClass({ isActive }) {
  return `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
    isActive
      ? 'bg-green-700 text-white shadow-sm'
      : 'text-green-100 hover:bg-green-700 hover:text-white'
  }`;
}

/* ── Desktop nav link — admin (white bar) ── */
function adminNavClass({ isActive }) {
  return `px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-150 ${
    isActive
      ? 'border-emerald-700 text-emerald-800'
      : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
  }`;
}

/* ── Mobile sidebar link ── */
function sidebarLinkClass({ isActive }) {
  return `group flex items-center gap-3 px-5 py-3.5 text-sm font-semibold transition-all duration-150 ${
    isActive
      ? 'bg-green-800 text-white'
      : 'text-slate-700 hover:bg-green-50 hover:text-green-800'
  }`;
}

function SidebarContent({ isAdminMode, isAuthenticated, user, logout, closeSidebar }) {
  const links = isAdminMode ? adminHeaderLinks : publicLinks;

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Sidebar header */}
      <div className="flex items-center justify-between gap-3 bg-green-800 px-5 py-4">
        <div className="flex items-center gap-3">
          {!isAdminMode && (
            <img
              src={KalamansigLogo}
              alt="Kalamansig Logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white/30"
            />
          )}
          <div className="min-w-0">
            <p className="truncate text-[0.6rem] font-semibold uppercase tracking-widest text-green-200">
              {isAdminMode ? 'Administration' : 'Kalamansig Municipality'}
            </p>
            <h2 className="truncate text-sm font-bold text-white">
              Mosque Information System
            </h2>
          </div>
        </div>

        <button
          type="button"
          onClick={closeSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-700 text-white transition hover:bg-green-600 lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      {/* Nav links */}
      <div className="flex-1 overflow-y-auto py-3">
        <p className="mb-1 px-5 text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">
          Menu
        </p>

        <nav>
          {links.map(({ to, label, end, icon: Icon }) => (
            <NavLink key={to} to={to} end={end} className={sidebarLinkClass} onClick={closeSidebar}>
              <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
              <span>{label}</span>
            </NavLink>
          ))}

          {!isAdminMode && isAuthenticated ? (
            <NavLink to="/admin" className={sidebarLinkClass} onClick={closeSidebar}>
              <LayoutDashboard className="h-5 w-5 shrink-0" strokeWidth={2} />
              <span>Admin Dashboard</span>
            </NavLink>
          ) : null}
        </nav>
      </div>

      {/* Bottom auth area */}
      <div className="border-t border-slate-100 bg-slate-50 p-4">
        {isAuthenticated ? (
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-[0.6rem] font-bold uppercase tracking-widest text-slate-400">
              Signed in as
            </p>
            <p className="mt-1 truncate text-sm font-semibold text-slate-800">{user?.name}</p>
            <button
              type="button"
              onClick={logout}
              className="btn-secondary mt-3 w-full justify-center py-2.5 text-xs"
            >
              <LogOut className="h-4 w-4" strokeWidth={2} />
              Sign Out
            </button>
          </div>
        ) : !isAdminMode ? (
          <NavLink
            to="/login"
            onClick={closeSidebar}
            className="btn-primary w-full justify-center py-3"
          >
            <LogIn className="h-4 w-4" strokeWidth={2} />
            Login
          </NavLink>
        ) : null}
      </div>
    </div>
  );
}

export default function Navbar({ mode = 'public', onSidebarToggle = () => {} }) {
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAdminMode = mode === 'admin';

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = isSidebarOpen ? 'hidden' : originalOverflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isSidebarOpen]);

  const desktopLinks = isAdminMode ? adminHeaderLinks : publicLinks;

  return (
    <>
      <header
        className={`sticky top-0 z-40 shadow-md ${
          isAdminMode
            ? 'border-b border-slate-300 bg-white'
            : 'bg-green-800'
        }`}
      >
        <div className="section-shell py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo + Title ── */}
            <NavLink
              to={isAdminMode ? '/admin' : '/'}
              className="flex min-w-0 items-center gap-3"
            >
              {!isAdminMode && (
                <img
                  src={KalamansigLogo}
                  alt="Kalamansig Logo"
                  className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white/30 shadow-md"
                />
              )}
              <div className="min-w-0">
                <p
                  className={`truncate text-[0.6rem] font-semibold uppercase tracking-widest sm:text-[0.65rem] ${
                    isAdminMode ? 'text-emerald-700' : 'text-green-200'
                  }`}
                >
                  {isAdminMode ? 'Administration' : 'Kalamansig Municipality'}
                </p>
                <h1
                  className={`truncate text-sm font-bold sm:text-base ${
                    isAdminMode ? 'text-slate-800' : 'text-white'
                  }`}
                >
                  Mosque Information System
                </h1>
              </div>
            </NavLink>

            {/* ── Desktop nav links ── */}
            <div className="hidden items-center gap-1 lg:flex">
              {desktopLinks.map(({ to, label, end, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={isAdminMode ? adminNavClass : publicNavClass}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {label}
                </NavLink>
              ))}
              {!isAdminMode && isAuthenticated ? (
                <NavLink to="/admin" className={publicNavClass}>
                  <LayoutDashboard className="h-4 w-4" strokeWidth={2} />
                  Admin
                </NavLink>
              ) : null}
            </div>

            {/* ── Right actions ── */}
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-3 md:flex">
                {isAuthenticated ? (
                  <>
                    <span
                      className={`hidden border-r pr-3 text-sm font-medium xl:inline-flex ${
                        isAdminMode
                          ? 'border-slate-300 text-slate-600'
                          : 'border-green-600 text-green-100'
                      }`}
                    >
                      {user?.name}
                    </span>
                    {!isAdminMode ? (
                      <button
                        type="button"
                        onClick={logout}
                        className="flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
                      >
                        <LogOut className="h-4 w-4" strokeWidth={2} />
                        Sign Out
                      </button>
                    ) : null}
                  </>
                ) : !isAdminMode ? (
                  <NavLink
                    to="/login"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-green-800 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <LogIn className="h-4 w-4" strokeWidth={2} />
                    Login
                  </NavLink>
                ) : null}
              </div>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => {
                  setIsSidebarOpen(true);
                  if (isAdminMode) onSidebarToggle();
                }}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${
                  isAdminMode
                    ? 'border border-slate-300 bg-white text-slate-600 hover:bg-slate-100'
                    : 'bg-green-700 text-white hover:bg-green-600'
                }`}
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Sidebar Drawer ── */}
      {isSidebarOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            aria-label="Close sidebar overlay"
          />
          <aside className="absolute inset-y-0 left-0 w-[min(88vw,20rem)] overflow-hidden shadow-2xl">
            <SidebarContent
              isAdminMode={isAdminMode}
              isAuthenticated={isAuthenticated}
              user={user}
              logout={logout}
              closeSidebar={() => setIsSidebarOpen(false)}
            />
          </aside>
        </div>
      ) : null}
    </>
  );
}
