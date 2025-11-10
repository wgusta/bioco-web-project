'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { OrganicNumberBadge } from '@/components/OrganicNumberBadge'
import { EventsBanner } from '@/components/EventsBanner'
import { PricingCalculator } from '@/components/PricingCalculator'
import Link from 'next/link'

export default function MitmachenPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          {/* Es gibt vier Möglichkeiten - Apple */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Es gibt bei biocò vier Möglichkeiten der Partizipation</h2>
            <PricingCalculator />
          </OrganicBentoBox>

          {/* Zuerst testen - Violet */}
          <OrganicBentoBox type="violet" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Zuerst testen? (Probeabo)</h2>
            <p className="text-gray-800 mb-3 drop-shadow-md">Besuche einen unserer <Link href="/aktuelles" className="text-gray-900 hover:underline font-semibold">Schnuppertage</Link> oder teste unser Probe-Abo.</p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Bedingungen für das Probeabo:</p>
            <ul className="space-y-1 text-sm text-gray-800 mb-4">
              <li>3 Monate lang</li>
              <li>Für CHF 300.-</li>
              <li>3 Einsätze</li>
            </ul>
          </OrganicBentoBox>

          {/* Nächste Schritte - Beige */}
          <OrganicBentoBox type="beige" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Nächste Schritte nach der Anmeldung</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <OrganicNumberBadge number={1} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bestätigungs-E-Mail</h3>
                  <p className="text-sm text-gray-800">Du erhältst eine E-Mail mit Bestätigungslink (Double Opt-In). Bitte bestätige deine Anmeldung.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <OrganicNumberBadge number={2} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Rechnung</h3>
                  <p className="text-sm text-gray-800">Nach Bestätigung erhältst du eine Rechnung per 31. Januar. Du kannst quartalsweise oder das ganze Jahr bezahlen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <OrganicNumberBadge number={3} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Start</h3>
                  <p className="text-sm text-gray-800">Du erhältst Zugang zum Intranet und kannst deine Arbeitseinsätze planen. Ab Januar startet die Gemüseverteilung!</p>
                </div>
              </div>
            </div>
          </OrganicBentoBox>

          {/* Nächste Events - Carrot */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Nächste Events</h2>
            <EventsBanner />
          </OrganicBentoBox>

          {/* FAQ - Beet */}
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Häufige Fragen (FAQ)</h2>
            <div className="space-y-4">
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Was passiert, wenn ich nicht genug Gemüse bekomme?</summary>
                <p className="text-sm text-gray-800 mt-2">Wir teilen Arbeit und Ertrag. Bei Ernteausfall aufgrund von Wetter oder anderen Umständen kann es vorkommen, dass die Ernte kleiner ausfällt. Dies ist Teil des CSA-Prinzips.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Kann ich das Abo pausieren?</summary>
                <p className="text-sm text-gray-800 mt-2">Das Abo läuft jährlich vom 1. Januar bis 31. Dezember. Eine Pausierung ist nicht möglich, aber du kannst mit einer Frist von 2 Monaten zum Jahresende kündigen.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Was, wenn ich umziehe?</summary>
                <p className="text-sm text-gray-800 mt-2">Bei Umzug kannst du dein Depot wechseln. Kontaktiere uns einfach unter <a href="mailto:info@bioco.ch" className="text-gray-900 hover:underline font-semibold">info@bioco.ch</a> oder nutze das <Link href="/kontakt" className="text-gray-900 hover:underline font-semibold">Kontaktformular</Link>.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Wie funktioniert die Kündigung?</summary>
                <p className="text-sm text-gray-800 mt-2">Die Kündigung muss spätestens <strong>2 Monate vor Ende des Kalenderjahres</strong> (also bis 31. Oktober) erfolgen. Schicke uns eine E-Mail oder nutze das Kontaktformular.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Was ist der Unterschied zwischen Anteilsscheinen und Abo?</summary>
                <p className="text-sm text-gray-800 mt-2"><strong>Anteilsscheine</strong> sind Genossenschaftsanteile (CHF 250 pro Anteil), die für die Mitgliedschaft benötigt werden. Das <strong>Gemüseabo</strong> ist der Jahresbeitrag für den wöchentlichen Gemüsekorb. Beide sind für ein Gemüseabo nötig.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Kann ich mehrere Anteilsscheine kaufen?</summary>
                <p className="text-sm text-gray-800 mt-2">Ja! Du kannst zusätzliche Anteilsscheine erwerben, auch ohne Gemüsekorb.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Wie plane ich meine Arbeitseinsätze?</summary>
                <p className="text-sm text-gray-800 mt-2">Nach der Anmeldung erhältst du Zugang zum Intranet. Dort kannst du deine bevorzugten Tage, Zeiten und Tätigkeitsbereiche angeben und Arbeitseinsätze planen.</p>
              </details>
              <details className="mb-3">
                <summary className="font-semibold text-gray-900 cursor-pointer mb-2">Was ist ein Probe-Abo?</summary>
                <p className="text-sm text-gray-800 mt-2">Ein Probe-Abo läuft über 3 Monate und ermöglicht dir, biocò kennenzulernen. Du zahlst den proportionalen Anteil am Jahrespreis. Eine Umstellung auf ein Jahresabo ist jederzeit möglich.</p>
              </details>
            </div>
          </OrganicBentoBox>

          {/* Warteliste - Yellow */}
          <OrganicBentoBox type="yellow" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4">
            <h2 className="text-xl font-bold text-gray-900 mb-3 drop-shadow-lg">Warteliste</h2>
            <p className="text-gray-800 mb-3 drop-shadow-md">Wenn alle Gemüsekörbe vergeben sind, kannst du dich auf die Warteliste setzen lassen. Du erhältst Vorrang, wenn ein Platz frei wird.</p>
            <p className="text-sm text-gray-800 mb-4">Genossenschafter/innen mit Anteilsscheinen (auch ohne Abo) haben Vorrang auf der Warteliste.</p>
            <OrganicButton href="/warteliste" variant="beet" className="text-sm">
              Auf Warteliste setzen
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
                <OrganicButton href="/kontakt" variant="beet">
                  Nimm Kontakt auf
                </OrganicButton>
                <OrganicButton href="/depots" variant="beet">
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
