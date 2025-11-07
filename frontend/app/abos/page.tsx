import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import { PersonIcons } from '@/components/PersonIcons'
import Image from 'next/image'
import Link from 'next/link'

export default function AbosPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="C-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Gemüse-Abos</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Das Gemüseabo läuft vom 1. Januar bis zum 31. Dezember. Ohne Kündigung verlängert sich das Gemüseabo jeweils um ein Kalenderjahr. Die Kündigungsfrist beträgt zwei Monate auf Ende eines Kalenderjahres.</p>
            
            <div className="pricing-table">
              <table>
                <thead>
                  <tr>
                    <th>Gemüsekorb</th>
                    <th>Personen</th>
                    <th>Jahrespreis</th>
                    <th>Anteilsscheine Kosten</th>
                    <th>Mitarbeit pro Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Halb</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        1 Anteilsschein
                      </div>
                    </td>
                    <td>
                      <PersonIcons count={1} />
                    </td>
                    <td>CHF 750.-</td>
                    <td>CHF 250.-</td>
                    <td>
                      20 Stunden<br />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>oder 10 Halbtage</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Standard</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        2 Anteilsscheine
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <PersonIcons count={2} />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>+</span>
                      </div>
                    </td>
                    <td>CHF 1'280.-</td>
                    <td>CHF 500.-</td>
                    <td>
                      40 Stunden<br />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>oder 20 Halbtage</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Doppel</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                        4 Anteilsscheine
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <PersonIcons count={4} />
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>+</span>
                      </div>
                    </td>
                    <td>CHF 2'350.-</td>
                    <td>CHF 1'000.-</td>
                    <td>
                      80 Stunden<br />
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>oder 40 Halbtage</span>
                    </td>
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
            </div>
          </section>

          <section id="C-02" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Probe-Abo</h3>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '16px' }}>
                <Image
                  src="/images/abos/bioco_probeabo.JPG"
                  alt="Probe-Abo bei biocò"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                />
              </div>
              <p className="card-text">Möchtest du biocò erst einmal kennenlernen? Teste unser Gemüseabo für 3 Monate.</p>
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
            </div>
          </section>

          <section id="C-03" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Anteilsscheine ohne Gemüsekorb</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Du möchtest biocò unterstützen, ohne ein Gemüseabo zu beziehen? Das ist möglich!</p>
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
            </div>
          </section>

          <section className="bento-card events-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Nächste Events</h3>
            </div>
            <div className="card-body">
              <EventsBanner />
            </div>
          </section>

          <section id="C-04" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Zusatz-Abos</h3>
            </div>
            <div className="card-body">
              <p className="card-text">In Planung: Partnerangebote wie Eier, Brot, Tofu und weitere regionale Produkte.</p>
              <p className="card-text">Diese werden in Zukunft zusätzlich zum Gemüsekorb angeboten.</p>
            </div>
          </section>

          {/* Möchtest du uns kennenlernen - Am Ende */}
          <section id="B-06" className="bento-card bento-card-fullwidth kennenlernen-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Möchtest du uns kennenlernen?</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Es können viele Fragen auftauchen, die wir auf dieser Website nicht allesamt beantworten können. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via <Link href="/kontakt">Kontaktformular</Link> bei uns melden und wir beantworten deine Fragen persönlich.</p>
              <div style={{ marginTop: '16px' }}>
                <CTA
                  text="Kontaktformular"
                  href="/kontakt"
                  variant="primary"
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