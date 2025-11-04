import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'

export default function AnpackenPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Anpacken</h1>

            <section id="D-01" className="wireframe-box">
              <h2>Anpacken – Info</h2>
              <p>Umfang ~4 Halbtage/Jahr; Beispiele: Feld/Logistik</p>
              <CTA
                text="Anmeldung"
                href="/mitmachen"
                variant="primary"
              />
            </section>

            <EventsBanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
