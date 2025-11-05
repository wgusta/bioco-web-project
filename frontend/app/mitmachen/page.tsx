import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { EventsBanner } from '@/components/EventsBanner'
import { MembershipForm } from '@/components/forms/MembershipForm'
import Link from 'next/link'

export default function MitmachenPage() {
  return (
    <>
      <Header />
      <Hero
        title="Werde jetzt Teil von biocò"
        subtitle="Kurze Einleitung; Foto Hände+Gemüse"
      />
      <main className="main-content">
        <div className="bento-grid">
          <section id="H-02" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Zuerst testen?</h2>
            <ul>
              <li><strong>Info-Event:</strong> Besuche einen unserer <Link href="/aktuelles">Schnuppertage</Link> und lerne biocò kennen</li>
              <li><strong>Probe-Abo:</strong> Teste unser Gemüseabo für 3 Monate – <Link href="/abos">mehr Infos</Link></li>
            </ul>
          </section>

          <section id="H-03" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Commitment-Check</h2>
            <p>Bevor du dich anmeldest, überprüfe diese Punkte:</p>
            <div className="commitment-checklist">
              <div className="commitment-item">
                <h3>Anteile</h3>
                <p>Für jeden Gemüsekorb benötigst du eine bestimmte Anzahl Anteilsscheine:</p>
                <ul>
                  <li>Halb: 1 Anteil (CHF 250)</li>
                  <li>Standard: 2 Anteile (CHF 500)</li>
                  <li>Doppel: 4 Anteile (CHF 1'000)</li>
                </ul>
                <p>Zusätzliche Anteilsscheine können erworben werden (CHF 250 pro Anteil).</p>
              </div>
              <div className="commitment-item">
                <h3>Beitrag</h3>
                <p>Jahresbeiträge für Gemüsekörbe:</p>
                <ul>
                  <li>Halb: CHF 750.-</li>
                  <li>Standard: CHF 1'280.-</li>
                  <li>Doppel: CHF 2'350.-</li>
                </ul>
                <p>Zahlung quartalsweise oder ganzes Jahr möglich.</p>
              </div>
              <div className="commitment-item">
                <h3>Bindung</h3>
                <p>Das Abo läuft vom 1. Januar bis 31. Dezember. Die Kündigungsfrist beträgt <strong>zwei Monate auf Ende eines Kalenderjahres</strong>. Ohne Kündigung verlängert sich das Abo automatisch.</p>
              </div>
              <div className="commitment-item">
                <h3>Mitarbeit</h3>
                <p>Jede(r) Mitglied bringt sich ein:</p>
                <ul>
                  <li>Halb: 20 Stunden pro Jahr (5 Halbtage alias "10 Rüebli")</li>
                  <li>Standard/Doppel: 40 Stunden pro Jahr</li>
                </ul>
                <p>Einsatzbereiche: Feld/Anbau, Logistik, Administration, Events. <Link href="/anpacken">Mehr erfahren →</Link></p>
              </div>
              <div className="commitment-item">
                <h3>Risiko</h3>
                <p>Wir teilen <strong>Arbeit, Ertrag und Risiko</strong> gemeinsam. Das bedeutet:</p>
                <ul>
                  <li>Bei Ernteausfall teilen wir das Risiko</li>
                  <li>Bei Überschuss teilen wir die Freude</li>
                  <li>Transparenz über Finanzen und Ernte</li>
                </ul>
                <p>Das ist das Prinzip der Solidarischen Landwirtschaft (CSA).</p>
              </div>
            </div>
          </section>

          <section id="H-04" className="bento-card bento-card-fullwidth">
            <div className="plant-pattern"></div>
            <h2>Anmeldung</h2>
            <MembershipForm />
          </section>

          <EventsBanner />

          <section id="H-06" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Nächste Schritte nach der Anmeldung</h2>
            <div className="next-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div>
                  <h3>Bestätigungs-E-Mail</h3>
                  <p>Du erhältst eine E-Mail mit Bestätigungslink (Double Opt-In). Bitte bestätige deine Anmeldung.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div>
                  <h3>Rechnung</h3>
                  <p>Nach Bestätigung erhältst du eine Rechnung per 31. Januar. Du kannst quartalsweise oder das ganze Jahr bezahlen.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div>
                  <h3>Start</h3>
                  <p>Du erhältst Zugang zum Intranet und kannst deine Arbeitseinsätze planen. Ab Januar startet die Gemüseverteilung!</p>
                </div>
              </div>
            </div>
          </section>

          <section id="H-07" className="bento-card bento-card-large">
            <div className="plant-pattern"></div>
            <h2>Häufige Fragen (FAQ)</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>Was passiert, wenn ich nicht genug Gemüse bekomme?</h3>
                <p>Wir teilen Arbeit, Ertrag und Risiko gemeinsam. Bei Ernteausfall aufgrund von Wetter oder anderen Umständen kann es vorkommen, dass die Ernte kleiner ausfällt. Dies ist Teil des CSA-Prinzips – wir tragen das Risiko gemeinsam.</p>
              </div>
              <div className="faq-item">
                <h3>Kann ich das Abo pausieren?</h3>
                <p>Das Abo läuft jährlich vom 1. Januar bis 31. Dezember. Eine Pausierung ist nicht möglich, aber du kannst mit einer Frist von 2 Monaten zum Jahresende kündigen.</p>
              </div>
              <div className="faq-item">
                <h3>Was, wenn ich umziehe?</h3>
                <p>Bei Umzug kannst du dein Depot wechseln. Kontaktiere uns einfach unter <a href="mailto:info@bioco.ch">info@bioco.ch</a> oder nutze das <Link href="/kontakt">Kontaktformular</Link>.</p>
              </div>
              <div className="faq-item">
                <h3>Wie funktioniert die Kündigung?</h3>
                <p>Die Kündigung muss spätestens <strong>2 Monate vor Ende des Kalenderjahres</strong> (also bis 31. Oktober) erfolgen. Schicke uns eine E-Mail oder nutze das Kontaktformular.</p>
              </div>
              <div className="faq-item">
                <h3>Was ist der Unterschied zwischen Anteilsscheinen und Abo?</h3>
                <p><strong>Anteilsscheine</strong> sind Genossenschaftsanteile (CHF 250 pro Anteil), die für die Mitgliedschaft benötigt werden. Das <strong>Gemüseabo</strong> ist der Jahresbeitrag für den wöchentlichen Gemüsekorb. Beide sind für ein Gemüseabo nötig.</p>
              </div>
              <div className="faq-item">
                <h3>Kann ich mehrere Anteilsscheine kaufen?</h3>
                <p>Ja! Du kannst zusätzliche Anteilsscheine erwerben, auch ohne Gemüsekorb. Mehr Anteile bedeuten mehr Mitspracherecht und stärkere Unterstützung der Genossenschaft.</p>
              </div>
              <div className="faq-item">
                <h3>Wie plane ich meine Arbeitseinsätze?</h3>
                <p>Nach der Anmeldung erhältst du Zugang zum Intranet. Dort kannst du deine bevorzugten Tage, Zeiten und Tätigkeitsbereiche angeben und Arbeitseinsätze planen.</p>
              </div>
              <div className="faq-item">
                <h3>Was ist ein Probe-Abo?</h3>
                <p>Ein Probe-Abo läuft über 3 Monate und ermöglicht dir, biocò kennenzulernen. Du zahlst den proportionalen Anteil am Jahrespreis. Eine Umstellung auf ein Jahresabo ist jederzeit möglich.</p>
              </div>
            </div>
          </section>

          <section id="H-08" className="bento-card">
            <div className="plant-pattern"></div>
            <h2>Warteliste</h2>
            <p>Wenn alle Gemüsekörbe vergeben sind, kannst du dich auf die Warteliste setzen lassen. Du erhältst Vorrang, wenn ein Platz frei wird.</p>
            <p>Genossenschafter/innen mit Anteilsscheinen (auch ohne Abo) haben Vorrang auf der Warteliste.</p>
            <Link href="/warteliste" className="btn btn-secondary" style={{ marginTop: '16px', display: 'inline-block' }}>
              Auf Warteliste setzen
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}