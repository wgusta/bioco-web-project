import Link from 'next/link'

interface EventsBannerProps {
  title?: string
}

export function EventsBanner({ title = 'Nächste Events' }: EventsBannerProps) {
  return (
    <section className="wireframe-box events-banner">
      <h2>{title}</h2>
      <ul>
        <li><strong>24.10.2025:</strong> Letzter biocò Schnuppertag des Jahres auf dem Geisshof</li>
        <li><strong>15.11.2025:</strong> Fondue-Abend</li>
        <li><strong>27.11.2025:</strong> Außerordentliche Generalversammlung</li>
      </ul>
      <p>
        <Link href="/aktuelles" className="button-link secondary">Alle Events ansehen</Link>
      </p>
    </section>
  )
}
