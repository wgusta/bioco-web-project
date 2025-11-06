import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import Link from 'next/link'

export default function AnpackenPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="D-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Anpacken</h3>
            </div>
            <div className="card-body">
              <h4 className="card-title">Mitarbeit bei biocò</h4>
              <p className="card-text">Jede(r) Mitglied bringt sich ein und unterstützt die Genossenschaft aktiv. Die Mitarbeit ist ein wichtiger Teil des CSA-Prinzips.</p>
            
            <div style={{ marginTop: '16px' }}>
              <h3>Umfang</h3>
              <ul>
                <li><strong>Halb Gemüsekorb:</strong> 20 Stunden pro Jahr (5 Halbtage, alias "10 Rüebli")</li>
                <li><strong>Standard/Doppel Gemüsekorb:</strong> 40 Stunden pro Jahr</li>
              </ul>
            </div>

            <div style={{ marginTop: '16px' }}>
              <h3>Tätigkeitsbereiche</h3>
              <p>Du kannst dich in verschiedenen Bereichen einbringen:</p>
              <ul>
                <li><strong>Feld/Anbau:</strong> Säen, Pflanzen, Jäten, Ernten, Unkraut bekämpfen</li>
                <li><strong>Logistik:</strong> Gemüse waschen, sortieren, packen, verteilen</li>
                <li><strong>Administration:</strong> Büroarbeit, Rechnungen, Kommunikation</li>
                <li><strong>Events/Organisation:</strong> Schnuppertage, Veranstaltungen, Gemeinschaftsanlässe</li>
                <li><strong>Andere:</strong> Nach Absprache kannst du auch andere Fähigkeiten einbringen</li>
              </ul>
            </div>

            <div style={{ marginTop: '16px' }}>
              <h3>Planung</h3>
              <p>Nach der Anmeldung erhältst du Zugang zum Intranet. Dort kannst du:</p>
              <ul>
                <li>Deine bevorzugten Tage angeben (Mo-Sa)</li>
                <li>Deine bevorzugten Zeiten wählen (morgens, nachmittags, abends)</li>
                <li>Tätigkeitsbereiche auswählen</li>
                <li>Arbeitseinsätze planen und buchen</li>
              </ul>
            </div>

            <div style={{ marginTop: '24px' }}>
              <CTA
                text="Jetzt anmelden"
                href="/mitmachen"
                variant="primary"
              />
            </div>
            </div>
          </section>

          <section id="D-02" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Gruppen & Gemeinschaft</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Bei biocò gibt es verschiedene Arbeitsgruppen und Gemeinschaftsaktivitäten:</p>
            <ul>
              <li><strong>Stammtisch:</strong> Regelmäßige Treffen für Austausch und Gemeinschaft</li>
              <li><strong>BG (Betriebsgruppe):</strong> Aktive Mitarbeit in der Betriebsorganisation</li>
              <li><strong>Elki:</strong> Familienaktivitäten und gemeinsame Anlässe</li>
              <li><strong>Kräutergruppe:</strong> Spezialisiert auf Kräuter und Gewürze</li>
            </ul>
            <p className="card-text" style={{ marginTop: '16px' }}>Die Mitarbeit ist nicht nur Arbeit, sondern auch Gemeinschaft und Austausch!</p>
            </div>
          </section>

          <EventsBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}