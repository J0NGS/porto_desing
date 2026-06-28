import { createTheme, rem } from '@mantine/core'

export const theme = createTheme({
  fontFamily: 'Montserrat, system-ui, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, monospace',

  primaryColor: 'brand',
  primaryShade: { light: 8, dark: 6 },

  colors: {
    // Paleta grafite / minério de ferro
    // Tons quentes escuros, do quase-branco ao quase-preto com subtom ferroso
    brand: [
      '#f5f4f3', // 0 — quase branco quente
      '#eceae8', // 1
      '#d8d4d1', // 2
      '#bcb7b3', // 3
      '#9a9490', // 4
      '#78726e', // 5
      '#5c5652', // 6 — grafite médio
      '#403b38', // 7 — grafite escuro
      '#272320', // 8 — minério de ferro
      '#161412', // 9 — quase preto
    ],
  },

  headings: {
    fontFamily: 'Montserrat, system-ui, sans-serif',
    sizes: {
      h1: { fontSize: rem(52), lineHeight: '1.1' },
      h2: { fontSize: rem(36), lineHeight: '1.2' },
      h3: { fontSize: rem(24), lineHeight: '1.3' },
    },
  },

  radius: {
    xs: rem(4),
    sm: rem(6),
    md: rem(10),
    lg: rem(16),
    xl: rem(24),
  },

  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    '2xl': rem(48),
    '3xl': rem(64),
    '4xl': rem(80),
  },

  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
})
