import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MembershipForm } from '@/components/forms/MembershipForm'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'

export default function AnmeldungPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={1} className="md:col-span-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 drop-shadow-lg">Anmeldung</h1>
            <MembershipForm />
          </OrganicBentoBox>
        </div>
      </div>
      <Footer />
    </>
  )
}
