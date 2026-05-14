import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { LinkButton } from '../components/LinkButton'
import { ProfileCard } from '../components/ProfileCard'
import { QRSection } from '../components/QRSection'
import { getProfileBySlug } from '../data/profiles'
import { copyToClipboard } from '../utils/copyToClipboard'
import { NotFound } from './NotFound'

function pageUrlForSlug(slug: string): string {
  if (typeof window === 'undefined') return `/${slug}`
  return `${window.location.origin}/${slug}`
}

export default function ProfilePage() {
  const { slug } = useParams<{ slug: string }>()
  const profile = useMemo(() => getProfileBySlug(slug), [slug])

  if (!slug || !profile) {
    return <NotFound />
  }

  const pageUrl = pageUrlForSlug(slug)

  const handleCopyLink = async () => {
    const ok = await copyToClipboard(pageUrl)
    if (ok) toast.success('Link copiado para a área de transferência.')
    else toast.error('Não foi possível copiar o link.')
  }

  return (
    <div className="relative min-h-svh overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-fixed"
        style={{ background: profile.background }}
      />
      <div className="fixed inset-0 -z-10 bg-black/60" aria-hidden />

      <main className="relative z-10 mx-auto flex min-h-svh max-w-lg flex-col px-4 py-10 pb-14 sm:px-6">
        <ProfileCard profile={profile} slug={slug} variant="page">
          <div className="mt-8 w-full space-y-3">
            {profile.links.map((link) => (
              <LinkButton key={link.url + link.label} link={link} accentColor={profile.accentColor} />
            ))}
          </div>

          {profile.cvUrl ? (
            <div className="mt-4">
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-3.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition duration-200 hover:scale-[1.02] hover:bg-white/15 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
                style={{ outlineColor: profile.accentColor }}
              >
                {profile.cvLabel ?? 'Baixar CV'}
              </a>
            </div>
          ) : null}

          {profile.contact ? (
            <div className="mt-6 rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-center text-sm text-white/85 backdrop-blur-sm">
              {profile.contact.label ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-white/55">{profile.contact.label}</p>
              ) : null}
              {profile.contact.url ? (
                <a
                  href={profile.contact.url}
                  className="mt-1 inline-block font-medium underline-offset-4 hover:underline"
                  style={{ color: profile.accentColor }}
                >
                  {profile.contact.value}
                </a>
              ) : (
                <p className="mt-1 font-medium text-white">{profile.contact.value}</p>
              )}
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 sm:flex-1"
            >
              Copiar link da página
            </button>
          </div>

          <QRSection url={pageUrl} accentColor={profile.accentColor} />
        </ProfileCard>

        <p className="mt-8 text-center text-xs text-white/45">Cartão digital · URL única</p>
      </main>
    </div>
  )
}
