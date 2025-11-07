import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  image?: {
    url: string
    description: string
  }
}

export function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="hero"
      style={image ? {
        backgroundImage: `url(${image.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div id="hero-text" className="hero-text">
          <h1 id="hero-title" className="hero-title">{title}</h1>
          {subtitle && (
            <p id="hero-subtitle" className="hero-subtitle">{subtitle}</p>
          )}
          <div className="hero-buttons">
            <Link href="/ernte" className="btn btn-primary">
              Was wächst gerade
            </Link>
            <Link href="/wir" className="btn btn-secondary">
              Lerne uns kennen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
