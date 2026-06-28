import React, { useEffect, useRef } from 'react'
import { Container, Title, Text, rem } from '@mantine/core'
import logoMask from '@/assets/logo-black.svg'
import classes from './HeroSection.module.css'

const MAX_TILT = 6
const LERP_FACTOR = 0.08
const PERSPECTIVE = 900

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stageEl = stageRef.current
    const textEl = textRef.current
    const logoEl = logoRef.current
    if (!stageEl || !textEl || !logoEl) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let rafId: number
    let targetRotX = 0, targetRotY = 0
    let currentRotX = 0, currentRotY = 0
    let mouseXpct = 50, mouseYpct = 50

    const onMove = (e: MouseEvent) => {
      // normaliza cursor de -1 a 1 em cada eixo
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      targetRotY = nx * MAX_TILT
      targetRotX = -ny * MAX_TILT
      mouseXpct = (e.clientX / window.innerWidth) * 100
      mouseYpct = (e.clientY / window.innerHeight) * 100
    }

    const onLeave = () => {
      targetRotX = 0
      targetRotY = 0
    }

    const loop = () => {
      const isDark =
        document.documentElement.getAttribute('data-mantine-color-scheme') === 'dark'
      const near = isDark ? '#d8d4d1' : '#272320'
      const far = isDark ? '#9a9490' : '#5c5652'
      const gradient = `radial-gradient(circle at ${mouseXpct}% ${mouseYpct}%, ${near} 0%, ${far} 65%)`

      textEl.style.backgroundImage = gradient
      logoEl.style.backgroundImage = gradient

      if (!prefersReduced) {
        currentRotX = lerp(currentRotX, targetRotX, LERP_FACTOR)
        currentRotY = lerp(currentRotY, targetRotY, LERP_FACTOR)
        stageEl.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`
      }

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      style={{
        minHeight: `calc(100vh - 70px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: rem(80),
        textAlign: 'center',
      }}
    >
      <div ref={stageRef} className={classes.stage}>
        <Container size="xl" w="100%">
          <Title
            order={1}
            style={{
              fontSize: 'clamp(1.6rem, 9.5vw, 9rem)',
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            <span
              ref={textRef}
              style={{
                display: 'block',
                backgroundImage: 'radial-gradient(circle at 50% 50%, #78726e 0%, #5c5652 65%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '0.1em',
                textWrap: 'balance',
              } as React.CSSProperties}
            >
              Identidade visual que dá direção ao seu negócio.
            </span>
          </Title>

          <div
            ref={logoRef}
            role="img"
            aria-label="Daniel Porto Design"
            style={{
              margin: `${rem(32)} auto ${rem(24)}`,
              width: '100%',
              maxWidth: rem(340),
              height: rem(28),
              backgroundImage: 'radial-gradient(circle at 50% 50%, #78726e 0%, #5c5652 65%)',
              WebkitMaskImage: `url(${logoMask})`,
              maskImage: `url(${logoMask})`,
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              opacity: 0.6,
            }}
          />

          <Text size="xl" c="dimmed" style={{ lineHeight: 1.6 }}>
            Mídias digitais com estratégia e consistência.
          </Text>
        </Container>
      </div>
    </section>
  )
}
