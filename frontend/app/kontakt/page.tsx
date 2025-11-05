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
            <h1>Kontakt</h1>
            <ContactForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}