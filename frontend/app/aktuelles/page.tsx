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
            <div className="card-header">
              <h3>Aktuelles</h3>
              <div className="card-header-divider"></div>
              <h4 className="card-title">Aktuelles Übersicht</h4>
            </div>
            <div className="card-body">
              <p className="card-text">Phase 2: Blog/News mit Karten-Grid; Einzelansichten</p>
            </div>
          </section>

          <section id="G-02" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Nächste Events</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Zentrale Eventliste (Quelle für Banner); Filter/Tags optional</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}