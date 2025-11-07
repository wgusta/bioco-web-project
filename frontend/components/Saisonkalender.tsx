'use client'

import { useState } from 'react'

const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
]

// Beispiel-Saisonalität (sollte mit echten Daten gefüllt werden)
const SEASONAL_DATA: Record<string, { now: string[], soon: string[], storage: string[] }> = {
  januar: { now: ['Kohl', 'Lauch', 'Pastinaken'], soon: ['Mangold'], storage: ['Kartoffeln', 'Rüebli', 'Zwiebeln'] },
  februar: { now: ['Kohl', 'Lauch'], soon: ['Mangold', 'Rüebli'], storage: ['Kartoffeln', 'Zwiebeln'] },
  märz: { now: ['Lauch', 'Mangold'], soon: ['Spinat', 'Rüebli'], storage: ['Kartoffeln', 'Zwiebeln'] },
  april: { now: ['Spinat', 'Rüebli'], soon: ['Radieschen', 'Salat'], storage: ['Kartoffeln'] },
  mai: { now: ['Radieschen', 'Salat', 'Spinat'], soon: ['Erbsen', 'Bohnen'], storage: [] },
  juni: { now: ['Salat', 'Erbsen', 'Radieschen'], soon: ['Bohnen', 'Zucchini'], storage: [] },
  juli: { now: ['Bohnen', 'Zucchini', 'Tomaten', 'Gurken'], soon: ['Auberginen', 'Paprika'], storage: [] },
  august: { now: ['Tomaten', 'Gurken', 'Zucchini', 'Bohnen'], soon: ['Kürbis'], storage: [] },
  september: { now: ['Tomaten', 'Kürbis', 'Zucchini'], soon: ['Kohl', 'Lauch'], storage: [] },
  oktober: { now: ['Kürbis', 'Kohl', 'Lauch'], soon: ['Pastinaken'], storage: ['Kartoffeln'] },
  november: { now: ['Kohl', 'Lauch', 'Pastinaken'], soon: [], storage: ['Kartoffeln', 'Rüebli', 'Zwiebeln'] },
  dezember: { now: ['Kohl', 'Lauch', 'Pastinaken'], soon: ['Mangold'], storage: ['Kartoffeln', 'Rüebli', 'Zwiebeln'] },
}

export function Saisonkalender() {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth())

  const monthKey = MONTHS[activeMonth].toLowerCase()
  const data = SEASONAL_DATA[monthKey] || { now: [], soon: [], storage: [] }

  return (
    <div className="saisonkalender">
      {/* Desktop: Tabs, Mobile: Dropdown */}
      <div className="kalender-tabs">
        {MONTHS.map((month, index) => (
          <button
            key={month}
            className={`kalender-tab ${activeMonth === index ? 'active' : ''}`}
            onClick={() => setActiveMonth(index)}
          >
            {month.substring(0, 3)}
          </button>
        ))}
      </div>
      <select
        className="kalender-select"
        value={activeMonth}
        onChange={(e) => setActiveMonth(Number(e.target.value))}
      >
        {MONTHS.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>

      <div className="kalender-content">
        <div className="kalender-section">
          <h4>Diesen Monat</h4>
          <ul>
            {data.now.length > 0 ? (
              data.now.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li className="empty">Keine Angaben verfügbar</li>
            )}
          </ul>
        </div>

        <div className="kalender-section">
          <h4>Lagerware</h4>
          <ul>
            {data.storage.length > 0 ? (
              data.storage.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li className="empty">Keine Angaben verfügbar</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
