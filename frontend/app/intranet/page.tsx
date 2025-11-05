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
            <h1>Intranet</h1>
            <p>Das Intranet von biocò ist der interne Bereich für alle Mitglieder der Genossenschaft. Hier findest du wichtige Dokumente, Informationen und Tools für die tägliche Arbeit mit biocò.</p>
            
            <h2>Was findest du im Intranet?</h2>
            <ul>
              <li><strong>Verteilplan</strong> – Dienstag und Freitag Abholpläne</li>
              <li><strong>Fahrspesen-Rückforderungsformular</strong> – Für Fahrspesen-Rückerstattungen</li>
              <li><strong>Interne Dokumente</strong> – Alle wichtigen Unterlagen</li>
              <li><strong>Mitgliederbereich</strong> – Persönliche Informationen und Einstellungen</li>
            </ul>

            <h2>Zugang zum Intranet</h2>
            <p>Das Intranet ist nur für Mitglieder der Genossenschaft zugänglich. Du benötigst einen Zugang, um dich anzumelden.</p>
            
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

            <h2>Fragen?</h2>
            <p>Hast du Fragen zum Intranet oder benötigst du Hilfe beim Zugang? Dann kontaktiere uns unter <a href="mailto:info@bioco.ch">info@bioco.ch</a>.</p>
          </section>

          <section className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Dokumente</h2>
            <p>Hier findest du die wichtigsten Dokumente aus dem Intranet:</p>
            
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
