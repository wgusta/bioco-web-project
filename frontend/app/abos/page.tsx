import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'

export default function AbosPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Gemüse-Abos</h1>

            <section id="C-01" className="wireframe-box">
              <h2>Gemüse-Abos</h2>
              <p>Wähle die Grösse, die zu dir passt:</p>
              <ul>
                <li><strong>Halb:</strong> Für kleinere Haushalte oder wenn du weniger Gemüse benötigst</li>
                <li><strong>Standard:</strong> Für durchschnittliche Haushalte</li>
                <li><strong>Doppel:</strong> Für grössere Haushalte oder wenn du mehr Gemüse möchtest</li>
              </ul>
              <p>Alle Abos enthalten wöchentlich frisches, saisonales Demeter-Gemüse aus unserem Anbau auf dem Geisshof.</p>
              <p><em>Preise und Details erhältst du bei der Anmeldung.</em></p>
              <CTA
                text="Jetzt anmelden"
                href="/mitmachen"
                variant="primary"
              />
            </section>

            <section id="C-02" className="wireframe-box">
              <h2>Probe-Abo</h2>
              <p>Möchtest du biocò erst einmal testen? Unser 3-Monats-Probe-Abo gibt dir die Möglichkeit, die Genossenschaft kennenzulernen, bevor du dich für ein ganzes Jahr festlegst.</p>
              <p>Im Probe-Abo erhältst du:</p>
              <ul>
                <li>3 Monate lang wöchentlich einen Gemüsekorb</li>
                <li>Einblick in die Solidarische Landwirtschaft</li>
                <li>Möglichkeit zur Mitarbeit auf dem Feld</li>
              </ul>
              <CTA
                text="Probe-Abo anfragen"
                href="/mitmachen#testen"
                variant="secondary"
              />
            </section>

            <EventsBanner />

            <section id="C-04" className="wireframe-box">
              <h2>Zusatz-Abos</h2>
              <p>Phase 2: Partnerangebote (Eier, Brot, Tofu)</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
