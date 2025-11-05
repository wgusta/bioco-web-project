'use client'

import { useState } from 'react'

const ABO_PRICES = {
  'halb': { name: 'Halb Gemüsekorb', price: 750, shares: 1 },
  'standard': { name: 'Gemüsekorb (Standard)', price: 1280, shares: 2 },
  'doppel': { name: 'Doppelter Gemüsekorb', price: 2350, shares: 4 },
  'kein': { name: 'Kein Abo', price: 0, shares: 0 }
}

const SHARE_PRICE = 250

export function PricingCalculator() {
  const [selectedAbo, setSelectedAbo] = useState<'halb' | 'standard' | 'doppel' | 'kein'>('kein')
  const [additionalShares, setAdditionalShares] = useState(0)

  const aboData = ABO_PRICES[selectedAbo]
  const requiredShares = aboData.shares
  const totalShares = requiredShares + additionalShares
  const aboCost = aboData.price
  const sharesCost = totalShares * SHARE_PRICE
  const totalCost = aboCost + sharesCost

  return (
    <div className="pricing-calculator">
      <div className="pricing-table">
        <table>
          <thead>
            <tr>
              <th>Artikel</th>
              <th>Anzahl</th>
              <th>Einzelpreis</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedAbo !== 'kein' && (
              <tr>
                <td>{aboData.name}</td>
                <td>1</td>
                <td>CHF {aboData.price.toLocaleString('de-CH')}.-</td>
                <td><strong>CHF {aboData.price.toLocaleString('de-CH')}.-</strong></td>
                <td></td>
              </tr>
            )}
            <tr>
              <td>
                Anteilsscheine
                {selectedAbo !== 'kein' && requiredShares > 0 && (
                  <span className="text-sm" style={{ display: 'block', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    ({requiredShares} erforderlich{additionalShares > 0 && ` + ${additionalShares} zusätzlich`})
                  </span>
                )}
                {selectedAbo === 'kein' && (
                  <span className="text-sm" style={{ display: 'block', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    (ohne Gemüsekorb)
                  </span>
                )}
              </td>
              <td>{totalShares}</td>
              <td>CHF {SHARE_PRICE}.-</td>
              <td><strong>CHF {sharesCost.toLocaleString('de-CH')}.-</strong></td>
              <td>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {additionalShares > 0 && (
                    <button
                      type="button"
                      className="btn-remove-share"
                      onClick={() => setAdditionalShares(prev => Math.max(0, prev - 1))}
                      aria-label="Ein Anteilsschein entfernen"
                    >
                      -1
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn-add-share"
                    onClick={() => setAdditionalShares(prev => prev + 1)}
                    aria-label="Ein Anteilsschein hinzufügen"
                  >
                    +1
                  </button>
                </div>
              </td>
            </tr>
            <tr className="total-row">
              <td colSpan={3}><strong>Total</strong></td>
              <td colSpan={2}><strong className="total-amount">CHF {totalCost.toLocaleString('de-CH')}.-</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="abo-selector" style={{ marginTop: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Gemüseabo wählen:</h3>
        <div className="abo-buttons">
          <button
            type="button"
            className={`abo-button ${selectedAbo === 'halb' ? 'active' : ''}`}
            onClick={() => {
              setSelectedAbo('halb')
              setAdditionalShares(0)
            }}
          >
            Halb (1 Person)<br />
            <span className="price">CHF 750.-</span>
          </button>
          <button
            type="button"
            className={`abo-button ${selectedAbo === 'standard' ? 'active' : ''}`}
            onClick={() => {
              setSelectedAbo('standard')
              setAdditionalShares(0)
            }}
          >
            Standard (2-3 Personen)<br />
            <span className="price">CHF 1'280.-</span>
          </button>
          <button
            type="button"
            className={`abo-button ${selectedAbo === 'doppel' ? 'active' : ''}`}
            onClick={() => {
              setSelectedAbo('doppel')
              setAdditionalShares(0)
            }}
          >
            Doppel (4-6 Personen)<br />
            <span className="price">CHF 2'350.-</span>
          </button>
          <button
            type="button"
            className={`abo-button ${selectedAbo === 'kein' ? 'active' : ''}`}
            onClick={() => {
              setSelectedAbo('kein')
              setAdditionalShares(0)
            }}
          >
            Kein Abo<br />
            <span className="price">Nur Anteilsscheine</span>
          </button>
        </div>
      </div>

      {selectedAbo === 'kein' && additionalShares === 0 && (
        <div style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            <strong>💡 Info:</strong> Du kannst Anteilsscheine auch ohne Gemüsekorb erwerben. 
            Genossenschafter/innen haben Vorrang auf der Warteliste für einen Gemüsekorb.
          </p>
        </div>
      )}
    </div>
  )
}
