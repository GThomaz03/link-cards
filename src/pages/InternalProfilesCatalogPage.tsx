import { Link } from 'react-router-dom'
import { INTERNAL_PROFILES_CATALOG_PATH } from '../config/internalRoutes'
import { getAllProfileSlugs, getProfileListThumb, profiles } from '../data/profiles'

/** Catálogo interno: rota definida em `INTERNAL_PROFILES_CATALOG_PATH` (não exposta na raiz). */
export function InternalProfilesCatalogPage() {
  const slugs = getAllProfileSlugs()

  return (
    <div className="min-h-svh bg-zinc-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-200/80">Uso interno</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Catálogo de perfis</h1>
        <p className="mt-3 text-pretty text-sm text-white/60">
          Esta URL não deve ser divulgada. Apenas para quem mantém o projeto.
          <span className="mt-2 block font-mono text-xs text-white/45">{INTERNAL_PROFILES_CATALOG_PATH}</span>
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {slugs.map((slug) => {
            const p = profiles[slug]
            const thumb = getProfileListThumb(p)
            const isLogo = Boolean(p.logo)
            return (
              <li key={slug}>
                <Link
                  to={`/${slug}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-white/25 hover:bg-white/10"
                >
                  {thumb ? (
                    <img
                      src={thumb}
                      alt=""
                      className={
                        isLogo
                          ? 'h-10 max-w-[6.5rem] shrink-0 object-contain object-left'
                          : 'h-12 w-12 shrink-0 rounded-xl object-cover ring-1 ring-white/20'
                      }
                    />
                  ) : null}
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{p.name}</p>
                    <p className="truncate text-sm text-white/60">/{slug}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
        <p className="mt-10 text-sm text-white/50">
          <Link to="/admin" className="font-medium text-indigo-300 underline-offset-4 hover:underline">
            Painel admin
          </Link>
          {' · '}
          <Link to="/" className="text-white/40 underline-offset-4 hover:text-white/60 hover:underline">
            Raiz pública
          </Link>
        </p>
      </div>
    </div>
  )
}
