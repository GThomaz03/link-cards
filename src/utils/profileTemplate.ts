/**
 * Gera um trecho pronto para colar em `profiles.ts` (novo perfil).
 */
export function buildNewProfileTemplate(slug: string): string {
  const safe = slug.trim().toLowerCase().replace(/\s+/g, '-')
  return `"${safe}": {
  name: "Seu nome",
  title: "Seu cargo",
  bio: "Breve descrição profissional.",
  image: "/profiles/${safe}.jpg",
  // logo: "/profiles/${safe}-logo.svg",
  background: "linear-gradient(135deg, #0f172a 0%, #312e81 100%)",
  accentColor: "#818cf8",
  cvUrl: "https://exemplo.com/seu-cv.pdf",
  cvLabel: "Baixar CV",
  contact: {
    label: "E-mail",
    value: "voce@email.com",
    url: "mailto:voce@email.com",
  },
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/seu-perfil", icon: "linkedin" },
    { label: "Site", url: "https://seusite.com", icon: "website" },
  ],
},`
}
