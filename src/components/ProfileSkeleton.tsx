export function ProfileSkeleton() {
  return (
    <div className="mx-auto w-full max-w-md animate-pulse px-4 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-28 w-28 rounded-full bg-white/15 sm:h-32 sm:w-32" />
          <div className="h-7 w-48 rounded-lg bg-white/15 sm:h-8 sm:w-56" />
          <div className="mt-3 h-4 w-40 rounded bg-white/10" />
          <div className="mt-6 w-full space-y-2">
            <div className="mx-auto h-3 w-full max-w-sm rounded bg-white/10" />
            <div className="mx-auto h-3 w-full max-w-xs rounded bg-white/10" />
            <div className="mx-auto h-3 w-2/3 max-w-xs rounded bg-white/10" />
          </div>
        </div>
        <div className="mt-8 space-y-3">
          <div className="h-14 w-full rounded-xl bg-white/10" />
          <div className="h-14 w-full rounded-xl bg-white/10" />
          <div className="h-14 w-full rounded-xl bg-white/10" />
        </div>
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="h-3 w-24 rounded bg-white/10" />
          <div className="h-36 w-36 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  )
}
