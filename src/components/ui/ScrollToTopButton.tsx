import { IconArrowUp } from '@tabler/icons-react'
import classes from './ScrollToTopButton.module.css'

interface ScrollToTopButtonProps {
  visible: boolean
}

export function ScrollToTopButton({ visible }: ScrollToTopButtonProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`${classes.button} ${visible ? classes.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <IconArrowUp size={20} stroke={2.5} />
    </button>
  )
}
