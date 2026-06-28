import { useState, useEffect } from 'react'
import { AppShell } from '@mantine/core'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SocialSection } from '@/components/sections/SocialSection'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AppShell header={{ height: 70 }} padding={0}>
      <AppShell.Header
        style={{
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <SocialSection />
      </AppShell.Main>

      <Footer />

      <CustomCursor />
      <ScrollToTopButton visible={scrolled} />
    </AppShell>
  )
}
