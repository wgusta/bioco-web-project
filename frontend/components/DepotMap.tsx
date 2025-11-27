'use client'

import { useEffect, useRef } from 'react'

interface DepotLocation {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  day: 'Dienstag' | 'Freitag' | 'Beide'
  contact?: string
  phone?: string
  notes?: string
}

// Specific depot locations from Gemüseausliefertour document
const depotLocations: DepotLocation[] = [
  // Dienstag (Tuesday) depots
  {
    id: 'chraettli',
    name: 'Depot Chrättli',
    address: 'Allmendstrasse 16, 5400 Baden',
    lat: 47.4760,
    lng: 8.3050,
    day: 'Dienstag',
    contact: 'Corona Banky',
    phone: '079 602 68 06',
    notes: 'Quartierladen. Rechts neben dem Laden hat es eine Rampe. Unter der Rampe ist das Depot.'
  },
  {
    id: 'ohne',
    name: 'Depot Ohne',
    address: 'Stadtturmstrasse 15, 5400 Baden',
    lat: 47.4740,
    lng: 8.3080,
    day: 'Dienstag',
    contact: 'Tobias Kloter',
    phone: '076 310 75 86',
    notes: 'Körbe unter die hinteren Tische stellen, leere Körbe und Klammern sind unter den vorderen Tischen.'
  },
  {
    id: 'anixis',
    name: 'Depot Anixis',
    address: 'Oberstadtstrasse 10, Galerie Anixis, 5400 Baden',
    lat: 47.4720,
    lng: 8.3100,
    day: 'Dienstag',
    contact: 'Josef Lindiridi',
    phone: '078 777 56 54',
    notes: 'Infrarotsender hinter der Barriere. Körbe auf das Materiallager stellen.'
  },
  {
    id: 'casa-flora',
    name: 'Casa Flora',
    address: 'Zurzacherstrasse 171, 5200 Brugg',
    lat: 47.4850,
    lng: 8.2100,
    day: 'Dienstag',
    contact: 'David Müller',
    phone: '079 948 42 69',
    notes: 'Zufahrt via Einfahrt ab Hauptstrasse. Körbe in der Nische zum hinteren Eingang des Blumengeschäfts.'
  },
  // Freitag (Friday) depots
  {
    id: 'geisshof',
    name: 'Depot Geisshof',
    address: 'Geisshof, Gebenstorf',
    lat: 47.4800,
    lng: 8.2400,
    day: 'Freitag',
    contact: 'Matthias Müller',
    phone: '077 936 72 79'
  },
  {
    id: 'kupperhaus',
    name: 'Depot Kupperhaus',
    address: 'Schulthess-Allee 4, 5200 Brugg',
    lat: 47.4854,
    lng: 8.2083,
    day: 'Freitag',
    contact: 'Brigitte Perren Henneck',
    phone: '056 441 69 71',
    notes: 'Rückwärts neben dem Kupperhaus hinunterfahren bis auf Höhe Rampe. Körbe die Rampe hinunterbringen.'
  },
  {
    id: 'ennetbaden',
    name: 'Depot Ennetbaden',
    address: 'Geissbergstrasse 17, 5408 Ennetbaden',
    lat: 47.4811,
    lng: 8.3194,
    day: 'Freitag',
    contact: 'Nils und Armelle George',
    phone: '079 879 44 50'
  },
  {
    id: 'lemonia',
    name: 'Depot Lemonia',
    address: 'Schartenstrasse 28, 5430 Wettingen',
    lat: 47.4586,
    lng: 8.3175,
    day: 'Freitag',
    contact: 'Martin Gruchow',
    phone: '076 582 87 67',
    notes: 'Körbe hinter dem Haus unter den Tisch stellen.'
  },
  {
    id: 'laegernstrasse',
    name: 'Depot Lägernstrasse',
    address: 'Lägernstrasse 6, 5430 Wettingen',
    lat: 47.4600,
    lng: 8.3200,
    day: 'Freitag',
    contact: 'Helen Matthäus',
    phone: '056 633 36 85'
  },
]

export function DepotMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    // Load Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
    link.crossOrigin = ''
    document.head.appendChild(link)

    // Load Leaflet JS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
    script.crossOrigin = ''
    
    script.onload = () => {
      // Initialize map - non-interactive
      const L = (window as any).L
      const map = L.map(mapContainerRef.current!, {
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        boxZoom: false,
        keyboard: false,
        zoomControl: false,
      }).setView([47.4734, 8.3089], 12)

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map)

      // Add markers for each depot
      depotLocations.forEach((depot) => {
        const marker = L.marker([depot.lat, depot.lng]).addTo(map)
        const popupContent = `
          <div style="padding: 8px;">
            <strong>${depot.name}</strong><br>
            ${depot.address}<br>
            <small><strong>${depot.day}</strong></small><br>
            ${depot.contact ? `<small>Kontakt: ${depot.contact}</small><br>` : ''}
            ${depot.phone ? `<small>Tel: ${depot.phone}</small>` : ''}
          </div>
        `
        marker.bindPopup(popupContent)
      })

      // Fit map to show all markers
      const group = new L.FeatureGroup(depotLocations.map(d => L.marker([d.lat, d.lng])))
      map.fitBounds(group.getBounds().pad(0.1))
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (link.parentNode) link.parentNode.removeChild(link)
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

  return (
    <>
      <div className="map-container">
        <div ref={mapContainerRef} className="map-wrapper" />
      </div>
      
      <div className="location-info-box">
        <div className="location-addresses">
          <h4>Depot-Standorte</h4>
          <div className="address-list">
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <h5 style={{ color: 'var(--bioco-green)', marginBottom: 'var(--spacing-sm)' }}>Dienstag</h5>
              {depotLocations.filter(d => d.day === 'Dienstag').map((depot) => (
                <div key={depot.id} className="address-item" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>{depot.name}</strong>
                  <p>{depot.address}</p>
                  {depot.contact && <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Kontakt: {depot.contact} {depot.phone && `(${depot.phone})`}</p>}
                  {depot.notes && <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{depot.notes}</p>}
                </div>
              ))}
            </div>
            <div>
              <h5 style={{ color: 'var(--bioco-orange)', marginBottom: 'var(--spacing-sm)' }}>Freitag</h5>
              {depotLocations.filter(d => d.day === 'Freitag').map((depot) => (
                <div key={depot.id} className="address-item" style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <strong>{depot.name}</strong>
                  <p>{depot.address}</p>
                  {depot.contact && <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Kontakt: {depot.contact} {depot.phone && `(${depot.phone})`}</p>}
                  {depot.notes && <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>{depot.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="location-directions">
          <h4>Routen</h4>
          <div className="directions-list">
            {depotLocations.map((depot) => (
              <div key={depot.id} className="direction-item">
                <strong>{depot.name}</strong>
                <small style={{ display: 'block', color: 'var(--text-secondary)', marginBottom: '4px' }}>{depot.day}</small>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${depot.lat},${depot.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Route planen →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
