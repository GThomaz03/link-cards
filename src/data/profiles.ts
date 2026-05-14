export type LinkIcon =
  | 'linkedin'
  | 'github'
  | 'instagram'
  | 'globe'
  | 'whatsapp'
  | 'email'
  | 'twitter'
  | 'youtube'
  | 'facebook'
  | 'tiktok'
  | 'website'

export interface ProfileLink {
  label: string
  url: string
  icon: LinkIcon
}

export interface ProfileContact {
  label?: string
  value: string
  url?: string
}

export interface Profile {
  name: string
  title: string
  bio: string
  /** Foto de perfil — avatar circular. Omita se usar só `logo`. */
  image?: string
  /** Logotipo — área retangular no card (`object-contain`). Se definido, substitui o avatar circular. */
  logo?: string
  /** CSS para o fundo da página (gradiente ou cor) */
  background: string
  /** Cor principal (hex) — botões, destaques, QR */
  accentColor: string
  links: ProfileLink[]
  /** URL do PDF ou arquivo de CV (opcional) */
  cvUrl?: string
  /** Texto do botão de CV (padrão: "Baixar CV") */
  cvLabel?: string
  contact?: ProfileContact
}

export type ProfilesMap = Record<string, Profile>

/**
 * Dicionário central de perfis.
 * Chave = slug na URL (ex: gabriel-alves → /gabriel-alves)
 */
export const profiles: ProfilesMap = {

  'franchetti-spa-nath': {
    name: 'Nath Oliveira',
    title: 'Coordenadora de engenharia',
    bio: '',
    logo: '/profiles/Logo-fran.png',
    background:
      'linear-gradient(160deg, #2A3C45 0%, #56636A 35%, #B85A58 65%, #F34E4D 100%)',
    accentColor: '#F34E4D',
    contact: {
      label: 'E-mail comercial',
      value: 'nathalia.oliveira@franchetti.tech',
      url: 'mailto:nathalia.oliveira@franchetti.tech',
    },
    links: [
      {
        label: 'WhatsApp',
        url: 'https://wa.me/5511993878441',
        icon: 'whatsapp',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nathaliathomaz/',
        icon: 'linkedin',
      },
      {
        label: 'Site',
        url: 'https://www.franchetti.tech/pt-br',
        icon: 'website',
      },
    ],
  },
  'franchetti-spa-sergio': {
    name: 'Sergio de Paula Pereira',
    title: 'Gerente de engenharia',
    bio: '',
    logo: '/profiles/Logo-fran.png',
    background:
    'linear-gradient(160deg, #2A3C45 0%, #56636A 35%, #B85A58 65%, #F34E4D 100%)',
    accentColor: '#F34E4D',
    contact: {
      label: 'E-mail comercial',
      value: 'sergio.pereira@franchetti.tech',
      url: 'mailto:sergio.pereira@franchetti.tech',
    },
    links: [
      {
        label: 'WhatsApp',
        url: 'https://wa.me/5521976605906',
        icon: 'whatsapp',
      },
      {
        label: 'Site',
        url: 'https://www.franchetti.tech/pt-br',
        icon: 'website',
      },
    ],
  },
  'franchetti-spa-paulo': {
    name: 'Paulo Anafe',
    title: 'Gerente comercial',
    bio: '',
    logo: '/profiles/Logo-fran.png',
    background:
    'linear-gradient(160deg, #2A3C45 0%, #56636A 35%, #B85A58 65%, #F34E4D 100%)',
    accentColor: '#F34E4D',
    contact: {
      label: 'E-mail comercial',
      value: 'paulo.anafe@franchetti.tech',
      url: 'mailto:paulo.anafe@franchetti.tech',
    },
    links: [
      {
        label: 'WhatsApp',
        url: 'https://wa.me/5521996356376',
        icon: 'whatsapp',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/paulo-anafe-1422a136/',
        icon: 'linkedin',
      },
      {
        label: 'Site',
        url: 'https://www.franchetti.tech/pt-br',
        icon: 'website',
      },
    ],
  },

  'nathalia-oliveira': {
    name: 'Nath Oliveira',
    title: 'Gestora de negócios',
    bio: '',
    image: '/profiles/aprovacaoengenharia_logo.jpg',
    background:
      'linear-gradient(145deg, #F0B700 0%, #D8A80C 25%, #A38723 45%, #5E5E35 55%, #304059 75%, #162744 100%)',
    accentColor: '#F8FAFC',
    contact: {
      label: 'E-mail comercial',
      value: 'aprovacao@aprovacaoengenharia.com.br',
      url: 'mailto:aprovacao@aprovacaoengenharia.com.br',
    },
    links: [
      {
        label: 'WhatsApp',
        url: 'https://wa.me/5511993878441',
        icon: 'whatsapp',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nathaliathomaz/',
        icon: 'linkedin',
      },
      {
        label: 'Site',
        url: 'https://aprovacaoengenharia.com.br',
        icon: 'website',
      },
    ],
  },
  
  'gustavo-batista': {
    name: 'Gustavo Batista',
    title: 'Coordenador técnico',
    bio: '',
    image: '/profiles/aprovacaoengenharia_logo.jpg',
    background:
      'linear-gradient(160deg, #F0B700 0%, #C89A00 25%, #6B5B2E 50%, #162744 100%)',
      // 'linear-gradient(135deg,#040436 0%,rgb(30, 30, 56) 40%, #3f3f46 75%,#d1d423 100%)',
    accentColor: '#F8FAFC',
    contact: {
      label: 'E-mail comercial',
      value: 'aprovacao@aprovacaoengenharia.com.br',
      url: 'mailto:aprovacao@aprovacaoengenharia.com.br',
    },
    links: [
        {
          label: 'WhatsApp',
        url: 'https://wa.me/5511946422608',
        icon: 'whatsapp',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/gustavoleite08/',
        icon: 'linkedin',
      },
      {
        label: 'Site',
        url: 'https://aprovacaoengenharia.com.br',
        icon: 'website',
      },
    ],
  },
}

export function getProfileBySlug(slug: string | undefined): Profile | null {
  if (!slug) return null
  return profiles[slug] ?? null
}

export function getAllProfileSlugs(): string[] {
  return Object.keys(profiles)
}

/** Miniatura em listagens: prefere logo se existir. */
export function getProfileListThumb(profile: Profile): string | undefined {
  return profile.logo ?? profile.image
}
