import { ContactForm } from '@/components/forms/ContactForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h2>Kontakt</h2>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
