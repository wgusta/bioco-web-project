'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="mobile-header-actions">
        <Link 
          href="/mitmachen" 
          className="btn btn-orange mobile-mitmachen-btn"
        >
          Mitmachen!
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8 Q5 7 8 8 T14 8 Q16 7 18 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M3 12 Q5 11 8 12 T14 12 Q16 11 18 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M3 16 Q5 15 8 16 T14 16 Q16 15 18 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        </button>
      </div>
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
            <Navigation onLinkClick={() => setIsOpen(false)} hideMitmachen={true} />
            <div className="mobile-menu-secondary">
              <SecondaryNavigation />
            </div>
            <div className="mobile-menu-cta-bottom">
              <Link 
                href="/mitmachen" 
                className="btn btn-orange"
                onClick={() => setIsOpen(false)}
              >
                Mitmachen!
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
