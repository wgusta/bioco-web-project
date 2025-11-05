'use client'

import { useState } from 'react'
import Image from 'next/image'

type FilterType = 'all' | 'körbe' | 'feld' | 'portraits'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: FilterType
}

// Placeholder images - should be replaced with actual images from ProcessWire
const GALLERY_IMAGES: GalleryImage[] = [
  // These would come from ProcessWire CMS
  // For now, using placeholder structure
]

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Alles' },
    { id: 'körbe', label: 'Körbe' },
    { id: 'feld', label: 'Feld' },
    { id: 'portraits', label: 'Portraits' },
  ]

  const filteredImages = activeFilter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeFilter)

  return (
    <div className="gallery-container">
      <div className="gallery-filters">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`gallery-filter ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {GALLERY_IMAGES.length > 0 ? (
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery-placeholder">
          <p>Galerie-Bilder werden geladen...</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Die Galerie wird in Kürze mit Bildern aus dem Geisshof gefüllt.
          </p>
        </div>
      )}
    </div>
  )
}
