import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { OrganicBentoBox } from './OrganicBentoBox'

export function Header() {
  return (
    <header id="header">
      {/* Secondary Navigation - Above Primary Navigation in Cucumber shape */}
      <div className="desktop-nav-secondary">
        <OrganicBentoBox type="cucumber" noBorder={true} className="nav-bento-cucumber">
          <SecondaryNavigation />
        </OrganicBentoBox>
      </div>
      <div className="header-top">
        <div id="header-logo" className="header-logo">
          <Logo />
        </div>
        <div className="mobile-menu-wrapper">
          <MobileMenu />
        </div>
        {/* Desktop nav - wide horizontal layout in Bush Bean shape */}
        <div className="desktop-nav">
          <OrganicBentoBox type="bushbean" noBorder={true} className="nav-bento-bushbean">
            <div className="header-nav-container">
              <Navigation />
            </div>
          </OrganicBentoBox>
        </div>
      </div>
    </header>
  )
}