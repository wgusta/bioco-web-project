'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { DepotMap } from '@/components/DepotMap'
import { GeisshofMap } from '@/components/GeisshofMap'

export default function StandortePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Standorte - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Standorte</h2>
            <p className="text-gray-800 mb-3 drop-shadow-md">Hier findest du alle Standorte, an denen du deinen wöchentlichen Gemüsekorb abholen kannst.</p>
            <p className="text-gray-800 mb-4 drop-shadow-md">
              <strong>Abholzeiten:</strong> Dienstag und Freitag, 17:00 - 19:00 Uhr
            </p>
            <DepotMap />
          </OrganicBentoBox>

          {/* Anfahrtsweg zum Geisshof - Beige */}
          <OrganicBentoBox type="beige" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Anfahrt zum Geisshof</h2>
            <p className="text-gray-800 mb-4 drop-shadow-md">Der Geisshof ist unser Betrieb in Gebenstorf, wo wir das Gemüse anbauen. Hier kannst du auch direkt vorbeikommen.</p>
            <GeisshofMap />
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
