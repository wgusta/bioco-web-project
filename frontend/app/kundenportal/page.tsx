import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsBanner } from '@/components/EventsBanner'

export default function KundenportalPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h1>Kundenportal</h1>

            <section id="I-01" className="wireframe-box">
              <h2>Gateway via 👤</h2>
              <ul>
                <li>Kachel: Mitglieder-Portal (extern)</li>
                <li>Kachel: Einsatzplanung (extern)</li>
              </ul>
            </section>

            <EventsBanner />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
