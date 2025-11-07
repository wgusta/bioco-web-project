import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getAktuellesItems, getEventItems } from '@/components/AktuellesData'
import { AktuellesItemComponent } from '@/components/AktuellesItem'

export default function AktuellesPage() {
  const aktuellesItems = getAktuellesItems()
  const eventItems = getEventItems()

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <div className="aktuelles-events-row">
            <section id="G-01" className="bento-card">
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
              </div>
            </section>

            <section id="G-02" className="bento-card events-card">
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
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}