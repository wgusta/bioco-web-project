'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { getAktuellesItems, getEventItems } from '@/components/AktuellesData'
import { AktuellesItemComponent } from '@/components/AktuellesItem'

export default function AktuellesPage() {
  const aktuellesItems = getAktuellesItems()
  const eventItems = getEventItems()

  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Aktuelles - Yellow */}
          <OrganicBentoBox type="yellow" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Aktuelles</h2>
            <div className="space-y-3">
              {aktuellesItems.map((item, index) => (
                <div key={index}>
                  <AktuellesItemComponent item={item} variant="aktuelles" />
                </div>
              ))}
            </div>
          </OrganicBentoBox>

          {/* Nächste Events - Carrot */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Nächste Events</h2>
            <div className="space-y-3">
              {eventItems.map((item, index) => (
                <div key={index}>
                  <AktuellesItemComponent item={item} variant="event" />
                </div>
              ))}
            </div>
          </OrganicBentoBox>

          {/* Möchtest du uns kennenlernen - Beet */}
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={1} className="md:col-span-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 drop-shadow-lg">Möchtest du uns kennenlernen?</h2>
                <p className="text-gray-800 drop-shadow-md">
                  Es können viele Fragen auftauchen. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via Kontaktformular bei uns melden.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <OrganicButton href="/kontakt" variant="primary">
                  Nimm Kontakt auf
                </OrganicButton>
                <OrganicButton href="/depots" variant="secondary">
                  Zu uns finden
                </OrganicButton>
              </div>
            </div>
          </OrganicBentoBox>
        </div>
      </div>
      <Footer />
    </>
  )
}
