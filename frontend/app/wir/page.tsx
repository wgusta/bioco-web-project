import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'

export default function WirPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="F-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h1>Wir</h1>
            <h2>Team & Hof</h2>
            <p>Profilkarten Team; Hof: Geisshof (Gebenstorf)</p>
          </section>

          <section id="F-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Mission/Leitbild</h2>
            <p>Werte, Solidarität, Gotti-System (Kurzinfo)</p>
          </section>

          <section id="F-03" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Geschichte (Text)</h2>
            <p>Gründung 2014; Entwicklung in Region Baden-Brugg; Standorte</p>
          </section>

          <section id="F-04" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Geschichte (Timeline)</h2>
            <p>Timeline (Jahre, Meilensteine, Fotos optional)</p>
          </section>

          <EventsBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}