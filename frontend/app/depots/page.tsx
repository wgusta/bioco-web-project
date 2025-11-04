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
              <h2>Depots – Abholorte</h2>
              <p>Unsere Mitglieder holen ihre wöchentlichen Gemüsekörbe in einem der folgenden Depots ab:</p>
              <ul>
                <li><strong>Baden</strong></li>
                <li><strong>Brugg</strong></li>
                <li><strong>Wettingen</strong></li>
                <li><strong>Windisch</strong></li>
                <li><strong>Ennetbaden</strong></li>
              </ul>
              <p>Bei der Anmeldung kannst du dein bevorzugtes Depot wählen. Die genauen Adressen und Abholzeiten erhältst du nach der Anmeldung.</p>
              <p className="dim">Karte und detaillierte Adressliste folgen in Phase 2</p>
            </section>

            <EventsBanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
