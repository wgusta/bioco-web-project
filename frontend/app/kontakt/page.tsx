'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { ContactForm } from '@/components/forms/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Kontakt Formular - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Kontakt</h2>
            <ContactForm />
          </OrganicBentoBox>
        </div>
      </div>
      <Footer />
    </>
  )
}
