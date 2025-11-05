import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function IntranetPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Intranet</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Das Intranet von biocò ist der interne Bereich für alle Mitglieder der Genossenschaft. Hier findest du wichtige Dokumente, Informationen und Tools für die tägliche Arbeit mit biocò.</p>
              
              <h4 className="card-title">Was findest du im Intranet?</h4>
            <ul>
              <li><strong>Verteilplan</strong> – Dienstag und Freitag Abholpläne</li>
              <li><strong>Fahrspesen-Rückforderungsformular</strong> – Für Fahrspesen-Rückerstattungen</li>
              <li><strong>Interne Dokumente</strong> – Alle wichtigen Unterlagen</li>
              <li><strong>Mitgliederbereich</strong> – Persönliche Informationen und Einstellungen</li>
            </ul>

              <h4 className="card-title">Zugang zum Intranet</h4>
              <p className="card-text">Das Intranet ist nur für Mitglieder der Genossenschaft zugänglich. Du benötigst einen Zugang, um dich anzumelden.</p>
              
              <div className="button-group">
                <a 
                  href="https://intranet.bioco.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Zum Intranet →
                </a>
              </div>

              <h4 className="card-title">Fragen?</h4>
              <p className="card-text">Hast du Fragen zum Intranet oder benötigst du Hilfe beim Zugang? Dann kontaktiere uns unter <a href="mailto:info@bioco.ch">info@bioco.ch</a>.</p>
            </div>
          </section>

          <section className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Dokumente</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Hier findest du die wichtigsten Dokumente aus dem Intranet:</p>
            
            <div className="document-list">
              <div className="document-item">
                <h3>Verteilplan Dienstag und Freitag</h3>
                <p>Der aktuelle Verteilplan für die Gemüsekorb-Abholung.</p>
                <a 
                  href="https://bioco.ch/intranet-dokumente/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Verteilplan herunterladen (PDF)
                </a>
              </div>

              <div className="document-item">
                <h3>Fahrspesen Rückforderungsformular</h3>
                <p>Formular für die Rückforderung von Fahrspesen.</p>
                <a 
                  href="https://bioco.ch/intranet-dokumente/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Formular herunterladen (PDF)
                </a>
              </div>
            </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
