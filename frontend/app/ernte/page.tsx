import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'
import { Gallery } from '@/components/Gallery'
import { Saisonkalender } from '@/components/Saisonkalender'
import { getEventItems } from '@/components/AktuellesData'
import { AktuellesItemComponent } from '@/components/AktuellesItem'
import Link from 'next/link'

export default function ErntePage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          {/* Erste Zeile: Was wir anbauen und Events nebeneinander */}
          <div className="ernte-top-row">
            <section id="B-02" className="bento-card">
              <div className="plant-pattern"></div>
              <div className="card-header">
                <h3>Was wir anbauen</h3>
              </div>
              <div className="card-body">
                <p className="card-text">Einblicke in unsere Ernte, den Anbau und die Gemeinschaft</p>
                <Gallery />
              </div>
            </section>

            <div className="ernte-events-wrapper">
              <section className="bento-card events-card">
                <div className="plant-pattern"></div>
                <div className="card-header">
                  <h3>Nächste Events</h3>
                </div>
                <div className="card-body">
                  <div className="events-list">
                    {getEventItems().slice(0, 3).map((item, index) => (
                      <AktuellesItemComponent key={index} item={item} variant="event" />
                    ))}
                  </div>
                  <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                    Alle Events ansehen
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* Zweite Zeile: Möchtest du uns kennenlernen */}
          <section id="B-06" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Möchtest du uns kennenlernen?</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Besuche einen unserer Schnuppertage oder melde dich direkt an.</p>
              <div style={{ marginTop: '16px' }}>
                <CTA
                  text="Anfragen"
                  href="/kontakt"
                  variant="primary"
                />
              </div>
            </div>
          </section>

          {/* Dritte Zeile: Warum Demeter und Saisonkalender nebeneinander (1/2 Spalten) */}
          <div className="ernte-bottom-row">
            <section id="B-05" className="bento-card">
              <div className="plant-pattern"></div>
              <div className="card-header">
                <h3>Demeter-Qualität</h3>
              </div>
              <div className="card-body">
                <div className="demeter-info">
                  <h3>Warum Demeter?</h3>
                  <p>
                    Demeter ist die höchste Qualitätsstufe im biologischen Landbau. Als Demeter-zertifizierter Betrieb 
                    gehen wir über die Anforderungen von Bio Suisse hinaus und arbeiten nach den strengsten 
                    biologisch-dynamischen Richtlinien.
                  </p>
                  
                  <div className="demeter-accordion">
                    <details>
                      <summary>Biologisch-dynamische Landwirtschaft</summary>
                      <p>
                        Die biologisch-dynamische Landwirtschaft betrachtet den Hof als lebendigen Organismus. 
                        Wir arbeiten mit speziellen Präparaten, die die Bodenfruchtbarkeit und Pflanzengesundheit fördern. 
                        Der Mond- und Planetenrhythmus wird in die Anbauplanung einbezogen.
                      </p>
                    </details>
                    
                    <details>
                      <summary>Kein Einsatz von synthetischen Mitteln</summary>
                      <p>
                        Wir verzichten vollständig auf synthetische Dünger, Pestizide und Herbizide. Stattdessen 
                        setzen wir auf natürliche Methoden zur Bodenpflege, Schädlingsbekämpfung und 
                        Pflanzenstärkung.
                      </p>
                    </details>
                    
                    <details>
                      <summary>Kreislaufwirtschaft</summary>
                      <p>
                        Auf dem Geisshof betreiben wir eine geschlossene Kreislaufwirtschaft. Kompost, 
                        Gründüngung und Fruchtfolgen sorgen für gesunde Böden und nachhaltige Erträge.
                      </p>
                    </details>
                    
                    <details>
                      <summary>Biodiversität</summary>
                      <p>
                        Wir fördern die Artenvielfalt durch Hecken, Blumenstreifen und vielfältige Fruchtfolgen. 
                        Dies schafft Lebensraum für Nützlinge und trägt zu einem gesunden Ökosystem bei.
                      </p>
                    </details>
                  </div>

                  <p style={{ marginTop: '16px' }}>
                    <a 
                      href="https://www.demeter.ch" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ display: 'inline-block' }}
                    >
                      Mehr über Demeter erfahren →
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section id="B-04" className="bento-card">
              <div className="plant-pattern"></div>
              <div className="card-header">
                <h3>Saisonkalender</h3>
              </div>
              <div className="card-body">
                <p className="card-text">Wann ist welches Gemüse verfügbar? Entdecke unsere saisonale Vielfalt.</p>
                <Saisonkalender />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}