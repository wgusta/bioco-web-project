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
            <h1>Kontakt</h1>
            
            <section className="wireframe-box">
              <h2>Kontaktinformationen</h2>
              <p><strong>E-Mail:</strong> <a href="mailto:info@bioco.ch">info@bioco.ch</a></p>
              
              <h3>Postadresse</h3>
              <p>
                Gemüsegenossenschaft biocò<br />
                c/o Anna Zehnder<br />
                Allmendstrasse 39b<br />
                CH-5400 Baden
              </p>
              
              <h3>Hofadresse</h3>
              <p>
                Michael und Astrid Köhnken<br />
                Geisshof<br />
                5412 Gebenstorf
              </p>
            </section>
            
            <section className="wireframe-box">
              <h2>Kontaktformular</h2>
              <p>Hast du Fragen oder möchtest du mehr über biocò erfahren? Nutze das Kontaktformular oder schreibe uns direkt eine E-Mail.</p>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
