import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'

export default function AnpackenPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="D-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h1>Anpacken</h1>
            <h2>Anpacken – Info</h2>
            <p>Umfang:</p>
            <ul>
              <li>20 Stunden pro halbem Korb</li>
              <li>40 Stunden bei ganzem Gemüsekorb</li>
            </ul>
            <p>Beispiele: Feld/Logistik</p>
            <CTA
              text="Anmeldung"
              href="/mitmachen"
              variant="primary"
            />
          </section>

          <section id="D-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Gruppen</h2>
            <ul>
              <li>Stammtisch</li>
              <li>BG</li>
              <li>Elki</li>
              <li>Kräutergruppe</li>
            </ul>
          </section>

          <EventsBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}