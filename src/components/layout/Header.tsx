import {
  Container,
  Group,
  Burger,
  Drawer,
  Stack,
  Anchor,
  Button,
  rem,
  useComputedColorScheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { navigationLinks } from '@/data/navigation'
import { socialLinks } from '@/data/social'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import logoBlack from '@/assets/logo-black.svg'
import logoWhite from '@/assets/logo-white.svg'

export function Header() {
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false)
  const computedColorScheme = useComputedColorScheme('dark')

  const isDark = computedColorScheme === 'dark'
  const logo = isDark ? logoWhite : logoBlack
  const linkColor = isDark ? 'brand.1' : 'brand.8'
  const navHoverColor = isDark
    ? 'var(--mantine-color-brand-2)'
    : 'var(--mantine-color-brand-9)'

  return (
    <>
      <Container
        size="xl"
        h="100%"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Anchor href="#" underline="never" aria-label="Daniel Porto Design — página inicial">
          <img
            src={logo}
            alt="Daniel Porto Design"
            height={20}
            style={{ display: 'block' }}
          />
        </Anchor>

        {/* Navegação desktop */}
        <Group gap="xl" visibleFrom="sm" align="center">
          <ThemeToggle fixed={false} />
          {navigationLinks.map((link) => (
            <Anchor
              key={link.href}
              href={link.href}
              c={linkColor}
              fw={500}
              size="sm"
              underline="never"
              style={{ transition: 'color 150ms ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = navHoverColor
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = ''
              }}
            >
              {link.label}
            </Anchor>
          ))}

          <Button
            component="a"
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            radius="md"
            variant="filled"
          >
            Fale conosco
          </Button>
        </Group>

        {/* Mobile: toggle + burger */}
        <Group gap="xs" hiddenFrom="sm">
          <ThemeToggle fixed={false} />
          <Burger
            opened={drawerOpened}
            onClick={openDrawer}
            size="sm"
            aria-label="Abrir menu"
          />
        </Group>
      </Container>

      {/* Drawer mobile */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title={
          <img
            src={logo}
            alt="Daniel Porto Design"
            height={18}
            style={{ display: 'block' }}
          />
        }
        position="right"
        size="xs"
        hiddenFrom="sm"
        styles={{ body: { paddingTop: rem(24) } }}
      >
        <Stack gap="lg">
          {navigationLinks.map((link) => (
            <Anchor
              key={link.href}
              href={link.href}
              c={linkColor}
              fw={500}
              size="md"
              underline="never"
              onClick={closeDrawer}
            >
              {link.label}
            </Anchor>
          ))}

          <Button
            component="a"
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            radius="md"
            fullWidth
            mt="md"
            onClick={closeDrawer}
          >
            Fale conosco
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}
