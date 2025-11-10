'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { OrganicImage } from '@/components/OrganicImage'
import { OrganicNumberBadge } from '@/components/OrganicNumberBadge'
import { getEventItems } from '@/components/AktuellesData'
import { AktuellesItemComponent } from '@/components/AktuellesItem'
import Image from 'next/image'
import Link from 'next/link'

export default function WirPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Wir - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Wir</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 drop-shadow-md">Team & Hof</h3>
            <p className="text-gray-800 mb-4 drop-shadow-md">biocò ist eine Gemeinschaft von engagierten Menschen, die gemeinsam für frisches, regionales Demeter-Gemüse sorgen.</p>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white bg-opacity-60 rounded">
                <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">Foto</div>
                <h3 className="font-semibold text-gray-900 mb-2">Betriebsgruppe (BG)</h3>
                <p className="text-sm text-gray-800">Die Betriebsgruppe koordiniert den Anbau, die Logistik und die Organisation der Genossenschaft.</p>
              </div>
              
              <div className="p-4 bg-white bg-opacity-60 rounded">
                <div className="grid grid-cols-2 gap-2 h-32 mb-3">
                  <Image
                    src="/images/team/bioco_hofteam_christian.JPG"
                    alt="Christian vom Hofteam"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded"
                  />
                  <Image
                    src="/images/team/hofteam_matthias.JPG"
                    alt="Matthias vom Hofteam"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Gärtnerteam</h3>
                <p className="text-sm text-gray-800">Unser erfahrenes Gärtnerteam sorgt für die Anbauplanung und die tägliche Feldarbeit auf dem Geisshof.</p>
              </div>
              
              <div className="p-4 bg-white bg-opacity-60 rounded">
                <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-500">Foto</div>
                <h3 className="font-semibold text-gray-900 mb-2">Alle Mitglieder</h3>
                <p className="text-sm text-gray-800">Jede(r) Genossenschafter/in bringt sich ein – ob bei der Feldarbeit, in der Logistik oder bei Events.</p>
              </div>
            </div>
          </OrganicBentoBox>

          {/* Nächste Events - Carrot */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Nächste Events</h2>
            <div className="space-y-2">
              {getEventItems().slice(0, 3).map((item, index) => (
                <div key={index}>
                  <AktuellesItemComponent item={item} variant="event" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <OrganicButton href="/aktuelles" variant="primary" className="text-sm">
                Alle Events ansehen
              </OrganicButton>
            </div>
          </OrganicBentoBox>

          {/* Der Geisshof - Beige */}
          <OrganicBentoBox type="beige" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Der Geisshof</h2>
            <p className="text-gray-800 mb-4 drop-shadow-md">
              Der Geisshof in Gebenstorf ist seit 2014 der Ort, an dem biocò Gemüse anbaut. 
              Hier finden die Feldarbeit, die Gemüseaufbereitung und viele gemeinsame Anlässe statt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <OrganicImage
                src="/images/hof/bioco_hof_luftaufnahme_grosses-feld.JPG"
                alt="Luftaufnahme des grossen Feldes auf dem Geisshof"
                width={800}
                height={600}
                className="w-full"
              />
              <OrganicImage
                src="/images/hof/bioco_hof_luftaufnahme-kleines-feld.JPG"
                alt="Luftaufnahme des kleinen Feldes auf dem Geisshof"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
            
            <div className="mt-4">
              <Link href="/depots" className="text-gray-900 hover:underline font-semibold">
                Anfahrtsweg zum Geisshof →
              </Link>
            </div>
          </OrganicBentoBox>

          {/* Mission & Leitbild - Beet */}
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Mission & Leitbild</h2>
            
            <div className="space-y-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Solidarität</h3>
                <p className="text-gray-800">
                  Wir teilen Arbeit und Ertrag. Solidarische Landwirtschaft bedeutet, 
                  dass Produzentinnen und Konsumentinnen zusammenarbeiten und füreinander einstehen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Nachhaltigkeit</h3>
                <p className="text-gray-800">
                  Wir arbeiten nach biologisch-dynamischen Prinzipien (Demeter) und fördern 
                  Biodiversität, Kreislaufwirtschaft und gesunde Böden.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gemeinschaft</h3>
                <p className="text-gray-800">
                  biocò lebt von der Gemeinschaft. Jede(r) bringt sich ein, lernt voneinander und 
                  gestaltet die Genossenschaft aktiv mit.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regionalität</h3>
                <p className="text-gray-800">
                  Unser Gemüse wächst direkt in der Region Baden-Brugg. Kurze Wege, frische Ernte, 
                  lokale Verbundenheit.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gotti-System</h3>
              <p className="text-gray-800">
                Neumitglieder werden von einem "Gotti" oder "Götti" (Paten) begleitet. Dieses System 
                hilft neuen Mitgliedern, sich in der Genossenschaft zurechtzufinden und zeigt ihnen 
                die Abläufe und Möglichkeiten der Mitarbeit.
              </p>
            </div>
          </OrganicBentoBox>

          {/* Geschichte - Yellow */}
          <OrganicBentoBox type="yellow" colSpan={12} rowSpan={1} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Geschichte</h2>
            <p className="text-gray-800 mb-3 drop-shadow-md">
              Die Gemüsegenossenschaft biocò wurde 2014 gegründet. Aus einer kleinen Gruppe 
              engagierter Menschen wurde eine lebendige Gemeinschaft mit über 100 Mitgliedern.
            </p>
            <p className="text-gray-800 mb-3 drop-shadow-md">
              Gestartet wurde auf dem Geisshof in Gebenstorf, wo wir bis heute unser Gemüse anbauen. 
              Über die Jahre haben wir die Anbaufläche erweitert, neue Standorte (Depots) für die 
              Gemüseabholung geschaffen und die Strukturen der Genossenschaft weiterentwickelt.
            </p>
            <p className="text-gray-800 drop-shadow-md">
              Heute versorgen wir Mitglieder in der Region Baden-Brugg wöchentlich mit frischem, 
              saisonalem Demeter-Gemüse und leben gemeinsam die Prinzipien der Solidarischen Landwirtschaft.
            </p>
          </OrganicBentoBox>

          {/* Timeline - Violet */}
          <OrganicBentoBox type="violet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 drop-shadow-lg">Timeline</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="font-bold text-gray-900">2014</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Gründung</h3>
                  <p className="text-sm text-gray-800">biocò wird als Gemüsegenossenschaft gegründet und startet den Anbau auf dem Geisshof.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="font-bold text-gray-900">2015</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Erste Erweiterung</h3>
                  <p className="text-sm text-gray-800">Die Anzahl der Mitglieder wächst, erste Depots werden eingerichtet.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="font-bold text-gray-900">2016-2018</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Strukturelle Entwicklung</h3>
                  <p className="text-sm text-gray-800">Betriebsgruppe wird etabliert, Strukturen werden professionalisiert, neue Standorte entstehen.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="font-bold text-gray-900">2019-2023</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Wachstum & Konsolidierung</h3>
                  <p className="text-sm text-gray-800">Weiteres Wachstum der Mitgliederzahl, Optimierung der Anbauplanung und Logistik.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="font-bold text-gray-900">2024</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Neue Website</h3>
                  <p className="text-sm text-gray-800">Launch der neuen Website mit modernem Design und verbesserter Benutzerführung.</p>
                </div>
              </div>
            </div>
          </OrganicBentoBox>

          {/* Mitmachen - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={1} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Mitmachen?</h2>
            <p className="text-gray-800 mb-4 drop-shadow-md">Werde Teil unserer Gemeinschaft und unterstütze die solidarische Landwirtschaft.</p>
            <OrganicButton href="/mitmachen" variant="primary">
              Jetzt Mitglied werden
            </OrganicButton>
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
