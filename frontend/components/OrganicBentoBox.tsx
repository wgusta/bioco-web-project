'use client'

import React from 'react'

interface OrganicBentoBoxProps {
  type: 'apple' | 'carrot' | 'beet'
  colSpan?: number
  rowSpan?: number
  className?: string
  children: React.ReactNode
}

export function OrganicBentoBox({ type, colSpan = 1, rowSpan = 1, className = '', children }: OrganicBentoBoxProps) {
  // Horizontal organic SVG paths - much wider than tall
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Horizontal apple shape - wide oval
        return "M 5 50 Q 3 40 5 30 Q 8 20 15 15 Q 22 10 30 10 Q 38 10 45 15 Q 52 20 55 30 Q 57 40 55 50 Q 57 60 55 70 Q 52 80 45 85 Q 38 90 30 90 Q 22 90 15 85 Q 8 80 5 70 Q 3 60 5 50 Z"
      case 'carrot':
        // Horizontal carrot shape - wide, tapering
        return "M 3 50 Q 2 40 3 30 Q 5 20 10 15 Q 15 10 22 10 Q 28 10 33 15 Q 38 20 40 30 Q 41 40 41 50 Q 41 60 40 70 Q 38 80 33 85 Q 28 90 22 90 Q 15 90 10 85 Q 5 80 3 70 Q 2 60 3 50 Z"
      case 'beet':
        // Horizontal beetroot shape - wide, rounded
        return "M 4 50 Q 2 40 4 30 Q 6 20 12 15 Q 18 10 26 10 Q 34 10 40 15 Q 46 20 48 30 Q 50 40 48 50 Q 50 60 48 70 Q 46 80 40 85 Q 34 90 26 90 Q 18 90 12 85 Q 6 80 4 70 Q 2 60 4 50 Z"
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
      {/* SVG for shape, border, and details */}
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
        {/* Black border following organic shape - original position */}
        <path
          d={getSVGPath()}
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

