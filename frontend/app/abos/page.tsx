import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'

export default function AbosPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Gemüse-Abos</h1>

            <section id="C-01" className="wireframe-box">
              <h2>Gemüse-Abos</h2>
              <p>Halb/Standard/Doppel – Leistungen & Preise</p>
              <p>Link → <a href="/mitmachen">Mitmachen! / H-04</a></p>
            </section>

            <section id="C-02" className="wireframe-box">
              <h2>Probe-Abo</h2>
              <p>3-Monats-Test</p>
              <p>Link → <a href="/mitmachen">Mitmachen! / H-02</a></p>
            </section>

            <EventsBanner />

            <section id="C-04" className="wireframe-box">
              <h2>Zusatz-Abos</h2>
              <p>Phase 2: Partnerangebote (Eier, Brot, Tofu)</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
