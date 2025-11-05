'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { trackEvent } from '../MatomoScript'
import { InfoTooltip } from '../InfoTooltip'
import Link from 'next/link'

type AboType = 'halb' | 'standard' | 'doppel' | 'none'
type PaymentType = 'quarterly' | 'yearly'

interface FormData {
  // Step 1: Personal
  firstName: string
  lastName: string
  address: string
  zip: string
  city: string
  phone: string
  email: string
  
  // Step 2: Membership & Abo
  membershipType: 'abo' | 'shares-only'
  aboType: AboType
  additionalShares: number
  sharesOnly: number
  
  // Step 3: Depot
  depot: string
  
  // Step 4: Payment
  paymentType: PaymentType
  
  // Step 5: Mitarbeit
  preferredDays: string[]
  preferredTimes: string[]
  activityAreas: string[]
  otherActivity: string
  
  // General
  privacyAccept: boolean
}

const ABO_CONFIG = {
  halb: { price: 750, shares: 1, people: '1 Person', hours: 20 },
  standard: { price: 1280, shares: 2, people: '2-3 Personen', hours: 40 },
  doppel: { price: 2350, shares: 4, people: '4-6 Personen', hours: 40 },
}

const DEPOTS = ['Baden', 'Brugg', 'Wettingen', 'Windisch', 'Ennetbaden']
const DAYS = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
const TIMES = ['morgens', 'nachmittags', 'abends']
const ACTIVITY_AREAS = [
  'Feld/Anbau',
  'Logistik/Verteilung',
  'Administration',
  'Events/Organisation',
  'Andere'
]

interface MembershipFormProps {
  initialData?: {
    aboType?: string
    additionalShares?: number
    membershipType?: string
  }
}

export function MembershipForm({ initialData }: MembershipFormProps = {}) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  // Read URL parameters
  const getInitialDataFromURL = () => {
    if (typeof window === 'undefined') return null
    const params = new URLSearchParams(window.location.search)
    const abo = params.get('abo')
    const shares = params.get('shares')
    const additional = params.get('additional')
    
    if (abo || shares || additional) {
      return {
        aboType: abo || undefined,
        additionalShares: additional ? parseInt(additional) : undefined,
        membershipType: abo === 'kein' ? 'shares-only' : 'abo',
      }
    }
    return null
  }

  const urlData = getInitialDataFromURL()
  const effectiveInitialData = initialData || urlData

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    address: '',
    zip: '',
    city: '',
    phone: '',
    email: '',
    membershipType: (effectiveInitialData?.membershipType as 'abo' | 'shares-only') || 'abo',
    aboType: (effectiveInitialData?.aboType as AboType) || 'standard',
    additionalShares: effectiveInitialData?.additionalShares || 0,
    sharesOnly: 1,
    depot: '',
    paymentType: 'yearly',
    preferredDays: [],
    preferredTimes: [],
    activityAreas: [],
    otherActivity: '',
    privacyAccept: false,
  })

  // Update form data when initialData changes or URL params are present
  useEffect(() => {
    if (effectiveInitialData) {
      setFormData(prev => ({
        ...prev,
        membershipType: (effectiveInitialData.membershipType as 'abo' | 'shares-only') || prev.membershipType,
        aboType: (effectiveInitialData.aboType as AboType) || prev.aboType,
        additionalShares: effectiveInitialData.additionalShares ?? prev.additionalShares,
      }))
    }
  }, [effectiveInitialData])

  // Calculate totals
  const calculateTotals = () => {
    let aboPrice = 0
    let requiredShares = 0
    let totalShares = 0
    let sharesPrice = 0

    if (formData.membershipType === 'abo' && formData.aboType !== 'none') {
      const config = ABO_CONFIG[formData.aboType]
      aboPrice = config.price
      requiredShares = config.shares
      totalShares = requiredShares + formData.additionalShares
    } else if (formData.membershipType === 'shares-only') {
      totalShares = formData.sharesOnly
    }

    sharesPrice = totalShares * 250
    const totalPrice = aboPrice + sharesPrice

    return {
      aboPrice,
      requiredShares,
      totalShares,
      sharesPrice,
      totalPrice,
    }
  }

  const totals = calculateTotals()

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0:
        // Commitment check - no validation needed, just acknowledge
        return true
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.address || !formData.zip || !formData.city || !formData.email) {
          setError('Bitte füllen Sie alle Pflichtfelder aus.')
          return false
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
          return false
        }
        return true
      case 2:
        if (formData.membershipType === 'abo' && formData.aboType === 'none') {
          setError('Bitte wählen Sie einen Gemüsekorb-Typ oder wählen Sie "Nur Anteilsscheine".')
          return false
        }
        if (formData.membershipType === 'shares-only' && formData.sharesOnly < 1) {
          setError('Bitte wählen Sie mindestens 1 Anteilsschein.')
          return false
        }
        if (formData.membershipType === 'abo' && !formData.depot) {
          setError('Bitte wählen Sie ein Depot für die Abholung.')
          return false
        }
        if (formData.membershipType === 'abo' && !formData.paymentType) {
          setError('Bitte wählen Sie eine Zahlungsweise.')
          return false
        }
        return true
      case 3:
        if (formData.preferredDays.length === 0) {
          setError('Bitte wählen Sie mindestens einen bevorzugten Tag.')
          return false
        }
        if (formData.preferredTimes.length === 0) {
          setError('Bitte wählen Sie mindestens eine bevorzugte Zeit.')
          return false
        }
        if (formData.activityAreas.length === 0) {
          setError('Bitte wählen Sie mindestens einen Tätigkeitsbereich.')
          return false
        }
        return true
      case 4:
        if (!formData.privacyAccept) {
          setError('Bitte akzeptieren Sie die Datenschutzbestimmungen.')
          return false
        }
        return true
      default:
        return true
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setError('')
      setCurrentStep(prev => Math.min(prev + 1, 5))
    }
  }

  const handlePrevious = () => {
    setError('')
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return

    trackEvent('Form', 'Membership', 'Submit')

    try {
      const response = await fetch('/api/forms/membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to thank you page
        router.push('/anmeldung/danke')
      } else {
        setError(data.error || 'Es ist ein Fehler aufgetreten.')
      }
    } catch (err) {
      setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
    }
  }

  return (
    <div className="membership-form-container">
      {/* Progress Bar */}
      <div className="form-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / 5) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">Schritt {currentStep + 1} von 5</p>
      </div>

      <div className="form-layout">
        {/* Main Form */}
        <div className="form-main">
          <form onSubmit={handleSubmit} className="membership-form">
            {error && (
              <div className="form-error bento-card" style={{ marginBottom: '16px' }}>
                <p>{error}</p>
              </div>
            )}

            {/* Step 0: Commitment Check */}
            {currentStep === 0 && (
              <div className="form-step">
                <h3>Commitment-Check</h3>
                <p>Bevor du dich anmeldest, überprüfe bitte diese Punkte:</p>
                <div className="commitment-checklist">
                  <div className="commitment-item">
                    <h4>Anteile & Beitrag</h4>
                    <p>Jedes Mitglied erwirbt Anteilsscheine zu je CHF 250.- (einmalige Zahlung). Die Anzahl der Anteile hängt von deinem gewählten Abo ab. Der Jahresbeitrag für dein Gemüse-Abo (jährlicher Beitrag) wird per 31. Januar fällig und kann quartalsweise oder jährlich bezahlt werden.</p>
                  </div>
                  <div className="commitment-item">
                    <h4>Bindung & Kündigung</h4>
                    <p>Das Gemüseabo läuft vom 1. Januar bis zum 31. Dezember. Ohne Kündigung verlängert es sich jeweils um ein Kalenderjahr. Die Kündigungsfrist beträgt zwei Monate auf Ende eines Kalenderjahres.</p>
                  </div>
                  <div className="commitment-item">
                    <h4>Mitarbeit</h4>
                    <p>Wir sind eine Mitmach-Genossenschaft! Jedes Mitglied leistet pro Jahr 20 Stunden (bei halbem Korb) bzw. 40 Stunden (bei ganzem Korb) Mitarbeit. Dies kann auf dem Feld, in der Logistik oder bei Events sein.</p>
                  </div>
                  <div className="commitment-item">
                    <h4>Risiko & Ertrag</h4>
                    <p>Als Teil der Solidarischen Landwirtschaft teilen wir das Risiko von Ernteausfällen und freuen uns gemeinsam über reiche Ernten. Du erhältst wöchentlich frisches Demeter-Gemüse, das direkt vom Feld kommt.</p>
                  </div>
                </div>
                <div style={{ marginTop: '24px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>
                    ✓ Ich habe die Bedingungen verstanden und bin bereit, Teil der biocò-Gemeinschaft zu werden.
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Personal Data */}
            {currentStep === 1 && (
              <div className="form-step">
                <h3>Persönliche Daten</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Vorname *</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Adresse *</label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zip">PLZ *</label>
                    <input
                      type="text"
                      id="zip"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">Ort *</label>
                    <input
                      type="text"
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Membership & Abo */}
            {currentStep === 2 && (
              <div className="form-step">
                <h3>Mitgliedschaft & Gemüsekorb</h3>
                
                <div className="form-group">
                  <label>Ich möchte:</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="membershipType"
                        value="abo"
                        checked={formData.membershipType === 'abo'}
                        onChange={(e) => setFormData({ ...formData, membershipType: 'abo', aboType: 'standard' })}
                      />
                      <span>Gemüsekorb mit Anteilsscheinen</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="membershipType"
                        value="shares-only"
                        checked={formData.membershipType === 'shares-only'}
                        onChange={(e) => setFormData({ ...formData, membershipType: 'shares-only', aboType: 'none' })}
                      />
                      <span>
                        Nur Anteilsscheine (ohne Gemüsekorb)
                        <InfoTooltip content="Wer uns unterstützen möchte, ohne ein Abo kann dies gerne tun. Zudem haben Genossenschafterinnen Vorrang auf der Warteliste für einen Gemüsekorb.">
                          ?
                        </InfoTooltip>
                      </span>
                    </label>
                  </div>
                </div>

                {formData.membershipType === 'abo' && (
                  <>
                    <div className="form-group abo-select-group">
                      <label htmlFor="aboType">Gemüsekorb-Typ *</label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="aboType"
                          required
                          value={formData.aboType}
                          onChange={(e) => setFormData({ ...formData, aboType: e.target.value as AboType, additionalShares: 0 })}
                        >
                          <option value="halb">Halb (1 Person, CHF 750.-, 1 Anteil)</option>
                          <option value="standard">Standard (2-3 Personen, CHF 1'280.-, 2 Anteile)</option>
                          <option value="doppel">Doppel (4-6 Personen, CHF 2'350.-, 4 Anteile)</option>
                        </select>
                        {formData.aboType === 'standard' && (
                          <span className="recommended-badge">Empfohlen</span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="additionalShares">
                        Zusätzliche Anteilsscheine
                        <InfoTooltip content="Du kannst zusätzliche Anteilsscheine erwerben (CHF 250 pro Anteil). Mehr Anteile bedeuten mehr Mitspracherecht.">
                          ?
                        </InfoTooltip>
                      </label>
                      <div className="share-counter">
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setFormData({ ...formData, additionalShares: Math.max(0, formData.additionalShares - 1) })}
                        >
                          −
                        </button>
                        <span className="counter-value">{formData.additionalShares}</span>
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setFormData({ ...formData, additionalShares: formData.additionalShares + 1 })}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {formData.membershipType === 'shares-only' && (
                  <div className="form-group">
                    <label htmlFor="sharesOnly">
                      Anzahl Anteilsscheine * (CHF 250 pro Anteil)
                    </label>
                    <div className="share-counter">
                      <button
                        type="button"
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, sharesOnly: Math.max(1, formData.sharesOnly - 1) })}
                      >
                        −
                      </button>
                      <span className="counter-value">{formData.sharesOnly}</span>
                      <button
                        type="button"
                        className="counter-btn"
                        onClick={() => setFormData({ ...formData, sharesOnly: formData.sharesOnly + 1 })}
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {formData.membershipType === 'abo' && (
                  <>
                    <div className="form-group">
                      <label htmlFor="depot">Depot-Auswahl *</label>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        Wo möchtest du deinen Gemüsekorb abholen?
                      </p>
                      <select
                        id="depot"
                        required
                        value={formData.depot}
                        onChange={(e) => setFormData({ ...formData, depot: e.target.value })}
                      >
                        <option value="">Bitte wählen...</option>
                        {DEPOTS.map(depot => (
                          <option key={depot} value={depot}>{depot}</option>
                        ))}
                      </select>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                        Abholzeiten: Dienstag und Freitag, 17:00-19:00 Uhr
                      </p>
                    </div>

                    <div className="form-group">
                      <label>Zahlungsweise *</label>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        Die erste Rechnung wird per 31. Januar fällig.
                      </p>
                      <div className="radio-group">
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="paymentType"
                            value="quarterly"
                            checked={formData.paymentType === 'quarterly'}
                            onChange={(e) => setFormData({ ...formData, paymentType: 'quarterly' })}
                          />
                          <span>Quartalsweise (vierteljährlich)</span>
                        </label>
                        <label className="radio-option">
                          <input
                            type="radio"
                            name="paymentType"
                            value="yearly"
                            checked={formData.paymentType === 'yearly'}
                            onChange={(e) => setFormData({ ...formData, paymentType: 'yearly' })}
                          />
                          <span>Ganzes Jahr (einmalig)</span>
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step 3: Mitarbeit */}
            {currentStep === 3 && (
              <div className="form-step">
                <h3>Mitarbeit</h3>
                <p>Jede(r) Mitglied bringt sich ein. Bitte teile uns deine Präferenzen mit:</p>
                
                <div className="form-group">
                  <label>Bevorzugte Tage *</label>
                  <div className="checkbox-group">
                    {DAYS.map(day => (
                      <label key={day} className="checkbox-option">
                        <input
                          type="checkbox"
                          checked={formData.preferredDays.includes(day)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({ ...formData, preferredDays: [...formData.preferredDays, day] })
                            } else {
                              setFormData({ ...formData, preferredDays: formData.preferredDays.filter(d => d !== day) })
                            }
                          }}
                        />
                        <span>{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Bevorzugte Zeiten *</label>
                  <div className="checkbox-group">
                    {TIMES.map(time => (
                      <label key={time} className="checkbox-option">
                        <input
                          type="checkbox"
                          checked={formData.preferredTimes.includes(time)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({ ...formData, preferredTimes: [...formData.preferredTimes, time] })
                            } else {
                              setFormData({ ...formData, preferredTimes: formData.preferredTimes.filter(t => t !== time) })
                            }
                          }}
                        />
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Tätigkeitsbereiche * (Mehrfachauswahl möglich)</label>
                  <div className="checkbox-group">
                    {ACTIVITY_AREAS.map(area => (
                      <label key={area} className="checkbox-option">
                        <input
                          type="checkbox"
                          checked={formData.activityAreas.includes(area)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({ ...formData, activityAreas: [...formData.activityAreas, area] })
                            } else {
                              setFormData({ ...formData, activityAreas: formData.activityAreas.filter(a => a !== area) })
                            }
                          }}
                        />
                        <span>{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.activityAreas.includes('Andere') && (
                  <div className="form-group">
                    <label htmlFor="otherActivity">Andere Tätigkeitsbereiche (bitte beschreiben)</label>
                    <textarea
                      id="otherActivity"
                      rows={3}
                      value={formData.otherActivity}
                      onChange={(e) => setFormData({ ...formData, otherActivity: e.target.value })}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Summary & Confirmation */}
            {currentStep === 4 && (
              <div className="form-step">
                <h3>Zusammenfassung & Bestätigung</h3>
                <div className="summary-content">
                  <div className="summary-section">
                    <h4>Persönliche Daten</h4>
                    <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                    <p><strong>Adresse:</strong> {formData.address}, {formData.zip} {formData.city}</p>
                    <p><strong>E-Mail:</strong> {formData.email}</p>
                    {formData.phone && <p><strong>Telefon:</strong> {formData.phone}</p>}
                  </div>

                  <div className="summary-section">
                    <h4>Mitgliedschaft</h4>
                    {formData.membershipType === 'abo' ? (
                      <>
                        <p><strong>Gemüsekorb:</strong> {formData.aboType === 'halb' ? 'Halb' : formData.aboType === 'standard' ? 'Standard' : 'Doppel'}</p>
                        <p><strong>Anteilsscheine:</strong> {totals.totalShares} ({totals.requiredShares} erforderlich + {formData.additionalShares} zusätzlich)</p>
                        {formData.depot && <p><strong>Depot:</strong> {formData.depot}</p>}
                        <p><strong>Zahlungsweise:</strong> {formData.paymentType === 'quarterly' ? 'Quartalsweise' : 'Ganzes Jahr'}</p>
                      </>
                    ) : (
                      <p><strong>Anteilsscheine:</strong> {formData.sharesOnly} (ohne Gemüsekorb)</p>
                    )}
                  </div>

                  <div className="summary-section">
                    <h4>Mitarbeit</h4>
                    <p><strong>Tage:</strong> {formData.preferredDays.join(', ')}</p>
                    <p><strong>Zeiten:</strong> {formData.preferredTimes.join(', ')}</p>
                    <p><strong>Bereiche:</strong> {formData.activityAreas.join(', ')}</p>
                  </div>

                  <div className="summary-section summary-total">
                    <h4>Kostenübersicht</h4>
                    {formData.membershipType === 'abo' && (
                      <p><strong>Gemüsekorb:</strong> CHF {totals.aboPrice.toLocaleString('de-CH')}.-</p>
                    )}
                    <p><strong>Anteilsscheine ({totals.totalShares} × CHF 250):</strong> CHF {totals.sharesPrice.toLocaleString('de-CH')}.-</p>
                    <p className="total-price"><strong>Gesamt:</strong> CHF {totals.totalPrice.toLocaleString('de-CH')}.-</p>
                  </div>
                </div>

                <div className="form-group" style={{ marginTop: '24px' }}>
                  <label>
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyAccept}
                      onChange={(e) => setFormData({ ...formData, privacyAccept: e.target.checked })}
                    />
                    Ich akzeptiere die <Link href="/datenschutz">Datenschutzbestimmungen</Link> *
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 0 && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrevious}
                >
                  Zurück
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNext}
                >
                  Weiter
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Anmeldung einreichen
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Sticky Summary */}
        <div className="form-summary">
          <div className="summary-card">
            <h4>Zusammenfassung</h4>
            <div className="summary-content-compact">
              {formData.membershipType === 'abo' && formData.aboType !== 'none' ? (
                <>
                  <p><strong>Gemüsekorb:</strong> {formData.aboType === 'halb' ? 'Halb' : formData.aboType === 'standard' ? 'Standard' : 'Doppel'}</p>
                  <p><strong>Anteilsscheine:</strong> {totals.totalShares}</p>
                  {formData.depot && <p><strong>Depot:</strong> {formData.depot}</p>}
                </>
              ) : (
                <p><strong>Anteilsscheine:</strong> {formData.membershipType === 'shares-only' ? formData.sharesOnly : totals.totalShares}</p>
              )}
              <p className="summary-total-text"><strong>Gesamt:</strong> CHF {totals.totalPrice.toLocaleString('de-CH')}.-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
