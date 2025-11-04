import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AktuellesPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Aktuelles</h1>

            <section id="G-01" className="wireframe-box">
              <h2>Aktuelles Übersicht</h2>
              <p>Phase 2: Blog/News mit Karten-Grid; Einzelansichten</p>
            </section>

            <section id="G-02" className="wireframe-box">
              <h2>Nächste Events</h2>
              <div className="events-list">
                <div className="event-item wireframe-box">
                  <h3>24. Oktober 2025</h3>
                  <p><strong>Letzter biocò Schnuppertag des Jahres</strong></p>
                  <p>Auf dem Geisshof in Gebenstorf</p>
                  <p>Komm vorbei und lerne biocò kennen! Erfahre mehr über unsere Gemüsegenossenschaft, die Solidarische Landwirtschaft und wie du Mitglied werden kannst.</p>
                </div>
                
                <div className="event-item wireframe-box">
                  <h3>15. November 2025</h3>
                  <p><strong>Fondue-Abend</strong></p>
                  <p>Gemeinsamer Anlass für alle Mitglieder</p>
                </div>
                
                <div className="event-item wireframe-box">
                  <h3>27. November 2025</h3>
                  <p><strong>Außerordentliche Generalversammlung</strong></p>
                  <p>Wichtige Informationen für alle Genossenschafter/innen</p>
                </div>
              </div>
              <p className="dim">Weitere Events werden regelmässig aktualisiert</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
