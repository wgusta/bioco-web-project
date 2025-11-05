'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import { trackEvent } from '@/components/MatomoScript'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

function DOIConfirmContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [confirmed, setConfirmed] = useState(false)
  const [error, setError] = useState('')
  const [formType, setFormType] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      setError('Kein Bestätigungstoken angegeben.')
      setLoading(false)
      return
    }

    const confirmDOI = async () => {
      try {
        const response = await fetch(`/api/doi/confirm?token=${token}`)
        const data = await response.json()

        if (data.success) {
          setConfirmed(true)
          setFormType(data.form_type)
          trackEvent('DOI', 'Confirm', data.form_type)
        } else {
          setError(data.error || 'Ungültiger oder abgelaufener Bestätigungslink.')
          trackEvent('DOI', 'Error', data.form_type || 'unknown')
        }
      } catch (err) {
        setError('Es ist ein Fehler aufgetreten.')
        trackEvent('DOI', 'Error', 'unknown')
      } finally {
        setLoading(false)
      }
    }

    confirmDOI()
  }, [token])

  if (loading) {
    return (
      <>
        <Header />
        <main className="main-content">
          <div className="bento-grid">
            <section className="bento-card">
              <div className="plant-pattern"></div>
              <p>Bitte warten...</p>
            </section>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="bento-grid">
          {confirmed ? (
            <section className="bento-card bento-card-large">
              <div className="plant-pattern"></div>
              <h1>Anmeldung bestätigt</h1>
              <p>Vielen Dank! Ihre Anmeldung wurde erfolgreich bestätigt.</p>
              
              {formType === 'subscribe' && (
                <p>Sie erhalten ab sofort unseren Newsletter.</p>
              )}
              {formType === 'visit' && (
                <p>Wir haben Ihre Anmeldung für den Tag der offenen Tür erhalten und werden uns bald bei Ihnen melden.</p>
              )}
              {formType === 'waiting_list' && (
                <p>Wir haben Sie auf die Warteliste gesetzt und werden uns bei Verfügbarkeit bei Ihnen melden.</p>
              )}
              {formType === 'contact' && (
                <p>Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.</p>
              )}
            </section>
          ) : (
            <section className="bento-card bento-card-large">
              <div className="plant-pattern"></div>
              <h1>Bestätigung fehlgeschlagen</h1>
              <p>{error}</p>
              <p><Link href="/">Zurück zur Startseite</Link></p>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function DOIConfirmPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <main className="main-content">
          <div className="bento-grid">
            <section className="bento-card">
              <div className="plant-pattern"></div>
              <p>Bitte warten...</p>
            </section>
          </div>
        </main>
        <Footer />
      </>
    }>
      <DOIConfirmContent />
    </Suspense>
  )
}