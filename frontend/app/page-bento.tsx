'use client'

import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeBento() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Container */}
      <div className="bento-grid-container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Large Welcome Card - Apple */}
        <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Willkommen bei biocò</h1>
            <p className="text-xl md:text-2xl text-white/95 mb-6 drop-shadow-md">
              Frisches Demeter-Gemüse – fast jede Woche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/mitmachen"
                className="inline-block px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Jetzt Mitglied werden
              </Link>
              <Link
                href="/mitmachen#testen"
                className="inline-block px-6 py-3 bg-white/20 text-white border-2 border-white rounded-lg font-semibold hover:bg-white/30 transition-colors text-center"
              >
                Zuerst testen?
              </Link>
            </div>
          </div>
        </OrganicBentoBox>

        {/* Saisonal & Demeter - Carrot */}
        <OrganicBentoBox type="carrot" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Das ist drin: Saisonal & Demeter</h2>
          <p className="text-white/95 mb-4 drop-shadow-md">
            Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.
          </p>
          <ul className="space-y-2 text-white/90 mb-6 text-left drop-shadow-sm">
            <li>• Wöchentlicher Gemüsekorb</li>
            <li>• Saisonalität – das Gemüse der Jahreszeit</li>
            <li>• Demeter-Qualität – höchste Bio-Standards</li>
          </ul>
          <Link
            href="/ernte"
            className="inline-block px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Ernte entdecken
          </Link>
        </OrganicBentoBox>

        {/* Gemeinschaft - Beet */}
        <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Gemeinschaft & Solidarität</h2>
          <div className="mb-4">
            <Image
              src="/images/gemeinschaft/bioco_gemeinschaft.JPG"
              alt="Gemeinschaft bei biocò"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <p className="text-white/95 mb-4 drop-shadow-md">
            biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.
          </p>
          <ul className="space-y-2 text-white/90 text-left drop-shadow-sm">
            <li>• <strong>Mitarbeit</strong> – <Link href="/anpacken" className="text-white hover:underline font-semibold">Anpacken auf dem Feld</Link></li>
            <li>• <strong>Transparenz</strong> – Solidarische Landwirtschaft (CSA)</li>
            <li>• <strong>Gemeinschaft</strong> – Jede(r) bringt sich ein</li>
            <li>• <strong>Lokal/Region</strong> – <Link href="/wir" className="text-white hover:underline font-semibold">Hof: Geisshof</Link></li>
          </ul>
        </OrganicBentoBox>

        {/* Aktuelles - Carrot */}
        <OrganicBentoBox type="carrot" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Aktuelles</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <h3 className="font-semibold text-white mb-2">Neuigkeiten vom Hof</h3>
              <p className="text-sm text-white/90">Aktuelle Informationen und Updates</p>
            </div>
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <h3 className="font-semibold text-white mb-2">Saisonale Highlights</h3>
              <p className="text-sm text-white/90">Was gerade wächst und geerntet wird</p>
            </div>
          </div>
          <Link
            href="/aktuelles"
            className="inline-block mt-4 px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full text-center shadow-lg"
          >
            Alle Aktuelles ansehen
          </Link>
        </OrganicBentoBox>

        {/* Events - Apple */}
        <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Nächste Events</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <h3 className="font-semibold text-white mb-2">Schnuppertag</h3>
              <p className="text-sm text-white/90">Lerne uns und den Hof kennen</p>
            </div>
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <h3 className="font-semibold text-white mb-2">Erntefest</h3>
              <p className="text-sm text-white/90">Gemeinsam feiern und geniessen</p>
            </div>
          </div>
          <Link
            href="/aktuelles"
            className="inline-block mt-4 px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full text-center shadow-lg"
          >
            Alle Events ansehen
          </Link>
        </OrganicBentoBox>

        {/* Wie funktioniert's - Beet */}
        <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
          <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Wie funktioniert's?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white text-red-900 rounded-full flex items-center justify-center font-bold shadow-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Anmelden</h3>
                <p className="text-sm text-white/90">Entscheide dich für ein <Link href="/abos" className="text-white hover:underline font-semibold">Abo</Link> oder teste mit einem <Link href="/mitmachen" className="text-white hover:underline font-semibold">Schnupperabo</Link></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white text-red-900 rounded-full flex items-center justify-center font-bold shadow-lg">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Rechnung bezahlen</h3>
                <p className="text-sm text-white/90">Du erhältst eine Rechnung und bezahlst den Beitrag</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white text-red-900 rounded-full flex items-center justify-center font-bold shadow-lg">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Arbeitseinsätze planen</h3>
                <p className="text-sm text-white/90">Organisiere deine <Link href="/anpacken" className="text-white hover:underline font-semibold">Mitarbeit</Link></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white text-red-900 rounded-full flex items-center justify-center font-bold shadow-lg">
                4
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Gemüse abholen</h3>
                <p className="text-sm text-white/90">Wöchentlich in einem der <Link href="/depots" className="text-white hover:underline font-semibold">Standorte</Link></p>
              </div>
            </div>
          </div>
        </OrganicBentoBox>

        {/* Kennenlernen - Beet */}
        <OrganicBentoBox type="beet" colSpan={12} rowSpan={1} className="md:col-span-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Möchtest du uns kennenlernen?</h2>
              <p className="text-white/95 drop-shadow-md">
                Es können viele Fragen auftauchen. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via Kontaktformular bei uns melden.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="px-6 py-3 bg-white text-red-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Nimm Kontakt auf
              </Link>
              <Link
                href="/depots"
                className="px-6 py-3 bg-white/20 text-white border-2 border-white rounded-lg font-semibold hover:bg-white/30 transition-colors text-center"
              >
                Zu uns finden
              </Link>
            </div>
          </div>
        </OrganicBentoBox>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-8 mt-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">biocò Gemüsegenossenschaft</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400">Geisshof, Gebenstorf</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/ernte" className="hover:text-white transition-colors">Ernte</a></li>
                <li><a href="/abos" className="hover:text-white transition-colors">Abos</a></li>
                <li><a href="/mitmachen" className="hover:text-white transition-colors">Mitmachen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

