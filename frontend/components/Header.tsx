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
      
      // Show header when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide header when scrolling down (only on mobile)
      else if (currentScrollY > lastScrollY && currentScrollY > 100 && window.innerWidth <= 767) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <SecondaryNavigation />
      <header id="header" className={isVisible ? 'visible' : 'hidden'}>
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