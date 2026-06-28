import { useEffect, useRef } from 'react'
import classes from './CustomCursor.module.css'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cursorRef.current
    const inner = innerRef.current
    if (!el || !inner) return

    let rafId: number
    let resetTimer: ReturnType<typeof setTimeout>
    let themeTimer: ReturnType<typeof setTimeout>
    let mouseInside = true

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        el.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
      })
    }

    const onEnter = () => { mouseInside = true; el.style.opacity = '1' }
    const onLeave = () => { mouseInside = false; el.style.opacity = '0' }

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return
      clearTimeout(resetTimer)
      inner.classList.add(classes.rotated)
      resetTimer = setTimeout(() => inner.classList.remove(classes.rotated), 450)
    }

    const observer = new MutationObserver(() => {
      clearTimeout(themeTimer)
      el.style.opacity = '0'
      themeTimer = setTimeout(() => {
        if (mouseInside) el.style.opacity = '1'
      }, 450)
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mantine-color-scheme'],
    })

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mousedown', onClick)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(resetTimer)
      clearTimeout(themeTimer)
      observer.disconnect()
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  return (
    <div ref={cursorRef} className={classes.cursor} aria-hidden>
      <div ref={innerRef} className={classes.inner}>
        <svg viewBox="0 0 1094 450" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M586.08 204.49V38.61c0-9.06-7.4-16.45-16.45-16.45H16.45C7.4 22.16 0 29.55 0 38.61v71.29c0 9.06 7.4 16.45 16.45 16.45h113.8v78.14c0 125.68 98.97 221.4 227.91 221.4s227.92-95.72 227.92-221.4m-355.56 0v-78.14H485.8v78.14c0 71.63-49.5 121.13-127.64 121.13s-127.64-49.5-127.64-121.13" fill="white" fillRule="nonzero"/>
          <path d="M1094.01 204.49V38.61c0-9.06-7.4-16.45-16.45-16.45H654.63c-9.06 0-16.46 7.39-16.46 16.45v165.88c0 125.68 98.98 221.4 227.92 221.4s227.92-95.72 227.92-221.4m-355.56 0v-78.14h255.27v78.14c0 71.63-49.5 121.13-127.63 121.13-78.14 0-127.64-49.5-127.64-121.13" fill="white" fillRule="nonzero"/>
        </svg>
      </div>
    </div>
  )
}
