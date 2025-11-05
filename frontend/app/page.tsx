import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { AktuellesTabs } from '@/components/AktuellesTabs'
import { CTA } from '@/components/CTA'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Frisches Demeter-Gemüse – fast jede Woche."
        subtitle=""
      />
      <main className="main-content">
        <div className="bento-grid">
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

          <section id="A-05" className="bento-card bento-card-fullwidth">
            <div className="plant-pattern"></div>
            <h2>Wie funktioniert's?</h2>
            <div className="procedure-steps">
              <div className="procedure-step">
                <div className="step-icon">1</div>
                <div className="step-content">
                  <h3>Anmelden als Mitglied oder Schnupperabo</h3>
                  <p>Entscheide dich für ein <Link href="/abos">Abo</Link> oder teste mit einem <Link href="/mitmachen">Schnupperabo</Link></p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">2</div>
                <div className="step-content">
                  <h3>Rechnung bezahlen</h3>
                  <p>Du erhältst eine Rechnung und bezahlst den Beitrag für dein Abo</p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">3</div>
                <div className="step-content">
                  <h3>Arbeitseinsätze planen</h3>
                  <p>Organisiere deine <Link href="/anpacken">Mitarbeit auf dem Feld</Link> oder in der Logistik</p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">4</div>
                <div className="step-content">
                  <h3>Gemüse abholen</h3>
                  <p>Wöchentlich holst du deinen Gemüsekorb in einem der <Link href="/depots">Standorte</Link> ab</p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">5</div>
                <div className="step-content">
                  <h3>Geniessen und teilen</h3>
                  <p>Geniesse dein frisches Gemüse und teile deine Erlebnisse mit uns auf <a href="https://www.instagram.com/bioco.ch" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
              </div>
            </div>
          </section>

          <AktuellesTabs />
        </div>
      </main>
      <Footer />
    </>
  )
}
