import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'
import Link from 'next/link'

export default function WirPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Wir</h1>

            <section id="F-01" className="wireframe-box">
              <h2>Team & Hof</h2>
              <p><strong>Hof:</strong> Geisshof, 5412 Gebenstorf</p>
              <p><strong>Betriebsleitung:</strong> Michael und Astrid Köhnken</p>
              <p>Der Geisshof liegt in der Region Baden-Brugg und ist seit 2014 der Heimatort von biocò. Hier wächst unser vielfältiges Demeter-Gemüse.</p>
            </section>

            <section id="F-02" className="wireframe-box">
              <h2>Unser Leitbild</h2>
              <p>Mit biocò wollen wir unsere Lebensmittelversorgung verstärkt selber in die Hand nehmen. Wir bauen geschmackvolles, vielseitiges Gemüse ökologisch, sozial und ökonomisch nachhaltig an.</p>
              
              <h3>Solidarische Landwirtschaft</h3>
              <p>Wir teilen Arbeit, Ertrag und Risiko und wirtschaften solidarisch, auf dem Hof selber und in Kooperation mit anderen Partnern.</p>
              
              <div id="solidarisch" className="wireframe-box" style={{ marginTop: '15px' }}>
                <h4>Was ist Solidarische Landwirtschaft?</h4>
                <p>Solidarische Landwirtschaft basiert auf der direkten Zusammenarbeit von ProduzentInnen und KonsumentInnen. Die KonsumentInnen bezahlen Betriebsbeiträge, die die vollen Produktionskosten decken. Dies ermöglicht eine Risikoteilung, entlastet die ProduzentInnen vom Preisdruck und sichert ihr Einkommen.</p>
                <p><strong>Kontinuität:</strong> Das Abo läuft jeweils ein ganzes Jahr, was der Anbauplanung entspricht.</p>
                <p><strong>Partizipation:</strong> Die Produktion wird von den KonsumentInnen mitgetragen. Sie beteiligen sich aktiv an der Entscheidung und Planung.</p>
              </div>
              
              <h3>Mitarbeit und ökologische Landwirtschaft</h3>
              <p>Wir fühlen uns verbunden mit dem Stück Erde auf dem Geisshof und entwickeln durch das Schaffen auf dem Feld einen Bezug zu allem, was dort wächst. Wir lernen, welche Pflege der Boden und die Pflanzen brauchen, um zu gedeihen.</p>
              
              <h3>Gemeinschaft</h3>
              <p>Auf dem Geisshof kann man die Natur geniessen und es lustig haben. biocò lebt durch das, was die Mitglieder beitragen. Jede(r) bringt sich entsprechend seiner/ihrer Talente und Möglichkeiten ein. Arbeitsgruppen und Initiativen Einzelner sind neben der Arbeit der Betriebsgruppe entscheidend für das Gelingen der Genossenschaft.</p>
              
              <h3>Netzwerk</h3>
              <p>biocò versteht sich als Experimentierfeld, in dem neue Wege des miteinander Schaffens entwickelt und ausprobiert werden. Wir bieten Raum für das Nachdenken über das gute Leben und wie wir es selber gestalten können. biocò ist in aktivem Austausch mit anderen Initiativen, welche sich für eine zukunftsfähige Gesellschaft und Wirtschaft einsetzen.</p>
            </section>

            <section id="F-03" className="wireframe-box">
              <h2>Geschichte</h2>
              <p>biocò wurde 2014 gegründet und hat sich seither kontinuierlich entwickelt. Die Genossenschaft hat mehrere Depots in der Region Baden-Brugg eingerichtet (Baden, Ennetbaden, Wettingen, Brugg, Windisch), um die wöchentliche Verteilung der Gemüsekörbe zu ermöglichen.</p>
            </section>

            <section id="F-04" className="wireframe-box">
              <h2>Geschichte (Timeline)</h2>
              <p>Timeline (Jahre, Meilensteine, Fotos optional)</p>
            </section>

            <EventsBanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
