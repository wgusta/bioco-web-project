import { ContactForm } from '@/components/forms/ContactForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          <section className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Kontakt</h3>
            </div>
            <div className="card-body">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}