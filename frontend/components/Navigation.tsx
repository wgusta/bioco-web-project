'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { title: 'Ernte', href: '/ernte', id: 'B' },
  { title: 'Anpacken', href: '/anpacken', id: 'D' },
  { title: 'Abos', href: '/abos', id: 'C' },
  { title: 'Wir', href: '/wir', id: 'F' },
  { title: 'Aktuelles', href: '/aktuelles', id: 'G' },
]

interface NavigationProps {
  onLinkClick?: () => void
}

export function Navigation({ onLinkClick }: NavigationProps = {}) {
  const pathname = usePathname()

  return (
    <nav id="header-nav" className="header-nav">
      <ul>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          
          return (
            <li key={item.id}>
              <Link 
                href={item.href} 
                className={isActive ? 'nav-active' : ''}
                onClick={onLinkClick}
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
            onClick={onLinkClick}
          >
            Mitmachen!
          </Link>
        </li>
      </ul>
    </nav>
  )
}