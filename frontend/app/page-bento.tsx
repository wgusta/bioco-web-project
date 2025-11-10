'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { SVGRoots } from '@/components/SVGRoots'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomeBento() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) {
      return // Disable parallax on mobile
    }

    const parallax = parallaxRef.current
    if (!parallax) return

    // Parallax background animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress
        // Move background slower than content (parallax effect)
        gsap.set(parallax, {
          y: progress * window.innerHeight * 0.5, // 50% slower
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Define root connections between boxes
  const rootConnections = [
    {
      id: 'root-1',
      from: { x: 200, y: 300 }, // Apple box
      to: { x: 600, y: 800 }, // Lettuce box
    },
    {
      id: 'root-2',
      from: { x: 600, y: 800 }, // Lettuce box
      to: { x: 400, y: 1500 }, // Carrot box
    },
    {
      id: 'root-3',
      from: { x: 200, y: 300 }, // Apple box
      to: { x: 400, y: 1500 }, // Carrot box
    },
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Parallax Background - Journey into the Earth */}
      <div ref={parallaxRef} className="parallax-background" />

      {/* SVG Roots Container */}
      <SVGRoots connections={rootConnections} />

      {/* Main Content Container */}
      <div ref={containerRef} className="bento-grid-container">
        {/* Sky Section - Apple Trees */}
        <OrganicBentoBox
          type="apple"
          gridCol="1 / 7"
          gridRow="1 / 5"
          className="lg:col-span-6 lg:row-span-4"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              Willkommen bei biocò
            </h2>
            <p className="text-white/90 text-lg">
              Frisches Demeter-Gemüse – fast jede Woche.
            </p>
            <Image
              src="/images/hero/header_homepage.JPG"
              alt="biocò Gemüsegenossenschaft"
              width={400}
              height={300}
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </OrganicBentoBox>

        {/* Surface Section - Bushes, Beans, Lettuce, Pumpkin */}
        <OrganicBentoBox
          type="lettuce"
          gridCol="7 / 13"
          gridRow="3 / 7"
          className="lg:col-span-6 lg:row-span-4"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              Saisonal & Demeter
            </h3>
            <p className="text-white/90">
              Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.
            </p>
            <ul className="text-white/90 space-y-2 text-left">
              <li>• Wöchentlicher Gemüsekorb</li>
              <li>• Saisonalität – das Gemüse der Jahreszeit</li>
              <li>• Demeter-Qualität – höchste Bio-Standards</li>
            </ul>
          </div>
        </OrganicBentoBox>

        {/* Earth Section - Root Vegetables */}
        <OrganicBentoBox
          type="carrot"
          gridCol="3 / 9"
          gridRow="8 / 12"
          className="lg:col-span-6 lg:row-span-4"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              Gemeinschaft & Solidarität
            </h3>
            <p className="text-white/90">
              biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.
            </p>
            <ul className="text-white/90 space-y-2 text-left">
              <li>• Mitarbeit – Anpacken auf dem Feld</li>
              <li>• Transparenz – Solidarische Landwirtschaft (CSA)</li>
              <li>• Gemeinschaft – Jede(r) bringt sich ein</li>
              <li>• Lokal/Region – Hof: Geisshof</li>
            </ul>
          </div>
        </OrganicBentoBox>

        {/* Additional Bento Boxes for more content */}
        <OrganicBentoBox
          type="lettuce"
          gridCol="1 / 5"
          gridRow="5 / 8"
          className="lg:col-span-4 lg:row-span-3"
        >
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white drop-shadow-lg">
              Aktuelles
            </h4>
            <p className="text-white/90 text-sm">
              Neuigkeiten von unserem Hof
            </p>
          </div>
        </OrganicBentoBox>

        <OrganicBentoBox
          type="apple"
          gridCol="9 / 13"
          gridRow="1 / 3"
          className="lg:col-span-4 lg:row-span-2"
        >
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white drop-shadow-lg">
              Events
            </h4>
            <p className="text-white/90 text-sm">
              Nächste Veranstaltungen
            </p>
          </div>
        </OrganicBentoBox>

        <OrganicBentoBox
          type="carrot"
          gridCol="9 / 13"
          gridRow="10 / 12"
          className="lg:col-span-4 lg:row-span-2"
        >
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-white drop-shadow-lg">
              Mitmachen
            </h4>
            <p className="text-white/90 text-sm">
              Jetzt Mitglied werden
            </p>
          </div>
        </OrganicBentoBox>
      </div>

      {/* Footer - Deep Earth Layers */}
      <footer className="relative z-10 bg-gradient-to-b from-[#8B7355] via-[#6B5B4A] to-[#4A3E2E] text-white py-16 px-8 mt-32">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">biocò Gemüsegenossenschaft</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-white/80">Geisshof, Gebenstorf</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/ernte" className="hover:text-white">Ernte</a></li>
                <li><a href="/abos" className="hover:text-white">Abos</a></li>
                <li><a href="/mitmachen" className="hover:text-white">Mitmachen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/impressum" className="hover:text-white">Impressum</a></li>
                <li><a href="/datenschutz" className="hover:text-white">Datenschutz</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

