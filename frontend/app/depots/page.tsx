import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'
import { DepotMap } from '@/components/DepotMap'
import { GeisshofMap } from '@/components/GeisshofMap'
import Link from 'next/link'

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

          {/* Möchtest du uns kennenlernen - Am Ende */}
          <section id="B-06" className="bento-card bento-card-fullwidth kennenlernen-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Möchtest du uns kennenlernen?</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Es können viele Fragen auftauchen, die wir auf dieser Website nicht allesamt beantworten können. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via Kontaktformular bei uns melden und wir beantworten deine Fragen persönlich.</p>
              <div style={{ marginTop: '16px', display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <CTA
                  text="Nimm Kontakt auf"
                  href="/kontakt"
                  variant="primary"
                />
                <CTA
                  text="Zu uns finden"
                  href="/depots"
                  variant="secondary"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}