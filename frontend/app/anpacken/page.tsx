'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { OrganicImage } from '@/components/OrganicImage'
import { EventsBanner } from '@/components/EventsBanner'

export default function AnpackenPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Was es braucht - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Was es braucht, damit wir gesundes Gemüse haben</h2>
            <div className="mb-4">
              <OrganicImage
                src="/images/anpacken/bioco_anpacken_einzel.JPG"
                alt="Einzelperson bei der Mitarbeit auf dem Geisshof"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 drop-shadow-md">Mitarbeit bei biocò</h3>
            <p className="text-gray-800 mb-4 drop-shadow-md">Jede(r) Mitglied bringt sich ein und unterstützt die Genossenschaft aktiv. Die Mitarbeit ist ein wichtiger Teil des CSA-Prinzips.</p>
          
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Umfang</h3>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Halb Gemüsekorb:</strong> 20 Stunden pro Jahr (5 Halbtage, alias "10 Rüebli")</li>
                <li><strong>Standard/Doppel Gemüsekorb:</strong> 40 Stunden pro Jahr</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tätigkeitsbereiche</h3>
              <p className="text-gray-800 mb-2">Du kannst dich in verschiedenen Bereichen einbringen:</p>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Feld/Anbau:</strong> Säen, Pflanzen, Jäten, Ernten, Unkraut bekämpfen</li>
                <li><strong>Logistik:</strong> Gemüse waschen, sortieren, packen, verteilen</li>
                <li><strong>Administration:</strong> Büroarbeit, Rechnungen, Kommunikation</li>
                <li><strong>Events/Organisation:</strong> Schnuppertage, Veranstaltungen, Gemeinschaftsanlässe</li>
                <li><strong>Andere:</strong> Nach Absprache kannst du auch andere Fähigkeiten einbringen</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planung</h3>
              <p className="text-gray-800 mb-2">Nach der Anmeldung erhältst du Zugang zum Intranet. Dort kannst du:</p>
              <ul className="space-y-2 text-gray-800">
                <li>Deine bevorzugten Tage angeben (Mo-Sa)</li>
                <li>Deine bevorzugten Zeiten wählen (morgens, nachmittags, abends)</li>
                <li>Tätigkeitsbereiche auswählen</li>
                <li>Arbeitseinsätze planen und buchen</li>
              </ul>
            </div>

            <div className="mt-6">
              <OrganicButton href="/mitmachen" variant="primary">
                Jetzt anmelden
              </OrganicButton>
            </div>
          </OrganicBentoBox>

          {/* Gruppen & Gemeinschaft - Beige */}
          <OrganicBentoBox type="beige" colSpan={12} rowSpan={2} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Gruppen & Gemeinschaft</h2>
            <div className="mb-4">
              <OrganicImage
                src="/images/anpacken/bioco_anpacken_gruppe.JPG"
                alt="Gruppe bei der Mitarbeit auf dem Geisshof"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
            <p className="text-gray-800 mb-4 drop-shadow-md">Bei biocò gibt es verschiedene Arbeitsgruppen und Gemeinschaftsaktivitäten, die das Herzstück unserer Genossenschaft bilden:</p>
            <ul className="space-y-3 text-gray-800">
              <li><strong>Stammtisch:</strong> Regelmäßige Treffen für Austausch und Gemeinschaft. Hier kommen Mitglieder zusammen, um sich über aktuelle Themen auszutauschen, Erfahrungen zu teilen und die Gemeinschaft zu stärken.</li>
              <li><strong>BG (Betriebsgruppe):</strong> Aktive Mitarbeit in der Betriebsorganisation. Die Betriebsgruppe koordiniert die strategischen Entscheidungen, plant die Anbauzyklen, organisiert die Logistik und sorgt für die reibungslose Abwicklung des täglichen Betriebs.</li>
              <li><strong>Elki:</strong> Familienaktivitäten und gemeinsame Anlässe. Die Elki-Gruppe organisiert speziell für Familien mit Kindern ausgerichtete Aktivitäten auf dem Hof.</li>
              <li><strong>Kräutergruppe:</strong> Spezialisiert auf Kräuter und Gewürze. Diese Gruppe widmet sich dem Anbau, der Pflege und der Verarbeitung von Kräutern und Gewürzen.</li>
            </ul>
            <p className="text-gray-800 mt-4 drop-shadow-md">Diese Gruppen ermöglichen es, sich nach eigenen Interessen und Fähigkeiten einzubringen und die Genossenschaft aktiv mitzugestalten.</p>
          </OrganicBentoBox>

          {/* Nächste Events - Carrot */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={1} className="md:col-span-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Nächste Events</h2>
            <EventsBanner />
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
