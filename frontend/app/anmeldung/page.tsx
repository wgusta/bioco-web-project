import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MembershipForm } from '@/components/forms/MembershipForm'

export default function AnmeldungPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section className="bento-card bento-card-fullwidth">
            <div className="plant-pattern"></div>
            <h1>Anmeldung</h1>
            <MembershipForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
