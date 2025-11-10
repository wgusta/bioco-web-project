'use client'

import React from 'react'

interface OrganicBentoBoxProps {
  type: 'apple' | 'carrot' | 'beet' | 'bushbean' | 'cucumber'
  colSpan?: number
  rowSpan?: number
  className?: string
  children: React.ReactNode
  noBorder?: boolean // Option to hide border
}

export function OrganicBentoBox({ type, colSpan = 1, rowSpan = 1, className = '', children, noBorder = false }: OrganicBentoBoxProps) {
  // Horizontal organic SVG paths - larger inner area to prevent content clipping
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Horizontal apple shape - larger, more inner space
        return "M 2 50 Q 0 35 2 20 Q 5 8 15 5 Q 25 2 35 2 Q 45 2 55 5 Q 65 8 68 20 Q 70 35 68 50 Q 70 65 68 80 Q 65 92 55 95 Q 45 98 35 98 Q 25 98 15 95 Q 5 92 2 80 Q 0 65 2 50 Z"
      case 'carrot':
        // Horizontal carrot shape - larger, more inner space
        return "M 1 50 Q 0 35 1 20 Q 3 8 10 5 Q 17 2 25 2 Q 33 2 40 5 Q 47 8 49 20 Q 50 35 50 50 Q 50 65 49 80 Q 47 92 40 95 Q 33 98 25 98 Q 17 98 10 95 Q 3 92 1 80 Q 0 65 1 50 Z"
      case 'beet':
        // Horizontal beetroot shape - larger, more inner space
        return "M 1 50 Q 0 35 1 20 Q 3 8 12 5 Q 21 2 30 2 Q 40 2 49 5 Q 58 8 60 20 Q 61 35 60 50 Q 61 65 60 80 Q 58 92 49 95 Q 40 98 30 98 Q 21 98 12 95 Q 3 92 1 80 Q 0 65 1 50 Z"
      case 'bushbean':
        // Long bush bean shape - elongated, organic
        return "M 2 50 Q 1 40 2 30 Q 3 20 5 15 Q 7 10 10 8 Q 13 6 16 6 Q 19 6 22 8 Q 25 10 27 15 Q 29 20 30 30 Q 31 40 30 50 Q 31 60 30 70 Q 29 80 27 85 Q 25 90 22 92 Q 19 94 16 94 Q 13 94 10 92 Q 7 90 5 85 Q 3 80 2 70 Q 1 60 2 50 Z"
      case 'cucumber':
        // Long cucumber shape - elongated, tapering (shorter than bushbean)
        return "M 3 50 Q 2 40 3 30 Q 4 20 6 16 Q 8 12 11 10 Q 14 8 17 8 Q 20 8 23 10 Q 26 12 28 16 Q 30 20 31 30 Q 32 40 31 50 Q 32 60 31 70 Q 30 80 28 84 Q 26 88 23 90 Q 20 92 17 92 Q 14 92 11 90 Q 8 88 6 84 Q 4 80 3 70 Q 2 60 3 50 Z"
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
        return 'rgba(134, 239, 172, 0.7)' // Light green for bush bean
      case 'cucumber':
        return 'rgba(187, 247, 208, 0.7)' // Light green for cucumber
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
      {/* Content wrapper with mask */}
      <div
        className="bento-content-wrapper"
        style={{
          WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='${getSVGPath()}' fill='black'/></svg>`)}")`,
          maskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='${getSVGPath()}' fill='black'/></svg>`)}")`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
        }}
      >
        {children}
      </div>
    </div>
  )
}

