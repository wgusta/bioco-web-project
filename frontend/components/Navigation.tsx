import Link from 'next/link'

const navigationItems = [
  { title: 'Ernte', href: '/ernte', id: 'B' },
  { title: 'Abos', href: '/abos', id: 'C' },
  { title: 'Anpacken', href: '/anpacken', id: 'D' },
  { title: 'Depots', href: '/depots', id: 'E' },
  { title: 'Wir', href: '/wir', id: 'F' },
  { title: 'Hofpost', href: '/hofpost', id: 'G' },
  { title: 'Kundenportal', href: '/kundenportal', id: 'I' },
]

export function Navigation() {
  return (
    <nav id="header-nav" className="header-nav">
      <ul className="nav-list">
        {navigationItems.map((item) => (
          <li key={item.id} className="nav-item">
            <Link href={item.href} className="nav-link">{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}