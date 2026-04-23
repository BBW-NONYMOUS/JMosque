/* Skeleton loading card — matches MosqueCard full layout */
export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      {/* Image area */}
      <div className="h-52 animate-pulse bg-gray-200" />

      {/* Body */}
      <div className="space-y-3 p-5">
        {/* Badge row */}
        <div className="h-5 w-24 animate-pulse rounded-full bg-gray-200" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-3/4 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-4 w-1/2 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-1">
          <div className="h-10 flex-1 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-10 w-10 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-10 w-10 animate-pulse rounded-xl bg-gray-200" />
        </div>
      </div>
    </div>
  );
}

/* Skeleton loading card — compact variant (matches MosqueCard compact layout) */
export function SkeletonCardCompact() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="h-20 w-20 shrink-0 animate-pulse rounded-2xl bg-gray-200" />

        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-2">
            <div className="h-4 w-1/3 animate-pulse rounded-full bg-gray-200" />
            <div className="h-5 w-2/3 animate-pulse rounded-lg bg-gray-200" />
            <div className="h-4 w-1/2 animate-pulse rounded-lg bg-gray-200" />
          </div>
          <div className="mt-3 flex gap-2">
            <div className="h-7 w-16 animate-pulse rounded-xl bg-gray-200" />
            <div className="h-7 w-16 animate-pulse rounded-xl bg-gray-200" />
            <div className="h-7 w-24 animate-pulse rounded-xl bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Skeleton for the hero search section on Home page */
export function SkeletonHeroCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
      <div className="aspect-[16/10] animate-pulse bg-gray-200" />
      <div className="border-t border-slate-100 p-6 space-y-3">
        <div className="h-4 w-1/3 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-4 w-2/3 animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
