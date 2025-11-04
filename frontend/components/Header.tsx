import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header id="header" className="wireframe-box">
      <div className="wireframe-content">
        <div className="header-top">
          <div id="header-logo" className="header-logo">
            <Logo />
          </div>
          <MobileMenu />
        </div>
        <div className="desktop-nav">
          <Navigation />
        </div>
      </div>
    </header>
  )
}