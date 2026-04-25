import { ExternalLink, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/mosques', label: 'Mosque Directory' },
  { to: '/map', label: 'Interactive Map' },
  { to: '/about', label: 'About' },
  { to: '/feedback', label: 'Leave Feedback' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="section-shell py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* ── Brand column ── */}
          <div>
            <h3 className="text-lg font-black tracking-tight">
              Mosque Information System
            </h3>
            <p className="mt-2 text-sm text-green-300 leading-relaxed">
              A centralized directory of mosques in Kalamansig, Sultan Kudarat —
              helping the community locate, learn about, and navigate to nearby mosques.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-green-300">
              <MapPin className="h-4 w-4 shrink-0 text-green-400" strokeWidth={2} />
              <span>Kalamansig, Sultan Kudarat, Soccsksargen</span>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-sm text-green-200 transition hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-green-500" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-green-400">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ncmf.osec@ncmf.gov.ph"
                  className="flex items-center gap-3 text-sm text-green-200 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-green-400" strokeWidth={2} />
                  ncmf.osec@ncmf.gov.ph
                </a>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600 hover:shadow-md"
                >
                  <MessageSquare className="h-4 w-4" strokeWidth={2} />
                  Leave Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-green-800">
        <div className="section-shell flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-green-400">
            &copy; {year} Mosque Information System — Kalamansig, Sultan Kudarat. All rights reserved.
          </p>
         </div>
      </div>
    </footer>
  );
}
