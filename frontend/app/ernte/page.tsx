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
        subtitle="Vielfalt & Qualität"
      />
      <main className="main-content">
        <div className="bento-grid">
          <section id="B-02" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Galerie</h2>
            <p>Filter: Alles · Körbe · Feld · Portraits</p>
            <p>Grid: 2-Spalten mobil</p>
          </section>

          <section id="B-03" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Rezepte als Serviervorschläge</h2>
            <p>Rezepte und Ideen für unsere Ernte</p>
          </section>

          <section id="B-04" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Saisonkalender</h2>
            <p>Tabs Jan–Dez → Listen: Jetzt/Bald/Lagerware</p>
          </section>

          <section id="B-05" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Demeter-Qualität</h2>
            <p>„Warum Demeter?" – kurzer Text + Akkordeon</p>
          </section>

          <EventsBanner />
          
          <section id="B-06" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Möchtest du uns kennenlernen?</h2>
            <CTA
              text="Anfragen"
              href="/kontakt"
              variant="primary"
            />
          </section>

          <section className="bento-card">
            <div className="plant-pattern"></div>
            <CTA
              text="Jetzt Abo sichern"
              href="/mitmachen"
              variant="primary"
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}