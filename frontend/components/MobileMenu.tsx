'use client'

import { useState } from 'react'
import { SecondaryNavigation } from './SecondaryNavigation'
import { TriColorHamburgerIcon } from './TriColorHamburgerIcon'

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
          <TriColorHamburgerIcon width={30} height={20} />
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
            <div className="mobile-menu-primary-section">
              <div className="mobile-menu-secondary">
                <SecondaryNavigation />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
