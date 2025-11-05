import Link from 'next/link'
import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header id="header">
      <div className="header-top">
        <div id="header-logo" className="header-logo">
          <Logo />
        </div>
        <div className="header-cta">
          <Link href="/mitmachen" className="btn btn-orange">
            Mitmachen!
          </Link>
        </div>
        <MobileMenu />
        <div className="desktop-nav">
          <Navigation />
        </div>
      </div>
    </header>
  )
}