import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header id="header">
      {/* Secondary Navigation - Above Primary Navigation */}
      <div className="desktop-nav-secondary">
        <SecondaryNavigation />
      </div>
      <div className="header-top">
        <div id="header-logo" className="header-logo">
          <Logo />
        </div>
        <div className="mobile-menu-wrapper">
          <MobileMenu />
        </div>
        {/* Desktop nav - wide horizontal layout */}
        <div className="desktop-nav">
          <div className="header-nav-container">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  )
}