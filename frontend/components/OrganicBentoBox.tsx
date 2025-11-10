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
  // Professional organic SVG paths - natural, flowing curves
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Apple shape - natural, rounded with slight indent
        return "M 20 15 Q 15 10 20 8 Q 30 5 40 8 Q 50 10 55 15 Q 60 20 62 30 Q 63 40 61 50 Q 58 60 53 65 Q 48 70 40 72 Q 32 74 25 70 Q 18 66 15 58 Q 12 50 13 40 Q 14 30 16 22 Q 18 18 20 15 Z M 35 8 Q 37 10 38 12 Q 37 10 35 8 Z"
      case 'carrot':
        // Carrot shape - organic, tapering
        return "M 50 3 Q 52 5 54 8 Q 56 12 57 18 Q 58 25 59 32 Q 59 40 58 48 Q 57 56 55 62 Q 53 68 50 72 Q 47 76 44 74 Q 41 72 39 68 Q 37 64 36 58 Q 35 52 35 45 Q 35 38 36 30 Q 37 22 39 15 Q 41 8 44 5 Q 47 3 50 3 Z"
      case 'beet':
        // Beetroot shape - rounded, bulbous
        return "M 50 5 Q 60 3 68 8 Q 75 13 78 20 Q 80 28 79 38 Q 78 48 74 56 Q 70 64 64 68 Q 58 72 50 73 Q 42 74 36 70 Q 30 66 26 58 Q 22 50 21 40 Q 20 30 22 22 Q 24 14 28 9 Q 32 5 40 4 Q 45 4 50 5 Z"
      default:
        return ""
    }
  }

  const getBackgroundColor = () => {
    switch (type) {
      case 'apple':
        return '#dc2626' // Red
      case 'carrot':
        return '#ea580c' // Orange
      case 'beet':
        return '#991b1b' // Deep red (beet)
      default:
        return '#ffffff'
    }
  }

  const getBorderColor = () => {
    switch (type) {
      case 'apple':
        return '#b91c1c'
      case 'carrot':
        return '#c2410c'
      case 'beet':
        return '#7f1d1d'
      default:
        return '#000000'
    }
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
      }}
    >
      <div className="bento-content-wrapper">
        {children}
      </div>
    </div>
  )
}

