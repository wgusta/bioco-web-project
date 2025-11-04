import { VisitDayForm } from '@/components/forms/VisitDayForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function VisitDayPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h2>Tag der offenen Tür - Anmeldung</h2>
            <VisitDayForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
