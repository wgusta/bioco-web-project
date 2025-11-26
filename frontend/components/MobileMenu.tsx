'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { BeanMenuIcon } from './BeanMenuIcon'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="mobile-header-actions">
        <Link 
          href="/mitmachen" 
          className="btn btn-orange mobile-mitmachen-btn"
        >
          biocò werden
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <BeanMenuIcon width={32} height={32} />
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
            <div className="mobile-menu-header">
              <h3 className="mobile-menu-title">Menü</h3>
              <button
                className="mobile-menu-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
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
                biocò werden
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
