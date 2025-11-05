import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AktuellesPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section id="G-01" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h1>Aktuelles</h1>
            <h2>Aktuelles Übersicht</h2>
            <p>Phase 2: Blog/News mit Karten-Grid; Einzelansichten</p>
          </section>

          <section id="G-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Nächste Events</h2>
            <p>Zentrale Eventliste (Quelle für Banner); Filter/Tags optional</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}