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
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <section id="B-02" className="wireframe-box">
              <h2>Galerie</h2>
              <p>Filter: Alles · Körbe · Feld · Portraits</p>
              <p>Grid: 2-Spalten mobil</p>
            </section>

            <section id="B-03" className="wireframe-box">
              <h2>Saisonkalender</h2>
              <p>Tabs Jan–Dez → Listen: Jetzt/Bald/Lagerware</p>
            </section>

            <section id="B-04" className="wireframe-box">
              <h2>Demeter-Qualität</h2>
              <p>„Warum Demeter?" – kurzer Text + Akkordeon</p>
            </section>

            <EventsBanner />
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
