import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AdminLayout from '../layouts/AdminLayout';
import PublicLayout from '../layouts/PublicLayout';

/* ── Lazy-loaded public pages ── */
const Home         = lazy(() => import('../pages/Home'));
const MosqueList   = lazy(() => import('../pages/MosqueList'));
const MosqueDetails = lazy(() => import('../pages/MosqueDetails'));
const MapPage      = lazy(() => import('../pages/MapPage'));
const About        = lazy(() => import('../pages/About'));
const Login        = lazy(() => import('../pages/Login'));
const GuestFeedback = lazy(() => import('../pages/GuestFeedback'));

/* ── Lazy-loaded admin pages ── */
const Dashboard     = lazy(() => import('../pages/admin/Dashboard'));
const ManageMosques = lazy(() => import('../pages/admin/ManageMosques'));
const AddMosque     = lazy(() => import('../pages/admin/AddMosque'));
const EditMosque    = lazy(() => import('../pages/admin/EditMosque'));
const Settings      = lazy(() => import('../pages/admin/Settings'));
const Backup        = lazy(() => import('../pages/admin/Backup'));
const AdminFeedback = lazy(() => import('../pages/admin/Feedback'));

/* ── Full-screen loading spinner used by Suspense ── */
function PageSpinner() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-green-700" strokeWidth={2} />
        <p className="text-sm font-medium text-slate-500">Loading…</p>
      </div>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function AppRoutes() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <Suspense fallback={<PageSpinner />}>
      <Routes location={backgroundLocation || location}>
        <Route element={<PublicLayout />}>
          <Route path="/"           element={<Home />} />
          <Route path="/mosques"    element={<MosqueList />} />
          <Route path="/mosques/:id" element={<MosqueDetails />} />
          <Route path="/map"        element={<MapPage />} />
          <Route path="/about"      element={<About />} />
          <Route path="/feedback"   element={<GuestFeedback />} />
          <Route path="/login"      element={<Login />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index              element={<Dashboard />} />
          <Route path="mosques"     element={<ManageMosques />} />
          <Route path="mosques/add" element={<AddMosque />} />
          <Route path="mosques/:id/edit" element={<EditMosque />} />
          <Route path="settings"    element={<Settings />} />
          <Route path="backup"      element={<Backup />} />
          <Route path="feedback"    element={<AdminFeedback />} />
        </Route>
      </Routes>

      {backgroundLocation ? (
        <Routes>
          <Route path="/login" element={<Login isModal />} />
        </Routes>
      ) : null}
    </Suspense>
  );
}
