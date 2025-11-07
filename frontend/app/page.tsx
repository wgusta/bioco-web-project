import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { AktuellesTabs } from '@/components/AktuellesTabs'
import { CTA } from '@/components/CTA'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title="Frisches Demeter-Gemüse – fast jede Woche."
        subtitle=""
        image={{
          url: '/images/hero/header_homepage.JPG',
          description: 'biocò Gemüsegenossenschaft auf dem Geisshof'
        }}
      />
      <main className="main-content">
        <div className="bento-grid">
          <section id="A-02" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Willkommen bei biocò</h3>
            </div>
            <div className="card-body">
              <p className="card-text">biocò ist eine Gemüsegenossenschaft in der Region Baden-Brugg, die seit 2014 auf dem Geisshof in Gebenstorf eine Vielzahl von Biogemüse in Demeter-Qualität anbaut und wöchentlich an ihre Mitglieder verteilt.</p>
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
            </div>
          </section>

          <section id="A-03" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Das ist drin: Saisonal & Demeter</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.</p>
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
            </div>
          </section>

          <section id="A-04" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Gemeinschaft & Solidarität</h3>
            </div>
            <div className="card-body">
              <div style={{ marginBottom: '16px' }}>
                <Image
                  src="/images/gemeinschaft/bioco_gemeinschaft.JPG"
                  alt="Gemeinschaft bei biocò"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                />
              </div>
              <p className="card-text">biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.</p>
              <ul>
                <li><strong>Mitarbeit</strong> – <Link href="/anpacken">Anpacken auf dem Feld</Link></li>
                <li><strong>Transparenz</strong> – Solidarische Landwirtschaft (CSA)</li>
                <li><strong>Gemeinschaft</strong> – Jede(r) bringt sich ein</li>
                <li><strong>Lokal/Region</strong> – <Link href="/wir">Hof: Geisshof</Link></li>
              </ul>
            </div>
          </section>

          <AktuellesTabs />

          <section id="A-05" className="bento-card bento-card-fullwidth">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Wie funktioniert's?</h3>
            </div>
            <div className="card-body">
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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
