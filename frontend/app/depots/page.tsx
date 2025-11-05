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
              <div className="card-header-divider"></div>
              <h4 className="card-title">Gemüsekorb-Abholung</h4>
            </div>
            <div className="card-body">
              <p className="card-text">Hier findest du alle Standorte, an denen du deinen wöchentlichen Gemüsekorb abholen kannst.</p>
            <DepotMap />
            <div style={{ marginTop: '16px' }}>
              <h3>Abholzeiten</h3>
              <ul>
                <li><strong>Dienstag:</strong> 17:00 - 19:00 Uhr</li>
                <li><strong>Freitag:</strong> 17:00 - 19:00 Uhr</li>
              </ul>
            </div>
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