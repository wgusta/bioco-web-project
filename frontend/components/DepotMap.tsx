'use client'

import { useEffect, useRef } from 'react'

interface DepotLocation {
  id: string
  name: string
  address: string
  lat: number
  lng: number
  times?: string
}

// Bioco depot locations - update with actual addresses and coordinates
const depotLocations: DepotLocation[] = [
  {
    id: 'baden',
    name: 'Baden',
    address: 'Baden, Schweiz',
    lat: 47.4734,
    lng: 8.3089,
    times: 'Dienstag 17:00-19:00, Freitag 17:00-19:00'
  },
  {
    id: 'brugg',
    name: 'Brugg',
    address: 'Brugg, Schweiz',
    lat: 47.4854,
    lng: 8.2083,
    times: 'Dienstag 17:00-19:00, Freitag 17:00-19:00'
  },
  {
    id: 'wettingen',
    name: 'Wettingen',
    address: 'Wettingen, Schweiz',
    lat: 47.4586,
    lng: 8.3175,
    times: 'Dienstag 17:00-19:00, Freitag 17:00-19:00'
  },
  {
    id: 'windisch',
    name: 'Windisch',
    address: 'Windisch, Schweiz',
    lat: 47.4789,
    lng: 8.2167,
    times: 'Dienstag 17:00-19:00, Freitag 17:00-19:00'
  },
  {
    id: 'ennetbaden',
    name: 'Ennetbaden',
    address: 'Ennetbaden, Schweiz',
    lat: 47.4811,
    lng: 8.3194,
    times: 'Dienstag 17:00-19:00, Freitag 17:00-19:00'
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
            ${depot.times ? `<small>${depot.times}</small>` : ''}
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
          <h4>Adressen</h4>
          <div className="address-list">
            {depotLocations.map((depot) => (
              <div key={depot.id} className="address-item">
                <strong>{depot.name}</strong>
                <p>{depot.address}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="location-directions">
          <h4>Routen</h4>
          <div className="directions-list">
            {depotLocations.map((depot) => (
              <div key={depot.id} className="direction-item">
                <strong>{depot.name}</strong>
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
