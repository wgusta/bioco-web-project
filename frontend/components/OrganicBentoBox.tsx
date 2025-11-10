'use client'

import React from 'react'

interface OrganicBentoBoxProps {
  type: 'apple' | 'carrot' | 'beet' | 'bushbean' | 'cucumber' | 'violet' | 'beige' | 'yellow'
  colSpan?: number
  rowSpan?: number
  className?: string
  children: React.ReactNode
  noBorder?: boolean // Option to hide border
}

export function OrganicBentoBox({ type, colSpan = 1, rowSpan = 1, className = '', children, noBorder = false }: OrganicBentoBoxProps) {
  // Horizontal organic SVG paths - much larger inner area to prevent content clipping
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Horizontal apple shape - FULL width (0-100) with organic curves
        return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
      case 'carrot':
        // Horizontal carrot shape - FULL width (0-100) with organic curves
        return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
      case 'beet':
        // Horizontal beetroot shape - FULL width (0-100) with organic curves
        return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
      case 'bushbean':
        // Long bush bean shape - elongated, organic
        return "M 2 50 Q 1 40 2 30 Q 3 20 5 15 Q 7 10 10 8 Q 13 6 16 6 Q 19 6 22 8 Q 25 10 27 15 Q 29 20 30 30 Q 31 40 30 50 Q 31 60 30 70 Q 29 80 27 85 Q 25 90 22 92 Q 19 94 16 94 Q 13 94 10 92 Q 7 90 5 85 Q 3 80 2 70 Q 1 60 2 50 Z"
      case 'cucumber':
        // Long cucumber shape - elongated, tapering (shorter than bushbean)
        return "M 3 50 Q 2 40 3 30 Q 4 20 6 16 Q 8 12 11 10 Q 14 8 17 8 Q 20 8 23 10 Q 26 12 28 16 Q 30 20 31 30 Q 32 40 31 50 Q 32 60 31 70 Q 30 80 28 84 Q 26 88 23 90 Q 20 92 17 92 Q 14 92 11 90 Q 8 88 6 84 Q 4 80 3 70 Q 2 60 3 50 Z"
      case 'violet':
        // Horizontal violet shape - FULL width (0-100) with organic curves
        return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
      case 'beige':
        // Horizontal beige shape - FULL width (0-100) with organic curves
        return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
      case 'yellow':
        // Horizontal yellow shape - FULL width (0-100) with organic curves
        return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
      default:
        return ""
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case 'apple':
        return 'rgba(134, 239, 172, 0.7)' // Light green, more opaque for visibility
      case 'carrot':
        return 'rgba(254, 215, 170, 0.7)' // Light orange, more opaque for visibility
      case 'beet':
        return 'rgba(252, 165, 165, 0.7)' // Light red/pink, more opaque for visibility
      case 'bushbean':
        return 'rgba(139, 90, 43, 0.9)' // Brown for bush bean (primary nav) - more opaque
      case 'cucumber':
        return 'rgba(255, 182, 193, 0.9)' // Light red/pink for cucumber (secondary nav) - more opaque
      case 'violet':
        return 'rgba(196, 181, 253, 0.7)' // Light violet/purple
      case 'beige':
        return 'rgba(245, 230, 201, 0.7)' // Light beige/tan
      case 'yellow':
        return 'rgba(254, 240, 138, 0.7)' // Light yellow
      default:
        return 'rgba(255, 255, 255, 0.7)'
    }
  }

  const getBorderColor = () => {
    // Always black border
    return '#000000'
  }

  const colSpanClasses: Record<number, string> = {
    1: 'col-span-1', 2: 'col-span-2', 3: 'col-span-3', 4: 'col-span-4',
    5: 'col-span-5', 6: 'col-span-6', 7: 'col-span-7', 8: 'col-span-8',
    9: 'col-span-9', 10: 'col-span-10', 11: 'col-span-11', 12: 'col-span-12',
  }

  const rowSpanClasses: Record<number, string> = {
    1: 'row-span-1', 2: 'row-span-2', 3: 'row-span-3', 4: 'row-span-4',
  }

  return (
    <div
      className={`organic-bento-box ${colSpanClasses[colSpan] || 'col-span-1'} ${rowSpanClasses[rowSpan] || 'row-span-1'} ${className}`}
    >
      {/* SVG for shape and border */}
      <svg
        className="bento-svg-shape"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background shape - shifted 3px horizontally for offset effect */}
        <path
          d={getSVGPath()}
          fill={getBackgroundColor()}
          transform="translate(3, 0)"
        />
        {/* Black border following organic shape - original position (hidden if noBorder) */}
        {!noBorder && (
          <path
            d={getSVGPath()}
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      {/* Content wrapper - NO MASK to allow full content visibility */}
      <div className="bento-content-wrapper">
        {children}
      </div>
    </div>
  )
}

