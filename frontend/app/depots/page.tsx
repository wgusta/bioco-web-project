import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'

export default function DepotsPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Depots</h1>

            <section id="E-01" className="wireframe-box">
              <h2>Depots – Map & Liste</h2>
              <p>Karte Baden/Brugg/Wettingen/Windisch/Ennetbaden</p>
              <p>Adressliste + Zeiten (falls vorhanden)</p>
            </section>

            <EventsBanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
