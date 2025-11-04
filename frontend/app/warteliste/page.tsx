import { WaitingListForm } from '@/components/forms/WaitingListForm'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function WaitingListPage() {
  return (
    <>
      <Header />
      <main className="wireframe-box main-content">
        <div className="wireframe-content">
          <div className="wireframe-box content">
            <h2>Warteliste</h2>
            <WaitingListForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
