import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'
import Link from 'next/link'

export default function MitmachenPage() {
  return (
    <>
      <Header />
      <Hero
        title="Werde jetzt Teil von biocò"
        subtitle="Kurze Einleitung; Foto Hände+Gemüse"
      />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <section id="H-02" className="wireframe-box">
              <h2>Zuerst testen?</h2>
              <p>Für Unentschlossene bieten wir Schnuppernachmittage auf dem Geisshof an, um einen Einblick in die Arbeit und Gemeinschaft zu erhalten.</p>
              <ul>
                <li><strong>Info-Event:</strong> Besuche einen <Link href="/aktuelles">Schnuppertag auf dem Geisshof</Link> und lerne biocò kennen</li>
                <li><strong>Probe-Abo:</strong> Teste mit einem <Link href="/abos">3-Monats-Probe-Abo</Link> bevor du dich festlegst</li>
              </ul>
            </section>

            <section id="H-03" className="wireframe-box">
              <h2>Commitment-Check</h2>
              <p>Bevor du dich anmeldest, überlege dir folgendes:</p>
              <ul>
                <li><strong>Anteile:</strong> Halber oder ganzer Gemüsekorb?</li>
                <li><strong>Beitrag:</strong> Betriebsbeitrag für ein ganzes Jahr</li>
                <li><strong>Bindung:</strong> Das Abo läuft ein Jahr (entspricht der Anbauplanung)</li>
                <li><strong>Mitarbeit:</strong> ~4 Halbtage/Jahr (20 Stunden bei halbem Korb, 40 Stunden bei ganzem Korb)</li>
                <li><strong>Risiko:</strong> Wir teilen Ernte, Ertrag und Risiko gemeinsam</li>
              </ul>
            </section>

            <section id="H-04" className="wireframe-box">
              <h2>Anmeldung (Smart Form)</h2>
              <p>Angaben → Abo → Anteile (cond.) → Depot/Zahlung → Mitarbeit (cond.) → Bestätigung; Sticky Summary</p>
              <p><em>Note: Full form implementation in Phase 2</em></p>
            </section>

            <EventsBanner />

            <section id="H-06" className="wireframe-box">
              <h2>Nächstes (3 Schritte)</h2>
              <ol>
                <li><strong>Bestätigungs-Mail:</strong> Du erhältst eine E-Mail zur Bestätigung deiner Anmeldung (Double Opt-In)</li>
                <li><strong>Rechnung:</strong> Du erhältst die Rechnung für dein Gemüseabo</li>
                <li><strong>Start:</strong> Abholung des ersten Gemüsekorbes in deinem gewählten Depot</li>
              </ol>
            </section>

            <section id="H-07" className="wireframe-box">
              <h2>Warteliste (conditional)</h2>
              <p>Kurzformular: Vorname, Name, E-Mail, Wunsch-Abo; ersetzt H-04 wenn voll</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
