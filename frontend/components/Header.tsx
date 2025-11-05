import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <>
      <SecondaryNavigation />
      <header id="header">
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