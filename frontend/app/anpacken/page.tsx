import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import Image from 'next/image'
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
              <h3>Was es braucht, damit wir gesundes Gemüse haben</h3>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <Image
                src="/images/anpacken/bioco_anpacken_einzel.JPG"
                alt="Einzelperson bei der Mitarbeit auf dem Geisshof"
                width={800}
                height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
            </div>
              <h4 className="card-title">Mitarbeit bei biocò</h4>
              <p className="card-text">Jedes Mitglied bringt sich ein und unterstützt die Genossenschaft aktiv.</p>
          
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
                <li><strong>Feld/Anbau:</strong> Pflanzen, Jäten, Ernten</li>
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
                <li>Deine bevorzugten Einsatztage (Mo-Sa) angeben</li>
                <li>Deine bevorzugten Zeiten wählen (morgens, nachmittags, abends)</li>
                <li>Tätigkeitsbereiche auswählen</li>
                <li>Arbeitseinsätze planen und buchen</li>
              </ul>
            </div>

            <div style={{ marginTop: '24px' }}>
              <CTA
                text="Jetzt anmelden"
                href="/anpacken"
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
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <Image
                src="/images/anpacken/bioco_anpacken_gruppe.JPG"
                alt="Gruppe bei der Mitarbeit auf dem Geisshof"
                width={800}
                height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                />
              </div>
              <p className="card-text">Bei biocò gibt es verschiedene Arbeitsgruppen und Gemeinschaftsaktivitäten, die das Herzstück unserer Genossenschaft bilden:</p>
              <ul>
                <li><strong>Elki:</strong> Familienaktivitäten und gemeinsame Anlässe. Die Elki-Gruppe organisiert speziell für Familien mit Kindern ausgerichtete Aktivitäten auf dem Hof. Kinder können spielerisch den Anbau kennenlernen, gemeinsam ernten und die Natur entdecken. Diese Aktivitäten stärken das Gemeinschaftsgefühl und ermöglichen es, auch den jüngsten Mitgliedern die Werte der solidarischen Landwirtschaft zu vermitteln.</li>
                <li><strong>Kräutergruppe:</strong> Spezialisiert auf Kräuter und Gewürze. Diese Gruppe widmet sich dem Anbau, der Pflege und der Verarbeitung von Kräutern und Gewürzen. Mitglieder lernen verschiedene Kräuterarten kennen, erfahren mehr über deren Verwendung in der Küche und können ihre eigenen Kräuterprodukte herstellen. Die Kräutergruppe trägt zur Vielfalt unseres Angebots bei und bietet eine spezielle Nische für interessierte Mitglieder.</li>
                <li><strong>BG (Betriebsgruppe):</strong> Aktive Mitarbeit in der Betriebsorganisation. Die Betriebsgruppe koordiniert die strategischen Entscheidungen, plant die Anbauzyklen, organisiert die Logistik und sorgt für die reibungslose Abwicklung des täglichen Betriebs. Mitglieder der BG bringen ihre Expertise in verschiedenen Bereichen ein und gestalten die Zukunft der Genossenschaft aktiv mit.</li>
              </ul>
              <p className="card-text" style={{ marginTop: '16px' }}>Diese Gruppen ermöglichen es, sich nach eigenen Interessen und Fähigkeiten einzubringen und die Genossenschaft aktiv mitzugestalten. Jede Gruppe trägt auf ihre Weise zum Erfolg und zur Gemeinschaft bei biocò bei.</p>
            </div>
          </section>

          <section className="bento-card events-card bento-card-fullwidth">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Nächste Events</h3>
            </div>
            <div className="card-body">
            <EventsBanner />
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