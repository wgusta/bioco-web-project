import { SubscribeForm } from '@/components/forms/SubscribeForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h2>Newsletter abonnieren</h2>
            <SubscribeForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
