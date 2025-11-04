import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function HofpostPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Hofpost</h1>

            <section id="G-01" className="wireframe-box">
              <h2>Hofpost Übersicht</h2>
              <p>Phase 2: Blog/News mit Karten-Grid; Einzelansichten</p>
            </section>

            <section id="G-02" className="wireframe-box">
              <h2>Nächste Events</h2>
              <p>Zentrale Eventliste (Quelle für Banner); Filter/Tags optional</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
