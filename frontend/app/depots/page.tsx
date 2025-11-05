import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'

export default function DepotsPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="E-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h1>Depots</h1>
            <h2>Depots – Map & Liste</h2>
            <p>Karte Baden/Brugg/Wettingen/Windisch/Ennetbaden</p>
            <p>Adressliste + Zeiten (falls vorhanden)</p>
          </section>

          <EventsBanner />
        </div>
      </main>
      <Footer />
    </>
  )
}