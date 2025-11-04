import Link from 'next/link'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header id="header" className="wireframe-box">
      <div className="wireframe-content">
        <div id="header-logo" className="wireframe-placeholder header-logo">
          <Link href="/">
            <span className="wireframe-label">Logo</span>
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  )
}