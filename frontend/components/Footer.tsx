'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-earth-white py-16 px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Navigation</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/ernte" className="hover:text-gray-900 transition-colors">Ernte</Link></li>
              <li><Link href="/anpacken" className="hover:text-gray-900 transition-colors">Anpacken</Link></li>
              <li><Link href="/abos" className="hover:text-gray-900 transition-colors">Abos</Link></li>
              <li><Link href="/wir" className="hover:text-gray-900 transition-colors">Wir</Link></li>
              <li><Link href="/aktuelles" className="hover:text-gray-900 transition-colors">Aktuelles</Link></li>
              <li><Link href="/mitmachen" className="hover:text-gray-900 transition-colors">Mitmachen</Link></li>
            </ul>
          </div>

          {/* Kontakt & Rechtliches */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Kontakt & Rechtliches</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/kontakt" className="hover:text-gray-900 transition-colors">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-gray-900 transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-gray-900 transition-colors">Datenschutz</Link></li>
              <li><Link href="/statuten" className="hover:text-gray-900 transition-colors">Statuten</Link></li>
            </ul>
          </div>

          {/* Adresse & Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Kontakt</h4>
            <div className="space-y-2 text-gray-700 mb-6">
              <p className="font-semibold text-gray-900">Gemüsegenossenschaft biocò</p>
              <p>Geisshof</p>
              <p>5412 Gebenstorf</p>
              <p>Schweiz</p>
              <p><a href="mailto:info@bioco.ch" className="hover:text-gray-900 transition-colors">info@bioco.ch</a></p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-gray-900">Social Media</h5>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          {/* Dokumente & Partner */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Dokumente</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li><a href="/statuten.pdf" className="hover:text-gray-900 transition-colors">Statuten (PDF)</a></li>
              <li><a href="/reglement.pdf" className="hover:text-gray-900 transition-colors">Reglement (PDF)</a></li>
              <li><a href="/jahresbericht.pdf" className="hover:text-gray-900 transition-colors">Jahresbericht (PDF)</a></li>
            </ul>
            <div>
              <h5 className="font-semibold mb-2 text-gray-900">Partner & Zertifizierungen</h5>
              <div className="flex flex-col gap-2">
                <a href="https://demeter.ch" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">Demeter</a>
                <a href="https://bio-suisse.ch" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">Bio Suisse</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
