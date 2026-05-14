export function RootPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-zinc-950 px-6 py-16 text-center text-white">
      <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300/90">Cartão digital</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Acesso por link</h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-white/70">
          Cada cartão abre pelo seu próprio endereço. Use o link que você recebeu — não há listagem pública de perfis
          aqui.
        </p>
      </div>
    </div>
  )
}
