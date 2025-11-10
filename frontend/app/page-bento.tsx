'use client'

import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { Navigation } from '@/components/Navigation'
import { SecondaryNavigation } from '@/components/SecondaryNavigation'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeBento() {
  return (
    <div className="min-h-screen bg-earth-white">
      {/* Hero Section - 50% of viewport on desktop */}
      <div className="lg:h-[50vh] flex items-center justify-center">
        <div className="bento-grid-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Large Welcome Card - Apple (Green) */}
          <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-8 lg:col-span-8">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 drop-shadow-lg">Willkommen bei biocò</h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-6 drop-shadow-md">
                Frisches Demeter-Gemüse – fast jede Woche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/mitmachen"
                  className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center shadow-lg"
                >
                  Jetzt Mitglied werden
                </Link>
                <Link
                  href="/mitmachen#testen"
                  className="inline-block px-6 py-3 bg-white/80 text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-white transition-colors text-center"
                >
                  Zuerst testen?
                </Link>
              </div>
            </div>
          </OrganicBentoBox>

          {/* Primary Navigation - Carrot (Right side, top) */}
          <OrganicBentoBox type="carrot" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4 md:col-start-9 lg:col-start-9">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Navigation</h3>
              <nav className="bento-nav">
                <Navigation hideMitmachen={true} />
              </nav>
            </div>
          </OrganicBentoBox>

          {/* Secondary Navigation - Beet (Right side, bottom) */}
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={1} className="md:col-span-4 lg:col-span-4 md:col-start-9 lg:col-start-9 md:row-start-2 lg:row-start-2">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Kontakt & Standorte</h3>
              <nav className="bento-nav-secondary">
                <SecondaryNavigation />
              </nav>
            </div>
          </OrganicBentoBox>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="bento-grid-container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

        {/* Saisonal & Demeter - Carrot */}
        <OrganicBentoBox type="carrot" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Das ist drin: Saisonal & Demeter</h2>
          <p className="text-gray-800 mb-4 drop-shadow-md">
            Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.
          </p>
          <ul className="space-y-2 text-gray-800 mb-6 text-left drop-shadow-sm">
            <li>• Wöchentlicher Gemüsekorb</li>
            <li>• Saisonalität – das Gemüse der Jahreszeit</li>
            <li>• Demeter-Qualität – höchste Bio-Standards</li>
          </ul>
          <Link
            href="/ernte"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Ernte entdecken
          </Link>
        </OrganicBentoBox>

        {/* Gemeinschaft - Beet */}
        <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Gemeinschaft & Solidarität</h2>
          <div className="mb-4">
            <Image
              src="/images/gemeinschaft/bioco_gemeinschaft.JPG"
              alt="Gemeinschaft bei biocò"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <p className="text-gray-800 mb-4 drop-shadow-md">
            biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.
          </p>
          <ul className="space-y-2 text-gray-800 text-left drop-shadow-sm">
            <li>• <strong>Mitarbeit</strong> – <Link href="/anpacken" className="text-gray-900 hover:underline font-semibold">Anpacken auf dem Feld</Link></li>
            <li>• <strong>Transparenz</strong> – Solidarische Landwirtschaft (CSA)</li>
            <li>• <strong>Gemeinschaft</strong> – Jede(r) bringt sich ein</li>
            <li>• <strong>Lokal/Region</strong> – <Link href="/wir" className="text-gray-900 hover:underline font-semibold">Hof: Geisshof</Link></li>
          </ul>
        </OrganicBentoBox>

        {/* Aktuelles - Carrot */}
        <OrganicBentoBox type="carrot" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Aktuelles</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-900/20">
              <h3 className="font-semibold text-gray-900 mb-2">Neuigkeiten vom Hof</h3>
              <p className="text-sm text-gray-800">Aktuelle Informationen und Updates</p>
            </div>
            <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-900/20">
              <h3 className="font-semibold text-gray-900 mb-2">Saisonale Highlights</h3>
              <p className="text-sm text-gray-800">Was gerade wächst und geerntet wird</p>
            </div>
          </div>
          <Link
            href="/aktuelles"
            className="inline-block mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors w-full text-center shadow-lg"
          >
            Alle Aktuelles ansehen
          </Link>
        </OrganicBentoBox>

        {/* Events - Apple */}
        <OrganicBentoBox type="apple" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Nächste Events</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-900/20">
              <h3 className="font-semibold text-gray-900 mb-2">Schnuppertag</h3>
              <p className="text-sm text-gray-800">Lerne uns und den Hof kennen</p>
            </div>
            <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-gray-900/20">
              <h3 className="font-semibold text-gray-900 mb-2">Erntefest</h3>
              <p className="text-sm text-gray-800">Gemeinsam feiern und geniessen</p>
            </div>
          </div>
          <Link
            href="/aktuelles"
            className="inline-block mt-4 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors w-full text-center shadow-lg"
          >
            Alle Events ansehen
          </Link>
        </OrganicBentoBox>

        {/* Wie funktioniert's - Beet */}
        <OrganicBentoBox type="beet" colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-lg">Wie funktioniert's?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Anmelden</h3>
                <p className="text-sm text-gray-800">Entscheide dich für ein <Link href="/abos" className="text-gray-900 hover:underline font-semibold">Abo</Link> oder teste mit einem <Link href="/mitmachen" className="text-gray-900 hover:underline font-semibold">Schnupperabo</Link></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Rechnung bezahlen</h3>
                <p className="text-sm text-gray-800">Du erhältst eine Rechnung und bezahlst den Beitrag</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Arbeitseinsätze planen</h3>
                <p className="text-sm text-gray-800">Organisiere deine <Link href="/anpacken" className="text-gray-900 hover:underline font-semibold">Mitarbeit</Link></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Gemüse abholen</h3>
                <p className="text-sm text-gray-800">Wöchentlich in einem der <Link href="/depots" className="text-gray-900 hover:underline font-semibold">Standorte</Link></p>
              </div>
            </div>
          </div>
        </OrganicBentoBox>

        {/* Kennenlernen - Beet */}
        <OrganicBentoBox type="beet" colSpan={12} rowSpan={1} className="md:col-span-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 drop-shadow-lg">Möchtest du uns kennenlernen?</h2>
              <p className="text-gray-800 drop-shadow-md">
                Es können viele Fragen auftauchen. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via Kontaktformular bei uns melden.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center shadow-lg"
              >
                Nimm Kontakt auf
              </Link>
              <Link
                href="/depots"
                className="px-6 py-3 bg-white/80 text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-white transition-colors text-center"
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

