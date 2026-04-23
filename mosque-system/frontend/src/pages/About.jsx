import { ChevronRight, Landmark, Map, MapPin, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import KalamansigLogo from '../assets/images/Kalamansig Logo.jpg';

const FEATURES = [
  {
    icon: Landmark,
    title: 'Mosque Directory',
    description:
      'A complete, searchable list of all registered mosques in Kalamansig with imam details, addresses, and photos.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    description:
      'Find any mosque instantly with auto-suggestions as you type — search by name, imam, address, or barangay.',
  },
  {
    icon: Map,
    title: 'Interactive Map',
    description:
      'View all mosque locations on a live map with clickable markers and one-tap directions to Google Maps.',
  },
  {
    icon: Users,
    title: 'Community Access',
    description:
      'Freely accessible to all residents, visitors, and anyone interested in the Muslim community of Kalamansig.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="border-b border-slate-100 bg-green-800 py-16 text-white sm:py-20">
        <div className="section-shell text-center">
          <img
            src={KalamansigLogo}
            alt="Kalamansig Logo"
            className="mx-auto mb-6 h-20 w-20 rounded-full object-cover ring-4 ring-white/30 shadow-lg"
          />
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-100">
            About the System
          </span>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Mosque Information System
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-green-100 sm:text-lg">
            A digital platform designed to help residents and visitors of{' '}
            <strong className="text-white">Kalamansig, Sultan Kudarat</strong> easily locate
            and learn about mosques in the municipality.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/mosques" className="btn-primary bg-white text-green-800 hover:bg-green-50 shadow-md">
              <Landmark className="h-4 w-4" strokeWidth={2} />
              Browse Mosques
              <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
            <Link to="/map" className="flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:border-white hover:bg-white/10">
              <Map className="h-4 w-4" strokeWidth={2} />
              Open Map
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE SYSTEM ── */}
      <section className="section-shell py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="label-chip">Our Purpose</span>
          <h2 className="mt-4 text-3xl font-black text-slate-900">
            What is this system for?
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The <strong className="text-green-800">Kalamansig Mosque Information System</strong> is
            a web-based platform developed to provide a centralized, accessible, and accurate
            directory of mosques within the Municipality of Kalamansig, Sultan Kudarat. It aims to
            serve the Muslim community and the general public by making mosque information readily
            available online.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Whether you are a local resident looking for the nearest mosque, a visitor exploring the
            area, or a researcher studying the Muslim community in the region — this system is
            designed to help you find what you need quickly and efficiently.
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-slate-50 py-16">
        <div className="section-shell">
          <div className="text-center">
            <span className="label-chip">Features</span>
            <h2 className="mt-4 text-3xl font-black text-slate-900">What you can do</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-100 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT KALAMANSIG ── */}
      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="label-chip">
              <MapPin className="mr-1.5 h-3 w-3" strokeWidth={2.5} />
              Location
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900">
              About Kalamansig
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              <strong className="text-slate-800">Kalamansig</strong> is a municipality in the
              province of <strong className="text-slate-800">Sultan Kudarat</strong>, in the
              Bangsamoro Autonomous Region in Muslim Mindanao (Soccsksargen), Philippines. It is home to a
              significant Muslim population and numerous mosques that serve as centers of worship,
              community gatherings, and Islamic education.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The municipality is known for its rich cultural heritage and the vibrant Muslim
              community. This system was created to preserve and promote access to information about
              the mosques that play an important role in the daily lives of the people of Kalamansig.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Municipality', value: 'Kalamansig' },
              { label: 'Province', value: 'Sultan Kudarat' },
              { label: 'Region', value: 'Soccsksargen' },
              { label: 'Island Group', value: 'Mindanao' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm text-center"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
                <p className="mt-2 text-lg font-black text-green-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-green-800 py-14">
        <div className="section-shell text-center">
          <h2 className="text-3xl font-black text-white">Ready to explore?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-green-100">
            Browse the full mosque directory or open the interactive map to find mosques near you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/mosques"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-green-800 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Landmark className="h-4 w-4" strokeWidth={2} />
              Mosque Directory
            </Link>
            <Link
              to="/map"
              className="flex items-center gap-2 rounded-xl border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Map className="h-4 w-4" strokeWidth={2} />
              View Map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
