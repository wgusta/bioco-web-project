import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <>
      {/* Secondary Navigation only shown on non-home pages or mobile */}
      <div className="secondary-nav-wrapper">
        <SecondaryNavigation />
      </div>
      <header id="header">
        <div className="header-top">
          <div id="header-logo" className="header-logo">
            <Logo />
          </div>
          <div className="mobile-menu-wrapper">
            <MobileMenu />
          </div>
          {/* Desktop nav hidden on homepage (moved to bento boxes) */}
          <div className="desktop-nav desktop-nav-non-home">
            <div className="header-nav-container">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}