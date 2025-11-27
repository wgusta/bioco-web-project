'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MapNeedleIcon, ContactLetterIcon, DuckIcon } from './BiocoIcons'

// Wrapper components to match the expected API (size prop)
const LocationIcon = ({ size = 16 }: { size?: number }) => (
  <MapNeedleIcon size={size} />
)

const ContactIcon = ({ size = 16 }: { size?: number }) => (
  <ContactLetterIcon size={size} />
)

const secondaryNavItems = [
  { title: 'Standorte', href: '/depots', icon: LocationIcon },
  { title: 'Kontakt', href: '/kontakt', icon: ContactIcon },
]

export function SecondaryNavigation({ className = '' }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={`secondary-nav ${className}`}>
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
