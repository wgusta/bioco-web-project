'use client'

import Link from 'next/link'
import { DuckIcon } from './DuckIcon'

const navigationItems = [
  { title: 'Ernte', href: '/ernte', id: 'B' },
  { title: 'Anpacken', href: '/anpacken', id: 'D' },
  { title: 'Abos', href: '/abos', id: 'C' },
  { title: 'Depots', href: '/depots', id: 'E' },
  { title: 'Wir', href: '/wir', id: 'F' },
  { title: 'Aktuelles', href: '/aktuelles', id: 'G' },
  { title: 'Mitmachen!', href: '/mitmachen', id: 'H', isOrange: true },
  { title: 'Kontakt', href: '/kontakt', id: 'K' },
]

interface NavigationProps {
  onLinkClick?: () => void
}

export function Navigation({ onLinkClick }: NavigationProps = {}) {
  return (
    <nav id="header-nav" className="header-nav">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link 
              href={item.href} 
              className={item.isOrange ? 'nav-link-orange' : ''}
              onClick={onLinkClick}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link 
            href="/intranet" 
            className="nav-link-duck" 
            title="Intranet"
            onClick={onLinkClick}
          >
            <DuckIcon size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}