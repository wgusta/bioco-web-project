import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganicBentoBox } from '@/components/OrganicBentoBox'
import { OrganicButton } from '@/components/OrganicButton'
import { OrganicNumberBadge } from '@/components/OrganicNumberBadge'

export default function DankePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-earth-white">
        <div className="bento-grid-container py-12">
          <OrganicBentoBox type="beet" colSpan={12} rowSpan={1} className="md:col-span-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 drop-shadow-lg">Vielen Dank für deine Anmeldung!</h1>
            <p className="text-lg text-gray-800 mb-6 drop-shadow-md">
              Wir prüfen deine Anmeldung. In der Zwischenzeit kannst du unseren Mitgliederbereich schon anschauen. 
              Klicke dafür oben rechts auf das Intranet-Icon.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <OrganicNumberBadge number={1} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bestätigungs-E-Mail</h3>
                  <p className="text-sm text-gray-800">Du erhältst eine E-Mail mit Bestätigungslink (Double Opt-In). Bitte bestätige deine Anmeldung.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <OrganicNumberBadge number={2} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Rechnung</h3>
                  <p className="text-sm text-gray-800">Nach Bestätigung erhältst du eine Rechnung per 31. Januar. Du kannst quartalsweise oder das ganze Jahr bezahlen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <OrganicNumberBadge number={3} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Start</h3>
                  <p className="text-sm text-gray-800">Du erhältst Zugang zum Intranet und kannst deine Arbeitseinsätze planen. Ab Januar startet die Gemüseverteilung!</p>
                </div>
              </div>
            </div>

            <div className="mb-6 p-6 bg-white bg-opacity-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Fragen?</h3>
              <p className="text-gray-800 mb-3">Bei Fragen zur Anmeldung oder zu biocò kannst du uns jederzeit kontaktieren:</p>
              <OrganicButton href="mailto:info@bioco.ch" variant="beet" className="text-sm">
                info@bioco.ch
              </OrganicButton>
            </div>

            <div className="mt-6">
              <OrganicButton href="/" variant="beet">
                Zurück zur Startseite
              </OrganicButton>
            </div>
          </OrganicBentoBox>
        </div>
      </div>
      <Footer />
    </>
  )
}
