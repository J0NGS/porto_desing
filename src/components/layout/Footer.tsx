import { Container, Flex, Group, Text, Anchor, Divider, Stack, rem, useComputedColorScheme } from '@mantine/core'
import { navigationLinks } from '@/data/navigation'
import logoBlack from '@/assets/logo-black.svg'
import logoWhite from '@/assets/logo-white.svg'

export function Footer() {
  const computedColorScheme = useComputedColorScheme('light')
  const isDark = computedColorScheme === 'dark'

  const currentYear = new Date().getFullYear()
  const logo = isDark ? logoWhite : logoBlack

  return (
    <footer
      style={{
        borderTop: `1px solid ${isDark ? 'var(--mantine-color-brand-7)' : 'var(--mantine-color-gray-2)'}`,
        background: isDark ? 'var(--mantine-color-brand-9)' : 'var(--mantine-color-gray-0)',
        paddingBlock: rem(40),
        marginTop: 'auto',
      }}
    >
      <Container size="xl">
        <Stack gap="lg">
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify={{ base: 'center', sm: 'space-between' }}
            align="center"
            gap="xl"
            wrap="wrap"
          >
            <img
              src={logo}
              alt="Daniel Porto Design"
              style={{ display: 'block', height: 16, width: 'auto', maxWidth: '100%' }}
            />

            <Group gap="lg" wrap="wrap" justify="center">
              {navigationLinks.map((link) => (
                <Anchor
                  key={link.href}
                  href={link.href}
                  c="dimmed"
                  size="sm"
                  underline="never"
                >
                  {link.label}
                </Anchor>
              ))}
              <Anchor href="#contato" c="dimmed" size="sm" underline="never">
                Fale conosco
              </Anchor>
            </Group>
          </Flex>

          <Divider />

          <Text size="xs" c="dimmed" ta="center">
            {currentYear} Daniel Porto Design. Todos os direitos reservados.
          </Text>
        </Stack>
      </Container>
    </footer>
  )
}
