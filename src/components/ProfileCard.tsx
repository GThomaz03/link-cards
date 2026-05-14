import type { ReactNode } from 'react'
import type { Profile } from '../data/profiles'

export type ProfileCardVariant = 'page' | 'admin'

interface ProfileCardProps {
  profile: Profile
  slug: string
  variant?: ProfileCardVariant
  /** Conteúdo extra (links, QR, ações) — usado principalmente em `page` */
  children?: ReactNode
  /** Rodapé do card no modo admin (botões) */
  footer?: ReactNode
}

export function ProfileCard({
  profile,
  slug,
  variant = 'page',
  children,
  footer,
}: ProfileCardProps) {
  const hasLogo = Boolean(profile.logo)
  const hasAvatar = Boolean(profile.image)

  if (variant === 'admin') {
    return (
      <article className="flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-md">
        <div className="flex gap-4 p-4 sm:items-center">
          {hasLogo ? (
            <div className="flex h-16 min-h-16 min-w-0 max-w-[44%] shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-inner shadow-black/5 sm:max-w-[11rem]">
              <img
                src={profile.logo}
                alt=""
                className="max-h-14 w-full object-contain object-left"
              />
            </div>
          ) : hasAvatar ? (
            <img
              src={profile.image}
              alt=""
              className="h-16 w-16 shrink-0 rounded-2xl object-cover ring-2 ring-white/20"
              width={64}
              height={64}
            />
          ) : null}
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-base font-semibold text-white">{profile.name}</p>
            <p className="truncate text-sm text-white/75">{profile.title}</p>
            <p className="mt-1 truncate font-mono text-xs text-white/50">/{slug}</p>
          </div>
        </div>
        {footer ? <div className="border-t border-white/10 bg-black/20 p-3">{footer}</div> : null}
      </article>
    )
  }

  return (
    <article className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
      <div className="flex flex-col items-center text-center">
        {hasLogo ? (
          <div className="mb-6 w-full max-w-full px-0 sm:px-2">
            <div
              className="mx-auto flex w-full max-w-md items-center justify-center rounded-2xl border border-zinc-200/90 bg-white px-4 py-5 shadow-lg shadow-black/10 sm:py-6"
            >
              <img
                src={profile.logo}
                alt={profile.name}
                className="h-auto max-h-36 w-full max-w-full object-contain object-center sm:max-h-44"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        ) : hasAvatar ? (
          <div
            className="relative mb-4 h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32"
            style={{ boxShadow: `0 0 0 4px ${profile.accentColor}55, 0 16px 48px ${profile.accentColor}33` }}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="h-full w-full object-cover ring-4 ring-white/30"
              width={128}
              height={128}
            />
          </div>
        ) : null}

        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{profile.name}</h1>
        <p className="mt-1 max-w-md text-sm font-medium text-white/85 sm:text-base" style={{ color: profile.accentColor }}>
          {profile.title}
        </p>
        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-white/80 sm:text-base">{profile.bio}</p>
      </div>
      {children}
    </article>
  )
}
