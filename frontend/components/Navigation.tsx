import Link from 'next/link'

const navigationItems = [
  { title: 'Homepage', href: '/', id: 'A' },
  { title: 'Ernte', href: '/ernte', id: 'B' },
  { title: 'Anpacken', href: '/anpacken', id: 'D' },
  { title: 'Abos', href: '/abos', id: 'C' },
  { title: 'Depots', href: '/depots', id: 'E' },
  { title: 'Wir', href: '/wir', id: 'F' },
  { title: 'Aktuelles', href: '/aktuelles', id: 'G' },
  { title: 'Mitmachen!', href: '/mitmachen', id: 'H' },
  { title: 'Kontakt', href: '/kontakt', id: 'K' },
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
