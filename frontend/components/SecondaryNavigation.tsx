'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { OrganicLocationIcon } from './OrganicIcons'
import { OrganicContactIcon } from './OrganicIcons'
import { OrganicIntranetIcon } from './OrganicIcons'

const secondaryNavItems = [
  { title: 'Standorte', href: '/depots', icon: OrganicLocationIcon },
  { title: 'Kontakt', href: '/kontakt', icon: OrganicContactIcon },
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
              className={`intranet-icon-link ${pathname === '/intranet' ? 'active' : ''}`}
              title="Intranet"
              aria-label="Intranet"
            >
              <OrganicIntranetIcon size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
