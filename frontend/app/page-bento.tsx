'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BentoBox } from '@/components/BentoBox'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeBento() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Main Content Container */}
        <div className="bento-grid-container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Large Welcome Card */}
          <BentoBox colSpan={12} rowSpan={2} className="bg-gradient-to-br from-bioco-green to-bioco-green-dark text-white">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Willkommen bei biocò</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Frisches Demeter-Gemüse – fast jede Woche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/mitmachen"
                  className="inline-block px-6 py-3 bg-white text-bioco-green rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
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
          </BentoBox>

          {/* Saisonal & Demeter */}
          <BentoBox colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-bioco-green mb-4">Das ist drin: Saisonal & Demeter</h2>
            <p className="text-gray-700 mb-4">
              Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Wöchentlicher Gemüsekorb</li>
              <li>• Saisonalität – das Gemüse der Jahreszeit</li>
              <li>• Demeter-Qualität – höchste Bio-Standards</li>
            </ul>
            <Link
              href="/ernte"
              className="inline-block px-6 py-3 bg-bioco-green text-white rounded-lg font-semibold hover:bg-bioco-green-dark transition-colors"
            >
              Ernte entdecken
            </Link>
          </BentoBox>

          {/* Gemeinschaft */}
          <BentoBox colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-6">
            <h2 className="text-2xl font-bold text-bioco-green mb-4">Gemeinschaft & Solidarität</h2>
            <div className="mb-4">
              <Image
                src="/images/gemeinschaft/bioco_gemeinschaft.JPG"
                alt="Gemeinschaft bei biocò"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-gray-700 mb-4">
              biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>Mitarbeit</strong> – <Link href="/anpacken" className="text-bioco-green hover:underline">Anpacken auf dem Feld</Link></li>
              <li>• <strong>Transparenz</strong> – Solidarische Landwirtschaft (CSA)</li>
              <li>• <strong>Gemeinschaft</strong> – Jede(r) bringt sich ein</li>
              <li>• <strong>Lokal/Region</strong> – <Link href="/wir" className="text-bioco-green hover:underline">Hof: Geisshof</Link></li>
            </ul>
          </BentoBox>

          {/* Aktuelles */}
          <BentoBox colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
            <h2 className="text-2xl font-bold text-bioco-green mb-4">Aktuelles</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Neuigkeiten vom Hof</h3>
                <p className="text-sm text-gray-600">Aktuelle Informationen und Updates</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Saisonale Highlights</h3>
                <p className="text-sm text-gray-600">Was gerade wächst und geerntet wird</p>
              </div>
            </div>
            <Link
              href="/aktuelles"
              className="inline-block mt-4 px-6 py-3 bg-bioco-green text-white rounded-lg font-semibold hover:bg-bioco-green-dark transition-colors w-full text-center"
            >
              Alle Aktuelles ansehen
            </Link>
          </BentoBox>

          {/* Events */}
          <BentoBox colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-bioco-green/10 to-bioco-green/5">
            <h2 className="text-2xl font-bold text-bioco-green mb-4">Nächste Events</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-bioco-green/20">
                <h3 className="font-semibold text-gray-900 mb-2">Schnuppertag</h3>
                <p className="text-sm text-gray-600">Lerne uns und den Hof kennen</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-bioco-green/20">
                <h3 className="font-semibold text-gray-900 mb-2">Erntefest</h3>
                <p className="text-sm text-gray-600">Gemeinsam feiern und geniessen</p>
              </div>
            </div>
            <Link
              href="/aktuelles"
              className="inline-block mt-4 px-6 py-3 bg-bioco-green text-white rounded-lg font-semibold hover:bg-bioco-green-dark transition-colors w-full text-center"
            >
              Alle Events ansehen
            </Link>
          </BentoBox>

          {/* Wie funktioniert's */}
          <BentoBox colSpan={12} rowSpan={2} className="md:col-span-6 lg:col-span-4">
            <h2 className="text-2xl font-bold text-bioco-green mb-4">Wie funktioniert's?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-bioco-green text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Anmelden</h3>
                  <p className="text-sm text-gray-600">Entscheide dich für ein <Link href="/abos" className="text-bioco-green hover:underline">Abo</Link> oder teste mit einem <Link href="/mitmachen" className="text-bioco-green hover:underline">Schnupperabo</Link></p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-bioco-green text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Rechnung bezahlen</h3>
                  <p className="text-sm text-gray-600">Du erhältst eine Rechnung und bezahlst den Beitrag</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-bioco-green text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Arbeitseinsätze planen</h3>
                  <p className="text-sm text-gray-600">Organisiere deine <Link href="/anpacken" className="text-bioco-green hover:underline">Mitarbeit</Link></p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-bioco-green text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Gemüse abholen</h3>
                  <p className="text-sm text-gray-600">Wöchentlich in einem der <Link href="/depots" className="text-bioco-green hover:underline">Standorte</Link></p>
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Kennenlernen */}
          <BentoBox colSpan={12} rowSpan={1} className="bg-gradient-to-r from-bioco-beet/10 to-bioco-beet/5 border-bioco-beet/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-bioco-beet mb-2">Möchtest du uns kennenlernen?</h2>
                <p className="text-gray-700">
                  Es können viele Fragen auftauchen. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via Kontaktformular bei uns melden.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="px-6 py-3 bg-bioco-beet text-white rounded-lg font-semibold hover:bg-bioco-beet-light transition-colors text-center"
                >
                  Nimm Kontakt auf
                </Link>
                <Link
                  href="/depots"
                  className="px-6 py-3 bg-white text-bioco-beet border-2 border-bioco-beet rounded-lg font-semibold hover:bg-bioco-beet/10 transition-colors text-center"
                >
                  Zu uns finden
                </Link>
              </div>
            </div>
          </BentoBox>
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
      <Footer />
    </>
  )
}
