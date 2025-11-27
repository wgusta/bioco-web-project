'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Only show when at the top, hide when scrolling down
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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