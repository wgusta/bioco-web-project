import Link from 'next/link'
import { getAktuellesItems, getEventItems } from './AktuellesData'
import { AktuellesItemComponent } from './AktuellesItem'

export function AktuellesTabs() {
  const aktuellesItems = getAktuellesItems()
  const eventItems = getEventItems()

  return (
    <div className="aktuelles-events-row">
      <section id="A-07" className="bento-card">
        <div className="plant-pattern"></div>
        <div className="card-header">
          <h3>Aktuelles</h3>
        </div>
        <div className="card-body">
          <div className="aktuelles-list">
            {aktuellesItems.map((item, index) => (
              <AktuellesItemComponent key={index} item={item} variant="aktuelles" />
            ))}
          </div>
          <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
            Alle Aktuelles ansehen
          </Link>
        </div>
      </section>

      <section id="A-08" className="bento-card events-card">
        <div className="plant-pattern"></div>
        <div className="card-header">
          <h3>Nächste Events</h3>
        </div>
        <div className="card-body">
          <div className="events-list">
            {eventItems.map((item, index) => (
              <AktuellesItemComponent key={index} item={item} variant="event" />
            ))}
          </div>
          <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
            Alle Events ansehen
          </Link>
        </div>
      </section>
    </div>
  )
}
