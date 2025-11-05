import Link from 'next/link'

interface EventsBannerProps {
  title?: string
}

export function EventsBanner({ title = 'Nächste Events' }: EventsBannerProps) {
  return (
      <section className="events-banner">
      <h2>{title}</h2>
      <p>Kompakter Banner mit 2–3 kommenden Terminen</p>
      <p>
        <Link href="/aktuelles">Link zur vollen Eventliste → Aktuelles / G-02 Nächste Events</Link>
      </p>
    </section>
  )
}
