import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import { Gallery } from '@/components/Gallery'
import { Saisonkalender } from '@/components/Saisonkalender'
import Link from 'next/link'

export default function ErntePage() {
  return (
    <>
      <Header />
      <Hero
        title="Unser Gemüse: Frisch, lokal, Demeter."
        subtitle="Vielfalt & Qualität"
      />
      <main className="main-content">
        <div className="bento-grid">
          <section id="B-02" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Galerie</h2>
            <p>Einblicke in unsere Ernte, den Anbau und die Gemeinschaft</p>
            <Gallery />
          </section>

          <section id="B-04" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Saisonkalender</h2>
            <p>Wann ist welches Gemüse verfügbar? Entdecke unsere saisonale Vielfalt.</p>
            <Saisonkalender />
          </section>

          <section id="B-05" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Demeter-Qualität</h2>
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
          </section>

          <EventsBanner />
          
          <section id="B-06" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Möchtest du uns kennenlernen?</h2>
            <p>Besuche einen unserer Schnuppertage oder melde dich direkt an.</p>
            <div style={{ marginTop: '16px' }}>
              <CTA
                text="Anfragen"
                href="/kontakt"
                variant="primary"
              />
            </div>
          </section>

          <section className="bento-card">
            <div className="plant-pattern"></div>
            <CTA
              text="Jetzt Abo sichern"
              href="/mitmachen"
              variant="primary"
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}