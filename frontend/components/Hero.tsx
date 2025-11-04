import Image from 'next/image'

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
    <section id="hero" className="wireframe-box hero">
      <div className="wireframe-content">
        {image ? (
          <div id="hero-image" className="wireframe-image hero-image">
            <Image
              src={image.url}
              alt={image.description}
              width={1200}
              height={400}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
        ) : (
          <div id="hero-image" className="wireframe-placeholder">
            <span className="wireframe-label">Hero Image</span>
          </div>
        )}
        <div id="hero-text" className="wireframe-box hero-text">
          <h1 id="hero-title" className="hero-title">{title}</h1>
          {subtitle && (
            <p id="hero-subtitle" className="hero-subtitle">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  )
}
