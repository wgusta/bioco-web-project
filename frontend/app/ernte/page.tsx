import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { EventsBanner } from '@/components/EventsBanner'
import { CTA } from '@/components/CTA'

export default function ErntePage() {
  return (
    <>
      <Header />
      <Hero
        title="Unser Gemüse: Frisch, lokal, Demeter."
        subtitle="Eine Vielzahl von Biogemüse in Demeter-Qualität aus unserem Anbau auf dem Geisshof"
      />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <section id="B-02" className="wireframe-box">
              <h2>Galerie</h2>
              <p>Einblicke in unsere Ernte, die Arbeit auf dem Feld und unsere Gemeinschaft</p>
              <p className="dim">Filter: Alles · Körbe · Feld · Portraits</p>
              <p className="dim">Grid: 2-Spalten mobil</p>
            </section>

            <section id="B-03" className="wireframe-box">
              <h2>Rezepte als Serviervorschläge</h2>
              <p>Was kannst du mit deinem wöchentlichen Gemüsekorb alles zubereiten? Hier findest du Rezepte und Ideen für unsere saisonale Ernte.</p>
              <p className="dim">Rezepte werden regelmässig aktualisiert und passen sich der Saison an</p>
            </section>

            <section id="B-04" className="wireframe-box">
              <h2>Saisonkalender</h2>
              <p>Tabs Jan–Dez → Listen: Jetzt/Bald/Lagerware</p>
            </section>

            <section id="B-05" className="wireframe-box">
              <h2>Demeter-Qualität</h2>
              <p>Wir bauen unser Gemüse nach den strengen Demeter-Richtlinien an. Demeter ist der älteste Bio-Verband und steht für die höchsten Standards in der biologisch-dynamischen Landwirtschaft.</p>
              <p>Warum Demeter?</p>
              <ul>
                <li>Höchste Bio-Qualitätsstandards</li>
                <li>Biologisch-dynamische Anbaumethoden</li>
                <li>Nachhaltige und zukunftsfähige Landwirtschaft</li>
                <li>Geschmackvolles und nährstoffreiches Gemüse</li>
              </ul>
            </section>

            <EventsBanner />
            
            <section id="B-06" className="wireframe-box">
              <h2>Möchtest du uns kennenlernen?</h2>
              <CTA
                text="Anfragen"
                href="/kontakt"
                variant="primary"
              />
            </section>

            <CTA
              text="Jetzt Abo sichern"
              href="/mitmachen"
              variant="primary"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
