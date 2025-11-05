'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const secondaryNavItems = [
  { title: 'Standorte', href: '/depots' },
  { title: 'Aktuelles', href: '/aktuelles' },
  { title: 'Kontakt', href: '/kontakt' },
]

export function SecondaryNavigation() {
  const pathname = usePathname()

  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-container">
        <ul>
          {secondaryNavItems.map((item) => {
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
        </ul>
      </div>
    </nav>
  )
}
