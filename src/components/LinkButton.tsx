import type { CSSProperties } from 'react'
import type { ProfileLink } from '../data/profiles'
import { LinkIconSvg } from '../utils/linkIcons'

interface LinkButtonProps {
  link: ProfileLink
  accentColor: string
}

export function LinkButton({ link, accentColor }: LinkButtonProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-4 py-3.5 text-left text-sm font-medium text-white shadow-md shadow-black/10 outline-none ring-white/0 backdrop-blur-md transition duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:text-base"
      style={
        {
          '--tw-ring-color': accentColor,
          borderColor: `${accentColor}40`,
        } as CSSProperties
      }
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white transition group-hover:bg-white/25"
        style={{ color: accentColor }}
      >
        <LinkIconSvg name={link.icon} />
      </span>
      <span className="min-w-0 flex-1 truncate">{link.label}</span>
      <span className="text-white/50 transition group-hover:text-white/80" aria-hidden>
        →
      </span>
    </a>
  )
}
