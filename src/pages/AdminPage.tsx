import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { INTERNAL_PROFILES_CATALOG_PATH } from '../config/internalRoutes'
import { toast } from 'sonner'
import { ProfileCard } from '../components/ProfileCard'
import { getAllProfileSlugs, profiles } from '../data/profiles'
import { copyToClipboard } from '../utils/copyToClipboard'
import { buildNewProfileTemplate } from '../utils/profileTemplate'

export function AdminPage() {
  const slugs = getAllProfileSlugs()
  const id = useId()
  const [newSlug, setNewSlug] = useState('novo-perfil')

  const handleCopyTemplate = async () => {
    const raw = newSlug.trim() || 'novo-perfil'
    const safe = raw
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/^-+|-+$/g, '')
    const text = buildNewProfileTemplate(safe || 'novo-perfil')
    const ok = await copyToClipboard(text)
    if (ok) toast.success('Template copiado. Cole em src/data/profiles.ts')
    else toast.error('Não foi possível copiar.')
  }

  const copySlug = async (slug: string) => {
    const ok = await copyToClipboard(slug)
    if (ok) toast.success(`Slug copiado: ${slug}`)
    else toast.error('Não foi possível copiar o slug.')
  }

  return (
    <div className="min-h-svh bg-zinc-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300/90">Somente leitura</p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">Painel admin</h1>
            <p className="mt-2 max-w-xl text-sm text-white/65">
              Visualização dos perfis definidos em <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">src/data/profiles.ts</code>.
              Use os atalhos abaixo para acelerar novos cadastros.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              Raiz pública
            </Link>
            <Link
              to={INTERNAL_PROFILES_CATALOG_PATH}
              className="inline-flex items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm font-medium text-amber-100 transition hover:bg-amber-500/20"
            >
              Catálogo interno
            </Link>
          </div>
        </header>

        <section className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
          <h2 className="text-sm font-semibold text-white">Novo perfil — copiar template</h2>
          <p className="mt-1 text-xs text-white/55">Defina o slug (aparecerá na URL) e copie o bloco para colar no dicionário.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1 text-left">
              <label htmlFor={id} className="text-xs font-medium text-white/60">
                Slug sugerido
              </label>
              <input
                id={id}
                value={newSlug}
                onChange={(e) => setNewSlug(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2.5 text-sm outline-none ring-indigo-400/0 transition focus:ring-2"
                placeholder="ex: maria-silva"
              />
            </div>
            <button
              type="button"
              onClick={handleCopyTemplate}
              className="rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
            >
              Copiar template
            </button>
          </div>
        </section>

        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">Perfis ({slugs.length})</h2>
        <ul className="grid gap-4">
          {slugs.map((slug) => {
            const p = profiles[slug]
            return (
              <li key={slug}>
                <ProfileCard
                  profile={p}
                  slug={slug}
                  variant="admin"
                  footer={
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => copySlug(slug)}
                        className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold transition hover:bg-white/20"
                      >
                        Copiar slug
                      </button>
                      <a
                        href={`/${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-indigo-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-400"
                      >
                        Abrir página
                      </a>
                    </div>
                  }
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
