'use client'

import { useEffect, useRef } from 'react'

// Geisshof location
const geisshofLocation = {
  name: 'Geisshof',
  address: 'Geisslistrasse, Gebenstorf, Schweiz',
  lat: 47.4819,
  lng: 8.2389,
}

export function GeisshofMap() {
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
      }).setView([geisshofLocation.lat, geisshofLocation.lng], 14)

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map)

      // Add marker for Geisshof
      const marker = L.marker([geisshofLocation.lat, geisshofLocation.lng]).addTo(map)
      const popupContent = `
        <div style="padding: 8px;">
          <strong>Geisshof</strong><br>
          ${geisshofLocation.address}<br>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Geisslistrasse, Gebenstorf, Schweiz')}" 
             target="_blank" 
             rel="noopener noreferrer"
             style="color: #2e7d32; text-decoration: underline;">
            Route anzeigen →
          </a>
        </div>
      `
      marker.bindPopup(popupContent).openPopup()
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
          <h4>Adresse</h4>
          <div className="address-list">
            <div className="address-item">
              <strong>{geisshofLocation.name}</strong>
              <p>{geisshofLocation.address}</p>
            </div>
          </div>
        </div>
        
        <div className="location-directions">
          <h4>Route</h4>
          <div className="directions-list">
            <div className="direction-item">
              <strong>{geisshofLocation.name}</strong>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(geisshofLocation.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Route planen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
