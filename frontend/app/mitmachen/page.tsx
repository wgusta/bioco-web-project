import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { EventsBanner } from '@/components/EventsBanner'
import Link from 'next/link'

export default function MitmachenPage() {
  return (
    <>
      <Header />
      <Hero
        title="Werde jetzt Teil von biocò"
        subtitle="Kurze Einleitung; Foto Hände+Gemüse"
      />
      <main className="main-content">
        <div className="bento-grid">
          <section id="H-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Zuerst testen?</h2>
            <ul>
              <li>Info-Event → <Link href="/aktuelles">Aktuelles / G-02 Nächste Events</Link></li>
              <li>Probe-Abo → <Link href="/abos">Abos / C-02</Link></li>
            </ul>
          </section>

          <section id="H-03" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Commitment-Check</h2>
            <p>Checkliste: Anteile, Beitrag, Bindung, Mitarbeit, Risiko</p>
          </section>

          <section id="H-04" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Anmeldung (Smart Form)</h2>
            <p>Angaben → Abo → Anteile (cond.) → Depot/Zahlung → Mitarbeit (cond.) → Bestätigung; Sticky Summary</p>
            <p><em>Note: Full form implementation in Phase 2</em></p>
          </section>

          <EventsBanner />

          <section id="H-06" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Nächstes (3 Schritte)</h2>
            <p>Bestätigungs-Mail → Rechnung → Start</p>
          </section>

          <section id="H-07" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Warteliste (conditional)</h2>
            <p>Kurzformular: Vorname, Name, E-Mail, Wunsch-Abo; ersetzt H-04 wenn voll</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}