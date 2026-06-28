import { Anchor, useComputedColorScheme } from '@mantine/core'
import logoBlack from '@/assets/logo-black.svg'
import logoWhite from '@/assets/logo-white.svg'
import classes from './BrandLogo.module.css'

export function BrandLogo() {
  const computedColorScheme = useComputedColorScheme('dark')
  const isDark = computedColorScheme === 'dark'

  return (
    <div className={classes.wrapper}>
      <Anchor href="#" underline="never" aria-label="Daniel Porto Design — página inicial">
        <img
          src={isDark ? logoWhite : logoBlack}
          alt="Daniel Porto Design"
          height={22}
          style={{ display: 'block' }}
        />
      </Anchor>
    </div>
  )
}
