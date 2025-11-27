'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { CTA } from '@/components/CTA'
import { getAktuellesItems, getEventItems, AktuellesItem } from '@/components/AktuellesData'
import { AktuellesItemComponent } from '@/components/AktuellesItem'
import { ItemDetailModal } from '@/components/ItemDetailModal'
import { PeaBullet } from '@/components/PeaBullet'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<AktuellesItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleItemClick = (item: AktuellesItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }
  return (
    <>
      <Header />
      <Hero
        title={
          <>
            Frisches Demeter Gemüse. <span className="hero-title-secondary">Fast jede Woche.</span>
          </>
        }
        subtitle=""
        image={{
          url: '/images/hero/header_homepage.JPG',
          description: 'biocò Gemüsegenossenschaft auf dem Geisshof'
        }}
      />
      <main className="main-content">
        <div className="bento-grid">
          <section id="A-02" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Willkommen bei biocò</h3>
            </div>
            <div className="card-body">
              <p className="card-text">biocò ist eine Gemüsegenossenschaft in der Region Baden-Brugg, die seit 2014 auf dem Geisshof in Gebenstorf eine Vielzahl von Biogemüse in Demeter-Qualität anbaut und wöchentlich an ihre Mitglieder verteilt.</p>
              <div className="button-group"></div>
            </div>
          </section>

          <section id="A-03" className="bento-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Das ist drin: Saisonal & Demeter</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Wöchentlich erhalten unsere Mitglieder einen Gemüsekorb mit frischem, saisonalem Gemüse in Demeter-Qualität.</p>
              <div className="pea-bullet-list">
                <PeaBullet>Wöchentlicher Gemüsekorb</PeaBullet>
                <PeaBullet>Saisonalität – das Gemüse der Jahreszeit</PeaBullet>
                <PeaBullet>Demeter-Qualität – höchste Bio-Standards</PeaBullet>
              </div>
            </div>
          </section>

          <div className="home-middle-row">
            <section id="A-04" className="bento-card">
              <div className="plant-pattern"></div>
              <div className="card-header">
                <h3>Gemeinschaft & Solidarität</h3>
              </div>
              <div className="card-body">
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <Image
                    src="/images/gemeinschaft/bioco_gemeinschaft.JPG"
                    alt="Gemeinschaft bei biocò"
                    width={800}
                    height={600}
                    style={{ width: '80%', maxWidth: '360px', height: 'auto', borderRadius: '12px' }}
                  />
                </div>
                <p className="card-text">biocò basiert auf den Prinzipien der Solidarischen Landwirtschaft.</p>
                <div className="pea-bullet-list">
                  <PeaBullet>
                    <strong>Mitarbeit</strong> – <Link href="/anpacken">Anpacken auf dem Feld</Link>
                  </PeaBullet>
                  <PeaBullet>
                    <strong>Transparenz</strong> – Solidarische Landwirtschaft
                  </PeaBullet>
                  <PeaBullet>
                    <strong>Gemeinschaft</strong> – Jede(r) bringt sich ein
                  </PeaBullet>
                  <PeaBullet>
                    <strong>Lokal/Region</strong> – <Link href="/wir">Hof: Geisshof</Link>
                  </PeaBullet>
                </div>
              </div>
            </section>

            <section id="A-07" className="bento-card">
              <div className="plant-pattern"></div>
              <div className="card-header">
                <h3>Aktuelles</h3>
              </div>
              <div className="card-body">
                <div className="aktuelles-list">
                  {getAktuellesItems().map((item, index) => (
                    <AktuellesItemComponent 
                      key={item.id || index} 
                      item={item} 
                      variant="aktuelles"
                      onClick={handleItemClick}
                    />
                  ))}
                </div>
                <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Alle Neuigkeiten ansehen
                </Link>
              </div>
            </section>

            <section id="A-08" className="bento-card events-card">
              <div className="plant-pattern"></div>
              <div className="card-header">
                <h3>Nächste Events</h3>
              </div>
              <div className="card-body">
                <div className="events-list">
                  {getEventItems().map((item, index) => (
                    <AktuellesItemComponent 
                      key={item.id || index} 
                      item={item} 
                      variant="event"
                      onClick={handleItemClick}
                    />
                  ))}
                </div>
                <Link href="/aktuelles" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Alle Events ansehen
                </Link>
              </div>
            </section>
          </div>

          <section id="A-05" className="bento-card bento-card-fullwidth">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Wie funktioniert's?</h3>
            </div>
            <div className="card-body">
              <div className="procedure-steps">
              <div className="procedure-step">
                <div className="step-icon">1</div>
                <div className="step-content">
                  <h3>Anmelden als Mitglied oder Schnupperabo</h3>
                  <p>Entscheide dich für ein <Link href="/abos">Abo</Link> oder teste mit einem <Link href="/anpacken">Schnupperabo</Link></p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">2</div>
                <div className="step-content">
                  <h3>Rechnung bezahlen</h3>
                  <p>Du erhältst eine Rechnung und bezahlst den Beitrag für dein Abo</p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">3</div>
                <div className="step-content">
                  <h3>Arbeitseinsätze planen</h3>
                  <p>Organisiere deine <Link href="/anpacken">Mitarbeit auf dem Feld</Link> oder in der Logistik</p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">4</div>
                <div className="step-content">
                  <h3>Gemüse abholen</h3>
                  <p>Wöchentlich holst du deinen Gemüsekorb in einem der <Link href="/depots">Standorte</Link> ab</p>
                </div>
              </div>
              <div className="procedure-step">
                <div className="step-icon">5</div>
                <div className="step-content">
                  <h3>Geniessen und teilen</h3>
                  <p>Geniesse dein frisches Gemüse und teile deine Erlebnisse mit uns auf <a href="https://www.instagram.com/bioco.ch" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* Möchtest du uns kennenlernen - Am Ende */}
          <section id="B-06" className="bento-card bento-card-fullwidth kennenlernen-card">
            <div className="plant-pattern"></div>
            <div className="card-header">
              <h3>Möchtest du uns kennenlernen?</h3>
            </div>
            <div className="card-body">
              <p className="card-text">Es können viele Fragen auftauchen, die wir auf dieser Website nicht allesamt beantworten können. Du hast die Möglichkeit, den Hof und uns an den regulären Schnuppertagen kennenzulernen. Oder du kannst dich via Kontaktformular bei uns melden und wir beantworten deine Fragen persönlich.</p>
              <div style={{ marginTop: '16px', display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                <CTA
                  text="Nimm Kontakt auf"
                  href="/kontakt"
                  variant="primary"
                />
                <CTA
                  text="Zu uns finden"
                  href="/depots"
                  variant="secondary"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ItemDetailModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  )
}
