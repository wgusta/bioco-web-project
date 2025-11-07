import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import Image from 'next/image'
import Link from 'next/link'

export default function WirPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="F-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Wir</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">Team & Hof</h4>
              <p className="card-text">biocò ist eine Gemeinschaft von engagierten Menschen, die gemeinsam für frisches, regionales Demeter-Gemüse sorgen.</p>
            
            <div className="team-grid">
              <div className="team-card">
                <div className="team-card-image">
                  <Image
                    src="/images/team/bioco_hofteam_christian.JPG"
                    alt="Christian vom Hofteam"
                    width={300}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <h3>Betriebsgruppe (BG)</h3>
                <p>Die Betriebsgruppe koordiniert den Anbau, die Logistik und die Organisation der Genossenschaft.</p>
              </div>
              
              <div className="team-card">
                <div className="team-card-image">
                  <Image
                    src="/images/team/hofteam_matthias.JPG"
                    alt="Matthias vom Hofteam"
                    width={300}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <h3>Gärtnerteam</h3>
                <p>Unser erfahrenes Gärtnerteam sorgt für die Anbauplanung und die tägliche Feldarbeit auf dem Geisshof.</p>
              </div>
              
              <div className="team-card">
                <div className="team-card-image">
                  <div className="team-placeholder">Foto</div>
                </div>
                <h3>Alle Mitglieder</h3>
                <p>Jede(r) Genossenschafter/in bringt sich ein – ob bei der Feldarbeit, in der Logistik oder bei Events.</p>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <h3>Der Geisshof</h3>
              <p>
                Der Geisshof in Gebenstorf ist seit 2014 der Ort, an dem biocò Gemüse anbaut. 
                Hier finden die Feldarbeit, die Gemüseaufbereitung und viele gemeinsame Anlässe statt.
              </p>
              <p>
                <Link href="/depots" className="btn btn-secondary" style={{ display: 'inline-block', marginTop: '8px' }}>
                  Anfahrtsweg zum Geisshof
                </Link>
              </p>
            </div>
            </div>
          </section>

          <section id="F-02" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Mission & Leitbild</h3>
            </div>
            <div className="card-body">
            
            <div className="mission-values">
              <div className="mission-item">
                <h3>Solidarität</h3>
                <p>
                  Wir teilen Arbeit, Ertrag und Risiko gemeinsam. Solidarische Landwirtschaft bedeutet, 
                  dass Produzentinnen und Konsumentinnen zusammenarbeiten und füreinander einstehen.
                </p>
              </div>
              
              <div className="mission-item">
                <h3>Nachhaltigkeit</h3>
                <p>
                  Wir arbeiten nach biologisch-dynamischen Prinzipien (Demeter) und fördern 
                  Biodiversität, Kreislaufwirtschaft und gesunde Böden.
                </p>
              </div>
              
              <div className="mission-item">
                <h3>Gemeinschaft</h3>
                <p>
                  biocò lebt von der Gemeinschaft. Jede(r) bringt sich ein, lernt voneinander und 
                  gestaltet die Genossenschaft aktiv mit.
                </p>
              </div>
              
              <div className="mission-item">
                <h3>Regionalität</h3>
                <p>
                  Unser Gemüse wächst direkt in der Region Baden-Brugg. Kurze Wege, frische Ernte, 
                  lokale Verbundenheit.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <h3>Gotti-System</h3>
              <p>
                Neumitglieder werden von einem "Gotti" oder "Götti" (Paten) begleitet. Dieses System 
                hilft neuen Mitgliedern, sich in der Genossenschaft zurechtzufinden und zeigt ihnen 
                die Abläufe und Möglichkeiten der Mitarbeit.
              </p>
            </div>
            </div>
          </section>

          <section id="F-03" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Geschichte</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                Die Gemüsegenossenschaft biocò wurde 2014 gegründet. Aus einer kleinen Gruppe 
                engagierter Menschen wurde eine lebendige Gemeinschaft mit über 100 Mitgliedern.
              </p>
              <p className="card-text">
                Gestartet wurde auf dem Geisshof in Gebenstorf, wo wir bis heute unser Gemüse anbauen. 
                Über die Jahre haben wir die Anbaufläche erweitert, neue Standorte (Depots) für die 
                Gemüseabholung geschaffen und die Strukturen der Genossenschaft weiterentwickelt.
              </p>
              <p className="card-text">
                Heute versorgen wir Mitglieder in der Region Baden-Brugg wöchentlich mit frischem, 
                saisonalem Demeter-Gemüse und leben gemeinsam die Prinzipien der Solidarischen Landwirtschaft.
              </p>
            </div>
          </section>

          <section id="F-04" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Timeline</h3>
            </div>
            <div className="card-body">
              <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2014</div>
                <div className="timeline-content">
                  <h3>Gründung</h3>
                  <p>biocò wird als Gemüsegenossenschaft gegründet und startet den Anbau auf dem Geisshof.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h3>Erste Erweiterung</h3>
                  <p>Die Anzahl der Mitglieder wächst, erste Depots werden eingerichtet.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2016-2018</div>
                <div className="timeline-content">
                  <h3>Strukturelle Entwicklung</h3>
                  <p>Betriebsgruppe wird etabliert, Strukturen werden professionalisiert, neue Standorte entstehen.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2019-2023</div>
                <div className="timeline-content">
                  <h3>Wachstum & Konsolidierung</h3>
                  <p>Weiteres Wachstum der Mitgliederzahl, Optimierung der Anbauplanung und Logistik.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3>Neue Website</h3>
                  <p>Launch der neuen Website mit modernem Design und verbesserter Benutzerführung.</p>
                </div>
              </div>
            </div>
            </div>
          </section>

          <EventsBanner />
          
          <section className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Mitmachen?</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Werde Teil unserer Gemeinschaft und unterstütze die solidarische Landwirtschaft.</p>
            <CTA
              text="Jetzt Mitglied werden"
              href="/mitmachen"
              variant="primary"
            />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}