'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LocationIcon } from './Icons'
import { ContactIcon } from './Icons'
import { DuckIcon } from './DuckIcon'

const secondaryNavItems = [
  { title: 'Standorte', href: '/depots', icon: LocationIcon },
  { title: 'Kontakt', href: '/kontakt', icon: ContactIcon },
]

export function SecondaryNavigation() {
  const pathname = usePathname()

  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-container">
        <ul>
          {secondaryNavItems.map((item) => {
            const isActive = pathname === item.href
            const IconComponent = item.icon
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={isActive ? 'active' : ''}
                >
                  <IconComponent size={16} />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li>
            <Link 
              href="/intranet" 
              className={pathname === '/intranet' ? 'active' : ''}
              title="Intranet"
            >
              <DuckIcon size={16} />
              <span>Intranet</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
