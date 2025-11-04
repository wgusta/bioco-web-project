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
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <section id="A-02" className="wireframe-box">
              <h2>Hero</h2>
              <p>CTA: <strong>Jetzt Mitglied werden</strong> → <Link href="/mitmachen">Mitmachen! / H-04 Anmeldung</Link></p>
              <p>CTA: <strong>Zuerst testen?</strong> → <Link href="/mitmachen">Mitmachen! / H-02 Zuerst testen?</Link></p>
              <p className="dim">Foto: authentischer Hof-/Ernte-Shot</p>
            </section>

            <section id="A-03" className="wireframe-box">
              <h2>Value Prop – Produkt</h2>
              <p>„Das ist drin: Saisonal & Demeter."</p>
              <p>Cards: Wöchentlicher Korb; Saisonalität; Demeter</p>
              <CTA
                text="Ernte entdecken"
                href="/ernte"
                variant="primary"
              />
            </section>

            <section id="A-04" className="wireframe-box">
              <h2>Value Prop – Gemeinschaft</h2>
              <ul>
                <li>Mitarbeit → <Link href="/anpacken">Anpacken / D-01 Info</Link></li>
                <li>Transparenz (CSA) → <Link href="#A-06">Homepage / A-06 Konzept-Überblick</Link></li>
                <li>Gotti-System → <Link href="/wir">Wir / F-02 Mission/Leitbild</Link></li>
                <li>Lokal/Region → <Link href="/wir">Wir / F-01 Team & Hof</Link></li>
              </ul>
            </section>

            <section id="A-05" className="wireframe-box">
              <h2>Dual-Funnel CTA</h2>
              <ul>
                <li>Info-Event → <Link href="/depots">Depots / E-02 Nächste Events</Link> <span className="dim">(oder Eventliste)</span></li>
                <li>Probe-Abo → <Link href="/abos">Abos / C-02 Probe-Abo</Link> · <Link href="/mitmachen">Mitmachen! / H-02</Link></li>
              </ul>
            </section>

            <section id="A-06" className="wireframe-box">
              <h2>Konzept-Überblick (CSA, 3 Schritte)</h2>
              <p>Schritte: Anmeldung → Bestätigung/Rechnung → Abholen</p>
              <p>Hinweis: geteiltes Risiko & Mitarbeit</p>
              <p className="dim">Piktos, kurze Absätze</p>
            </section>

            <EventsBanner />

            <section id="A-08" className="wireframe-box">
              <h2>Trust Bar</h2>
              <p>Demeter · Bio Suisse · lokale Partner (einfarbige Logos)</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
