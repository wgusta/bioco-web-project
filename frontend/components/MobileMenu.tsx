'use client'

import { useState } from 'react'
import { Navigation } from './Navigation'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger">☰</span>
      </button>
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <Navigation />
          </nav>
        </div>
      )}
    </>
  )
}
