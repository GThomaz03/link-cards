import { Link } from 'react-router-dom'

const tips = [
  'Confira se o endereço está correto.',
  'O perfil pode ter sido renomeado ou ainda não foi publicado.',
]

export function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-zinc-950 px-6 py-16 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, #6366f1 0%, transparent 45%), radial-gradient(circle at 80% 30%, #ec4899 0%, transparent 40%), radial-gradient(circle at 50% 90%, #22d3ee 0%, transparent 35%)',
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-lg rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Erro 404</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Perfil não encontrado</h1>
        <p className="mt-4 text-pretty text-white/75">
          Não existe um cartão digital para este endereço. Se você é o dono do link, verifique o slug na barra de
          endereços.
        </p>
        <ul className="mt-6 space-y-2 text-left text-sm text-white/70">
          {tips.map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-indigo-300">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition hover:bg-zinc-100"
          >
            Página inicial
          </Link>
          <Link
            to="/admin"
            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            Painel admin
          </Link>
        </div>
      </div>
    </div>
  )
}
