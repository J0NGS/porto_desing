import { ActionIcon, Tooltip, useMantineColorScheme, useComputedColorScheme } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import classes from './ThemeToggle.module.css'

interface ThemeToggleProps {
  fixed?: boolean
  scrolled?: boolean
}

export function ThemeToggle({ fixed = true, scrolled = false }: ThemeToggleProps) {
  const { toggleColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('dark')
  const isDark = computedColorScheme === 'dark'

  const button = (
    <Tooltip
      label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      position={fixed ? 'left' : 'bottom'}
      withArrow
      openDelay={400}
    >
      <ActionIcon
        onClick={toggleColorScheme}
        variant="subtle"
        size="lg"
        aria-label="Alternar tema claro/escuro"
        className={classes.toggle}
      >
        <IconSun size={20} className={classes.sun} />
        <IconMoon size={20} className={classes.moon} />
      </ActionIcon>
    </Tooltip>
  )

  if (!fixed) return button

  return (
    <div
      className={classes.wrapper}
      style={{
        transform: scrolled ? 'translateY(-160%)' : 'translateY(0)',
        transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {button}
    </div>
  )
}
