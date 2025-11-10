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
  // Organic SVG paths inspired by fruit icons - natural, flowing curves
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Apple shape - organic, rounded like icon
        return "M 50 8 Q 45 5 40 8 Q 35 12 32 18 Q 30 25 30 32 Q 30 40 32 48 Q 35 55 40 60 Q 45 65 50 67 Q 55 65 60 60 Q 65 55 68 48 Q 70 40 70 32 Q 70 25 68 18 Q 65 12 60 8 Q 55 5 50 8 Z M 50 8 Q 48 6 46 8 Q 45 10 46 12 Q 48 10 50 8 Z"
      case 'carrot':
        // Carrot shape - organic, tapering like icon
        return "M 50 2 Q 52 4 54 8 Q 56 12 57 18 Q 58 25 59 32 Q 59 40 58 48 Q 57 56 55 62 Q 53 68 50 72 Q 47 76 44 74 Q 41 72 39 68 Q 37 64 36 58 Q 35 52 35 45 Q 35 38 36 30 Q 37 22 39 15 Q 41 8 44 5 Q 47 2 50 2 Z"
      case 'beet':
        // Beetroot shape - rounded, bulbous like icon
        return "M 50 5 Q 60 3 68 8 Q 75 13 78 20 Q 80 28 79 38 Q 78 48 74 56 Q 70 64 64 68 Q 58 72 50 73 Q 42 74 36 70 Q 30 66 26 58 Q 22 50 21 40 Q 20 30 22 22 Q 24 14 28 9 Q 32 5 40 4 Q 45 4 50 5 Z"
      default:
        return ""
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case 'apple':
        return 'rgba(134, 239, 172, 0.4)' // Light green, semi-transparent
      case 'carrot':
        return 'rgba(254, 215, 170, 0.4)' // Light orange, semi-transparent
      case 'beet':
        return 'rgba(252, 165, 165, 0.4)' // Light red/pink, semi-transparent
      default:
        return 'rgba(255, 255, 255, 0.4)'
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
      style={{
        backgroundColor: getBackgroundColor(),
        borderColor: getBorderColor(),
        WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='${getSVGPath()}' fill='black'/></svg>`)}")`,
        maskImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='${getSVGPath()}' fill='black'/></svg>`)}")`,
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        backdropFilter: 'blur(2px)',
      }}
    >
      <div className="bento-content-wrapper">
        {children}
      </div>
    </div>
  )
}

