import { Link } from 'react-router-dom';

const cardLabels = [
  'Home Page',
  'Mosque',
  'Mosque Details Page',
  'Interactive Map',
];

function ShowcaseCard({ label, to, children }) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-300/80 bg-[#1f3d6b] p-2.5 shadow-[0_20px_42px_rgba(22,53,97,0.18)] transition hover:-translate-y-1"
    >
      <div className="flex-1 overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
        {children}
      </div>
      <div className="mt-2 rounded-[0.95rem] bg-[#1f4f88] px-4 py-3 text-center text-base font-extrabold text-white">
        {label}
      </div>
    </Link>
  );
}

function TopWindowBar() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-3 py-2">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </div>
      <div className="h-2.5 w-16 rounded-full bg-slate-200" />
    </div>
  );
}

function HomePreview({ image }) {
  return (
    <div className="h-full bg-white">
      <TopWindowBar />
      <div className="p-3">
        <div className="relative overflow-hidden rounded-[1.1rem] border border-sky-100">
          <img src={image} alt="Home page preview" className="h-40 w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,50,102,0.12),rgba(13,50,102,0.68))]" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="text-lg font-extrabold leading-tight">
              Welcome to Kalamansig Mosque Finder
            </p>
            <div className="mt-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs text-slate-500 shadow-lg">
              <div className="h-2.5 w-2.5 rounded-full bg-sky-500" />
              Search for mosque
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-[0.95rem] border border-slate-200 bg-white p-1.5 shadow-sm">
              <img src={image} alt="" className="h-14 w-full rounded-[0.7rem] object-cover" />
              <div className="mt-2 h-2.5 w-4/5 rounded-full bg-slate-200" />
              <div className="mt-1 h-2 w-3/5 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DirectoryPreview({ image }) {
  return (
    <div className="h-full bg-white">
      <TopWindowBar />
      <div className="space-y-3 p-3">
        <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-2.5">
          <div className="h-8 rounded-full bg-white shadow-sm ring-1 ring-slate-200" />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="h-8 rounded-full bg-white shadow-sm ring-1 ring-slate-200" />
            <div className="h-8 rounded-full bg-[#1f4f88]" />
          </div>
        </div>

        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-[4.2rem_1fr_auto] items-center gap-2 rounded-[1rem] border border-slate-200 bg-white p-2.5 shadow-sm"
          >
            <img src={image} alt="" className="h-14 w-full rounded-[0.8rem] object-cover" />
            <div>
              <div className="h-2.5 w-4/5 rounded-full bg-slate-300" />
              <div className="mt-1.5 h-2 w-full rounded-full bg-slate-100" />
              <div className="mt-1.5 h-2 w-3/4 rounded-full bg-slate-100" />
            </div>
            <div className="rounded-full bg-[#1f4f88] px-3 py-2 text-[10px] font-bold text-white">
              View
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M10 1.8l2.36 4.79 5.29.77-3.82 3.73.9 5.27L10 13.91 5.27 16.36l.9-5.27L2.35 7.36l5.29-.77L10 1.8z" />
        </svg>
      ))}
    </div>
  );
}

function DetailsPreview({ image }) {
  return (
    <div className="h-full bg-white">
      <TopWindowBar />
      <div className="p-3">
        <img src={image} alt="Mosque details preview" className="h-36 w-full rounded-[1rem] object-cover" />

        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-extrabold text-slate-800">Al-Huda Mosque</p>
            <div className="mt-1">
              <StarRating />
            </div>
          </div>
          <div className="rounded-full bg-[#1f4f88] px-3 py-2 text-[10px] font-bold text-white">
            Explore
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-full rounded-full bg-slate-200" />
          <div className="h-2.5 w-11/12 rounded-full bg-slate-100" />
          <div className="h-2.5 w-10/12 rounded-full bg-slate-100" />
        </div>

        <div className="mt-4 grid grid-cols-[1fr_5rem] gap-3">
          <div className="space-y-2 rounded-[1rem] bg-slate-50 p-3 ring-1 ring-slate-200">
            {['Address', 'Imam Name', 'Location Info'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-sky-100" />
                <div className="h-2.5 flex-1 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
          <div className="rounded-[1rem] border border-sky-100 bg-[linear-gradient(180deg,#eff7ff_0%,#ddebff_100%)] p-2">
            <div className="grid h-full grid-cols-2 gap-1.5 rounded-[0.8rem] bg-white/45 p-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <span key={index} className="rounded-full bg-[#1f4f88]/85" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPreview() {
  return (
    <div className="h-full bg-white">
      <TopWindowBar />
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-2">
        <div className="h-2.5 w-20 rounded-full bg-slate-200" />
        <div className="flex gap-2">
          <div className="h-7 w-12 rounded-full bg-slate-100" />
          <div className="h-7 w-12 rounded-full bg-slate-100" />
        </div>
      </div>

      <div className="relative h-[calc(100%-5rem)] overflow-hidden bg-[linear-gradient(180deg,#eef6ff_0%,#dfeefe_100%)]">
        <div className="absolute inset-0 opacity-65 [background-image:linear-gradient(rgba(31,79,136,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(31,79,136,0.08)_1px,transparent_1px)] [background-size:2.3rem_2.3rem]" />
        <div className="absolute inset-0">
          <div className="absolute left-[8%] top-[14%] h-16 w-24 rounded-full bg-emerald-200/60 blur-md" />
          <div className="absolute left-[56%] top-[24%] h-24 w-24 rounded-full bg-sky-200/60 blur-md" />
          <div className="absolute left-[20%] top-[58%] h-24 w-28 rounded-full bg-emerald-100/70 blur-md" />
        </div>

        {[
          'left-[18%] top-[22%]',
          'left-[64%] top-[18%]',
          'left-[45%] top-[36%]',
          'left-[24%] top-[52%]',
          'left-[70%] top-[56%]',
          'left-[48%] top-[72%]',
          'left-[82%] top-[38%]',
        ].map((position) => (
          <div key={position} className={`absolute ${position}`}>
            <span className="block h-5 w-5 rounded-full bg-[#1f4f88] shadow-[0_0_0_5px_rgba(31,79,136,0.14)]" />
            <span className="absolute left-2 top-3 h-4 w-1 -translate-x-1/2 rounded-full bg-[#1f4f88]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UiShowcaseSection({ images = [] }) {
  const fallbackImage = '/placeholder-mosque.svg';
  const homeImage = images[0] || fallbackImage;
  const directoryImage = images[1] || images[0] || fallbackImage;
  const detailsImage = images[2] || images[0] || fallbackImage;

  return (
    <section className="mt-6 rounded-[2rem] border border-sky-100 bg-[linear-gradient(180deg,#f3f8ff_0%,#edf5ff_100%)] px-4 py-6 shadow-[0_20px_42px_rgba(15,94,156,0.1)] md:px-6 md:py-7 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <span className="label-chip">UI Showcase</span>
        <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
          Presentation-ready preview strip for the mosque information system
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          A polished capstone-style showcase of the four main screens, using a blue, teal, and
          white dashboard aesthetic with balanced spacing, equal preview cards, and responsive
          composition.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <ShowcaseCard label={cardLabels[0]} to="/">
          <HomePreview image={homeImage} />
        </ShowcaseCard>

        <ShowcaseCard label={cardLabels[1]} to="/mosques">
          <DirectoryPreview image={directoryImage} />
        </ShowcaseCard>

        <ShowcaseCard label={cardLabels[2]} to="/mosques/1">
          <DetailsPreview image={detailsImage} />
        </ShowcaseCard>

        <ShowcaseCard label={cardLabels[3]} to="/map">
          <MapPreview />
        </ShowcaseCard>
      </div>
    </section>
  );
}
