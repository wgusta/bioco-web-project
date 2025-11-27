'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DuckIcon } from './BiocoIcons'
import { Logo } from './Logo'

const navigationItems = [
  { title: 'Wir', href: '/wir' },
  { title: 'Gemüse', href: '/ernte' },
  { title: 'Mitmachen', href: '/anpacken' },
  { title: 'Abos', href: '/abos' },
  { title: 'Aktuelles', href: '/aktuelles' },
  { title: 'Standorte', href: '/depots' },
  { title: 'Kontakt', href: '/kontakt' },
]

export function SecondaryNavigation() {
  const pathname = usePathname()

  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-container">
        <div className="secondary-nav-logo">
          <Logo />
        </div>
        <ul>
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={isActive ? 'active' : ''}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
          <li>
            <Link 
              href="/mitmachen" 
              className="btn btn-orange"
            >
              biocò werden
            </Link>
          </li>
          <li>
            <Link 
              href="/intranet" 
              className={`duck-icon-link ${pathname === '/intranet' ? 'active' : ''}`}
              title="Intranet"
              aria-label="Intranet"
            >
              <DuckIcon size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
