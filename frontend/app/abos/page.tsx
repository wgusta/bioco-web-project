import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import Link from 'next/link'

export default function AbosPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="C-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h1>Gemüse-Abos</h1>
            <h2>Gemüse-Abos</h2>
            <p>Halb/Standard/Doppel – Leistungen & Preise</p>
            <p>Link → <Link href="/mitmachen">Mitmachen! / H-04</Link></p>
          </section>

          <section id="C-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Probe-Abo</h2>
            <p>3-Monats-Test</p>
            <p>Link → <Link href="/mitmachen">Mitmachen! / H-02</Link></p>
          </section>

          <EventsBanner />

          <section id="C-04" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Zusatz-Abos</h2>
            <p>Phase 2: Partnerangebote (Eier, Brot, Tofu)</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}