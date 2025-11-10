'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { OrganicImage } from '@/components/OrganicImage'
import { Gallery } from '@/components/Gallery'
import { Saisonkalender } from '@/components/Saisonkalender'
import { getEventItems } from '@/components/AktuellesData'
import { AktuellesItemComponent } from '@/components/AktuellesItem'
import Link from 'next/link'

export default function ErntePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Was wir anbauen - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Was wir anbauen</h2>
            <p className="text-gray-800 mb-4 drop-shadow-md">Einblicke in unsere Ernte, den Anbau und die Gemeinschaft</p>
            <Gallery />
          </OrganicBentoBox>

          {/* Nächste Events - Carrot */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 drop-shadow-lg">Nächste Events</h2>
            <div className="space-y-2">
              {getEventItems().slice(0, 3).map((item, index) => (
                <div key={index} className="mb-2">
                  <AktuellesItemComponent item={item} variant="event" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <OrganicButton href="/aktuelles" variant="primary" className="text-sm">
                Alle Events ansehen
              </OrganicButton>
            </div>
          </OrganicBentoBox>

          {/* Demeter-Qualität - Beet */}
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Demeter-Qualität</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 drop-shadow-md">Warum Demeter?</h3>
            <p className="text-gray-800 mb-4 drop-shadow-md">
              Demeter ist die höchste Qualitätsstufe im biologischen Landbau. Als Demeter-zertifizierter Betrieb 
              gehen wir über die Anforderungen von Bio Suisse hinaus und arbeiten nach den strengsten 
              biologisch-dynamischen Richtlinien.
            </p>
            
            <div className="space-y-3 mb-4">
              <details className="mb-2">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-1">Biologisch-dynamische Landwirtschaft</summary>
                <p className="text-sm text-gray-800 mt-2">
                  Die biologisch-dynamische Landwirtschaft betrachtet den Hof als lebendigen Organismus. 
                  Wir arbeiten mit speziellen Präparaten, die die Bodenfruchtbarkeit und Pflanzengesundheit fördern. 
                  Der Mond- und Planetenrhythmus wird in die Anbauplanung einbezogen.
                </p>
              </details>
              
              <details className="mb-2">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-1">Kein Einsatz von synthetischen Mitteln</summary>
                <p className="text-sm text-gray-800 mt-2">
                  Wir verzichten vollständig auf synthetische Dünger, Pestizide und Herbizide. Stattdessen 
                  setzen wir auf natürliche Methoden zur Bodenpflege, Schädlingsbekämpfung und 
                  Pflanzenstärkung.
                </p>
              </details>
              
              <details className="mb-2">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-1">Kreislaufwirtschaft</summary>
                <p className="text-sm text-gray-800 mt-2">
                  Auf dem Geisshof betreiben wir eine geschlossene Kreislaufwirtschaft. Kompost, 
                  Gründüngung und Fruchtfolgen sorgen für gesunde Böden und nachhaltige Erträge.
                </p>
              </details>
              
              <details className="mb-2">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-1">Biodiversität</summary>
                <p className="text-sm text-gray-800 mt-2">
                  Wir fördern die Artenvielfalt durch Hecken, Blumenstreifen und vielfältige Fruchtfolgen. 
                  Dies schafft Lebensraum für Nützlinge und trägt zu einem gesunden Ökosystem bei.
                </p>
              </details>
            </div>

            <div className="mt-4">
              <a 
                href="https://www.demeter.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline font-semibold"
              >
                Mehr über Demeter erfahren →
              </a>
            </div>
          </OrganicBentoBox>

          {/* Saisonkalender - Yellow */}
          <OrganicBentoBox type="yellow" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Saisonkalender</h2>
            <p className="text-gray-800 mb-4 drop-shadow-md">Wann ist welches Gemüse verfügbar? Entdecke unsere saisonale Vielfalt.</p>
            <Saisonkalender />
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
