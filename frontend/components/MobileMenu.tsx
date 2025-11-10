'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { SecondaryNavigation } from './SecondaryNavigation'
import { OrganicMenuIcon } from './OrganicMenuIcon'
import { OrganicBentoBox } from './OrganicBentoBox'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="mobile-header-actions">
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <OrganicMenuIcon width={32} height={32} />
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
          <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
            <OrganicBentoBox type="beet" noBorder={false} className="mobile-menu-bento">
              <div className="mobile-menu-content">
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
                    Mitmachen!
                  </Link>
                </div>
              </div>
            </OrganicBentoBox>
          </div>
        </div>
      )}
    </>
  )
}
