'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setIsVisible(false)
      } else {
        // Scrolling up - show
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <SecondaryNavigation className={isVisible ? 'header-visible' : 'header-hidden'} />
      <header id="header" className={isVisible ? 'header-visible' : 'header-hidden'}>
        <div className="header-top">
          <div id="header-logo" className="header-logo">
            <Logo />
          </div>
          <MobileMenu />
          <div className="desktop-nav">
            <div className="header-nav-container">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}