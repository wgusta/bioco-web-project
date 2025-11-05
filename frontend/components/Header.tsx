'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation } from './Navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header id="header">
      <div className="header-container">
        <div className="header-logo">
          <Link href="/">
            <Image
              src="https://bioco.ch/wp-content/uploads/2017/02/bioco_logo_gemuesegenossenschaft.png"
              alt="biocò Logo"
              width={200}
              height={60}
              priority
              style={{ height: 'auto', width: 'auto' }}
            />
          </Link>
        </div>
        
        <div className="header-cta">
          <Link href="/mitmachen" className="btn btn-primary">
            Mitmachen!
          </Link>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className="header-nav">
          <Navigation />
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <Navigation />
          </div>
        </div>
      )}
    </header>
  )
}