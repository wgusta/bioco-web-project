import Link from 'next/link'
import { getEventItems } from './AktuellesData'
import { AktuellesItemComponent } from './AktuellesItem'

interface EventsBannerProps {
  title?: string
}

export function EventsBanner({ title = 'Nächste Events' }: EventsBannerProps) {
  const eventItems = getEventItems().slice(0, 3) // Show max 3 events
  
  return (
    <section className="events-banner">
      <h2>{title}</h2>
      <div className="events-list">
        {eventItems.map((item, index) => (
          <AktuellesItemComponent key={index} item={item} variant="event" />
        ))}
      </div>
      <p style={{ marginTop: 'var(--spacing-md)' }}>
        <Link href="/aktuelles">Alle Events ansehen →</Link>
      </p>
    </section>
  )
}
