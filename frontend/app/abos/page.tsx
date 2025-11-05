import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import Link from 'next/link'

export default function AbosPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="C-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h1>Gemüse-Abos</h1>
            <p>Das Gemüseabo läuft vom 1. Januar bis zum 31. Dezember. Ohne Kündigung verlängert sich das Gemüseabo jeweils um ein Kalenderjahr. Die Kündigungsfrist beträgt zwei Monate auf Ende eines Kalenderjahres.</p>
            
            <div className="pricing-table">
              <table>
                <thead>
                  <tr>
                    <th>Gemüsekorb</th>
                    <th>Personen</th>
                    <th>Jahrespreis</th>
                    <th>Anteilsscheine</th>
                    <th>Anteilsscheine Kosten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Halb</strong></td>
                    <td>1 Person</td>
                    <td>CHF 750.-</td>
                    <td>1 Anteilsschein</td>
                    <td>CHF 250.-</td>
                  </tr>
                  <tr>
                    <td><strong>Standard</strong></td>
                    <td>2-3 Personen</td>
                    <td>CHF 1'280.-</td>
                    <td>2 Anteilsscheine</td>
                    <td>CHF 500.-</td>
                  </tr>
                  <tr>
                    <td><strong>Doppel</strong></td>
                    <td>4-6 Personen</td>
                    <td>CHF 2'350.-</td>
                    <td>4 Anteilsscheine</td>
                    <td>CHF 1'000.-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <p><strong>Anteilsscheine:</strong> Jeder Anteilsschein kostet CHF 250.- und ist eine Bedingung für den Bezug eines Gemüsekorbes. Du kannst zusätzliche Anteilsscheine erwerben, um die Genossenschaft stärker zu unterstützen.</p>
            </div>

            <div style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <p><strong>💡 Tipp:</strong> Geteilte Körbe sparen CHF 110 pro Jahr und reduzieren Logistikaufwand. Wir empfehlen, Körbe zu teilen!</p>
            </div>

            <div style={{ marginTop: '16px' }}>
              <h3>Was ist im Gemüsekorb?</h3>
              <ul>
                <li>Wöchentlicher Gemüsekorb mit saisonalem Gemüse</li>
                <li>Demeter-Qualität – höchste Bio-Standards</li>
                <li>Frisch vom Geisshof in Gebenstorf</li>
                <li>Abholung in einem der <Link href="/standorte">Standorte</Link> (Dienstag oder Freitag, 17:00-19:00 Uhr)</li>
              </ul>
              <p><Link href="/ernte">Mehr über unsere Ernte erfahren →</Link></p>
            </div>

            <div style={{ marginTop: '16px' }}>
              <h3>Zahlungsweise</h3>
              <p>Die erste Rechnung wird per 31. Januar fällig. Du kannst wählen:</p>
              <ul>
                <li><strong>Quartalsweise:</strong> Du bezahlst vierteljährlich</li>
                <li><strong>Ganzes Jahr:</strong> Du bezahlst den gesamten Jahresbeitrag einmalig</li>
              </ul>
            </div>

            <div style={{ marginTop: '24px' }}>
              <CTA
                text="Jetzt Abo bestellen"
                href="/mitmachen"
                variant="primary"
              />
            </div>
          </section>

          <section id="C-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Probe-Abo</h2>
            <p>Möchtest du biocò erst einmal kennenlernen? Teste unser Gemüseabo für 3 Monate.</p>
            <p><strong>Details:</strong></p>
            <ul>
              <li>3 Monate Gemüsekorb</li>
              <li>Proportionaler Anteil am Jahrespreis</li>
              <li>Flexible Umstellung auf Jahresabo möglich</li>
            </ul>
            <CTA
              text="Probe-Abo testen"
              href="/mitmachen"
              variant="secondary"
            />
          </section>

          <section id="C-03" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Anteilsscheine ohne Gemüsekorb</h2>
            <p>Du möchtest biocò unterstützen, ohne ein Gemüseabo zu beziehen? Das ist möglich!</p>
            <p><strong>Vorteile:</strong></p>
            <ul>
              <li>Unterstützung der Genossenschaft</li>
              <li>Vorrang auf der Warteliste für einen Gemüsekorb</li>
              <li>Mitspracherecht in der Genossenschaft</li>
            </ul>
            <p><strong>Kosten:</strong> CHF 250.- pro Anteilsschein</p>
            <CTA
              text="Anteilsscheine erwerben"
              href="/mitmachen"
              variant="secondary"
            />
          </section>

          <EventsBanner />

          <section id="C-04" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Zusatz-Abos</h2>
            <p>In Planung: Partnerangebote wie Eier, Brot, Tofu und weitere regionale Produkte.</p>
            <p>Diese werden in Zukunft zusätzlich zum Gemüsekorb angeboten.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}