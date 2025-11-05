import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Frisches Demeter-Gemüse. Jede Woche …"
        subtitle=""
      />
      <main className="main-content">
        <div className="bento-grid">
          <div className="content">
            <section id="A-02" className="bento-card bento-card-large">
              <div className="plant-pattern"></div>
              <h2>Willkommen bei biocò</h2>
              <p>biocò ist eine Gemüsegenossenschaft in der Region Baden-Brugg, die seit 2014 auf dem Geisshof in Gebenstorf eine Vielzahl von Biogemüse in Demeter-Qualität anbaut und wöchentlich an ihre Mitglieder verteilt.</p>
              <div className="button-group">
                <CTA
                  text="Jetzt Mitglied werden"
                  href="/mitmachen"
                  variant="primary"
                />
                <CTA
                  text="Zuerst testen?"
                  href="/mitmachen#testen"
                  variant="secondary"
                />
              </div>
            </section>

            <section id="A-03" className="bento-card">
              <div className="plant-pattern"></div>
              <h2>Das ist drin: Saisonal & Demeter</h2>
              <p>Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.</p>
              <ul>
                <li>Wöchentlicher Gemüsekorb</li>
                <li>Saisonalität – das Gemüse der Jahreszeit</li>
                <li>Demeter-Qualität – höchste Bio-Standards</li>
              </ul>
              <CTA
                text="Ernte entdecken"
                href="/ernte"
                variant="primary"
              />
            </section>

            <section id="A-04" className="bento-card">
              <div className="plant-pattern"></div>
              <h2>Gemeinschaft & Solidarität</h2>
              <p>biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.</p>
              <ul>
                <li><strong>Mitarbeit</strong> – <Link href="/anpacken">Anpacken auf dem Feld</Link></li>
                <li><strong>Transparenz</strong> – Solidarische Landwirtschaft (CSA)</li>
                <li><strong>Gemeinschaft</strong> – Jede(r) bringt sich ein</li>
                <li><strong>Lokal/Region</strong> – <Link href="/wir">Hof: Geisshof</Link></li>
              </ul>
            </section>

            <section id="A-05" className="bento-card">
              <div className="plant-pattern"></div>
              <h2>Wie funktioniert's?</h2>
              <ul>
                <li>Info-Event besuchen – <Link href="/aktuelles">Schnuppertage</Link></li>
                <li>Probe-Abo testen – <Link href="/abos">3-Monats-Test</Link></li>
                <li>Mitglied werden – <Link href="/mitmachen">Anmeldung</Link></li>
              </ul>
            </section>

            <section id="A-06" className="bento-card bento-card-large">
              <div className="plant-pattern"></div>
              <h2>Konzept-Überblick (CSA, 3 Schritte)</h2>
              <ol>
                <li><strong>Anmeldung</strong> – Werde Genossenschafter/in</li>
                <li><strong>Bestätigung/Rechnung</strong> – Du erhältst eine Bestätigung</li>
                <li><strong>Abholen</strong> – Wöchentlich Gemüsekorb in einem der <Link href="/depots">Depots</Link></li>
              </ol>
              <p><strong>Hinweis:</strong> Wir teilen Arbeit, Ertrag und Risiko.</p>
            </section>

            <EventsBanner />

            <section id="A-08" className="bento-card">
              <div className="plant-pattern"></div>
              <h2>Trust Bar</h2>
              <p>Demeter · Bio Suisse · lokale Partner</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
