'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger">☰</span>
      </button>
      {isOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <Navigation onLinkClick={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
    </>
  )
}
