export type InstagramProfile = {
  url: string
}

export type SocialLinks = {
  instagram: InstagramProfile[]
  whatsapp: string
}

export const socialLinks: SocialLinks = {
  instagram: [
    { url: 'https://www.instagram.com/danielportodesign/' },
    { url: 'https://www.instagram.com/porto.estudio/' },
  ],
  whatsapp: 'https://api.whatsapp.com/send/?phone=5584987172254&text&type=phone_number&app_absent=0',
}
