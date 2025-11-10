'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { OrganicImage } from '@/components/OrganicImage'
import { EventsBanner } from '@/components/EventsBanner'
import { PersonIcons } from '@/components/PersonIcons'
import Link from 'next/link'

export default function AbosPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Gemüse-Abos - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Gemüse-Abos</h2>
            <p className="text-gray-800 mb-4 drop-shadow-md">Das Gemüseabo läuft vom 1. Januar bis zum 31. Dezember. Ohne Kündigung verlängert sich das Gemüseabo jeweils um ein Kalenderjahr. Die Kündigungsfrist beträgt zwei Monate auf Ende eines Kalenderjahres.</p>
            
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-900">
                    <th className="text-left p-2 font-semibold text-gray-900">Gemüsekorb</th>
                    <th className="text-left p-2 font-semibold text-gray-900">Personen</th>
                    <th className="text-left p-2 font-semibold text-gray-900">Jahrespreis</th>
                    <th className="text-left p-2 font-semibold text-gray-900">Anteilsscheine</th>
                    <th className="text-left p-2 font-semibold text-gray-900">Mitarbeit/Jahr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="p-2">
                      <strong>Halb</strong>
                      <div className="text-xs text-gray-600 mt-1">1 Anteilsschein</div>
                    </td>
                    <td className="p-2"><PersonIcons count={1} /></td>
                    <td className="p-2">CHF 750.-</td>
                    <td className="p-2">CHF 250.-</td>
                    <td className="p-2">20 Stunden<br /><span className="text-xs text-gray-600">oder 10 Halbtage</span></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-2">
                      <strong>Standard</strong>
                      <div className="text-xs text-gray-600 mt-1">2 Anteilsscheine</div>
                    </td>
                    <td className="p-2"><PersonIcons count={2} /></td>
                    <td className="p-2">CHF 1'280.-</td>
                    <td className="p-2">CHF 500.-</td>
                    <td className="p-2">40 Stunden<br /><span className="text-xs text-gray-600">oder 20 Halbtage</span></td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="p-2">
                      <strong>Doppel</strong>
                      <div className="text-xs text-gray-600 mt-1">4 Anteilsscheine</div>
                    </td>
                    <td className="p-2"><PersonIcons count={4} /></td>
                    <td className="p-2">CHF 2'350.-</td>
                    <td className="p-2">CHF 1'000.-</td>
                    <td className="p-2">80 Stunden<br /><span className="text-xs text-gray-600">oder 40 Halbtage</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mb-4 p-4 bg-white bg-opacity-60 rounded">
              <p className="text-sm text-gray-800"><strong>Anteilsscheine:</strong> Jeder Anteilsschein kostet CHF 250.- und ist eine Bedingung für den Bezug eines Gemüsekorbes. Du kannst zusätzliche Anteilsscheine erwerben, um die Genossenschaft stärker zu unterstützen.</p>
            </div>

            <div className="mb-4 p-4 bg-white bg-opacity-60 rounded">
              <p className="text-sm text-gray-800"><strong>💡 Tipp:</strong> Geteilte Körbe sparen CHF 110 pro Jahr und reduzieren Logistikaufwand. Wir empfehlen, Körbe zu teilen!</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Was ist im Gemüsekorb?</h3>
              <ul className="space-y-2 text-gray-800">
                <li>Wöchentlicher Gemüsekorb mit saisonalem Gemüse</li>
                <li>Demeter-Qualität – höchste Bio-Standards</li>
                <li>Frisch vom Geisshof in Gebenstorf</li>
                <li>Abholung in einem der <Link href="/depots" className="text-gray-900 hover:underline font-semibold">Standorte</Link> (Dienstag oder Freitag, 17:00-19:00 Uhr)</li>
              </ul>
              <p className="mt-2"><Link href="/ernte" className="text-gray-900 hover:underline font-semibold">Mehr über unsere Ernte erfahren →</Link></p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zahlungsweise</h3>
              <p className="text-gray-800 mb-2">Die erste Rechnung wird per 31. Januar fällig. Du kannst wählen:</p>
              <ul className="space-y-2 text-gray-800">
                <li><strong>Quartalsweise:</strong> Du bezahlst vierteljährlich</li>
                <li><strong>Ganzes Jahr:</strong> Du bezahlst den gesamten Jahresbeitrag einmalig</li>
              </ul>
            </div>

            <div className="mt-6">
              <OrganicButton href="/mitmachen" variant="primary">
                Jetzt Abo bestellen
              </OrganicButton>
            </div>
          </OrganicBentoBox>

          {/* Probe-Abo - Violet */}
          <OrganicBentoBox type="violet" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Probe-Abo</h2>
            <div className="mb-3">
              <OrganicImage
                src="/images/abos/bioco_probeabo.JPG"
                alt="Probe-Abo bei biocò"
                width={800}
                height={600}
                className="w-full"
              />
            </div>
            <p className="text-gray-800 mb-3 drop-shadow-md">Möchtest du biocò erst einmal kennenlernen? Teste unser Gemüseabo für 3 Monate.</p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Details:</p>
            <ul className="space-y-1 text-sm text-gray-800 mb-4">
              <li>3 Monate Gemüsekorb</li>
              <li>Proportionaler Anteil am Jahrespreis</li>
              <li>Flexible Umstellung auf Jahresabo möglich</li>
            </ul>
            <OrganicButton href="/mitmachen" variant="secondary" className="text-sm">
              Probe-Abo testen
            </OrganicButton>
          </OrganicBentoBox>

          {/* Anteilsscheine ohne Gemüsekorb - Beige */}
          <OrganicBentoBox type="beige" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Anteilsscheine ohne Gemüsekorb</h2>
            <p className="text-gray-800 mb-3 drop-shadow-md">Du möchtest biocò unterstützen, ohne ein Gemüseabo zu beziehen? Das ist möglich!</p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Vorteile:</p>
            <ul className="space-y-1 text-sm text-gray-800 mb-4">
              <li>Unterstützung der Genossenschaft</li>
              <li>Vorrang auf der Warteliste für einen Gemüsekorb</li>
              <li>Mitspracherecht in der Genossenschaft</li>
            </ul>
            <p className="text-sm text-gray-800 mb-4"><strong>Kosten:</strong> CHF 250.- pro Anteilsschein</p>
            <OrganicButton href="/mitmachen" variant="secondary" className="text-sm">
              Anteilsscheine erwerben
            </OrganicButton>
          </OrganicBentoBox>

          {/* Nächste Events - Carrot */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Nächste Events</h2>
            <EventsBanner />
          </OrganicBentoBox>

          {/* Zusatz-Abos - Yellow */}
          <OrganicBentoBox type="yellow" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Zusatz-Abos</h2>
            <p className="text-gray-800 mb-2 drop-shadow-md">In Planung: Partnerangebote wie Eier, Brot, Tofu und weitere regionale Produkte.</p>
            <p className="text-sm text-gray-800">Diese werden in Zukunft zusätzlich zum Gemüsekorb angeboten.</p>
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
