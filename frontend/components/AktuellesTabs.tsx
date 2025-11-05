'use client'

import { useState } from 'react'
import Link from 'next/link'

export function AktuellesTabs() {
  const [activeTab, setActiveTab] = useState<'aktuelles' | 'events'>('aktuelles')

  return (
    <section id="A-07" className="bento-card bento-card-large">
      <div className="plant-pattern"></div>
      <h2>Was gerade läuft</h2>
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'aktuelles' ? 'active' : ''}`}
            onClick={() => setActiveTab('aktuelles')}
          >
            Aktuelles
          </button>
          <button
            className={`tab-button ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Nächste Events
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === 'aktuelles' && (
            <div className="tab-panel">
              <div className="aktuelles-list">
                <div className="aktuelles-item">
                  <h3>24. Oktober 2025</h3>
                  <p><strong>Letzter biocò Schnuppertag des Jahres</strong></p>
                  <p>Auf dem Geisshof in Gebenstorf</p>
                </div>
                <div className="aktuelles-item">
                  <h3>15. November 2025</h3>
                  <p><strong>Fondue-Abend</strong></p>
                  <p>Gemeinsamer Anlass für alle Mitglieder</p>
                </div>
                <div className="aktuelles-item">
                  <h3>27. November 2025</h3>
                  <p><strong>Außerordentliche Generalversammlung</strong></p>
                  <p>Wichtige Informationen für alle Genossenschafter/innen</p>
                </div>
              </div>
              <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Alle Aktuelles ansehen
              </Link>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="tab-panel">
              <div className="events-list">
                <div className="event-item">
                  <h3>24. Oktober 2025</h3>
                  <p><strong>Letzter biocò Schnuppertag des Jahres</strong></p>
                  <p>Auf dem Geisshof in Gebenstorf</p>
                </div>
                <div className="event-item">
                  <h3>15. November 2025</h3>
                  <p><strong>Fondue-Abend</strong></p>
                  <p>Gemeinsamer Anlass für alle Mitglieder</p>
                </div>
              </div>
              <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                Alle Events ansehen
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
