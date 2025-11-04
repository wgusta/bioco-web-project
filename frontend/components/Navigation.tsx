import Link from 'next/link'

const navigationItems = [
  { title: 'Homepage', href: '/', id: 'A' },
  { title: 'Ernte', href: '/ernte', id: 'B' },
  { title: 'Abos', href: '/abos', id: 'C' },
  { title: 'Anpacken', href: '/anpacken', id: 'D' },
  { title: 'Depots', href: '/depots', id: 'E' },
  { title: 'Wir', href: '/wir', id: 'F' },
  { title: 'Hofpost', href: '/hofpost', id: 'G' },
  { title: 'Mitmachen!', href: '/mitmachen', id: 'H' },
  { title: 'Kundenportal', href: '/kundenportal', id: 'I' },
]

export function Navigation() {
  return (
    <nav id="header-nav" className="wireframe-box header-nav">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
