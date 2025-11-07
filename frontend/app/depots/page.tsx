import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DepotMap } from '@/components/DepotMap'
import { GeisshofMap } from '@/components/GeisshofMap'

export default function StandortePage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="standorte-layout">
          <section id="E-01" className="bento-card standorte-map-section">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Standorte</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Hier findest du alle Standorte, an denen du deinen wöchentlichen Gemüsekorb abholen kannst.</p>
              <p className="card-text" style={{ marginTop: 'var(--spacing-sm)' }}>
                <strong>Abholzeiten:</strong> Dienstag und Freitag, 17:00 - 19:00 Uhr
              </p>
              <DepotMap />
            </div>
          </section>

          <section id="E-02" className="bento-card standorte-map-section">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Anfahrt zum Geisshof</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Der Geisshof ist unser Betrieb in Gebenstorf, wo wir das Gemüse anbauen. Hier kannst du auch direkt vorbeikommen.</p>
              <GeisshofMap />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}