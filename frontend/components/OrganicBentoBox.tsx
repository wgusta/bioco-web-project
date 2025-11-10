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
  // Professional organic SVG paths - subtle, not childish
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Apple shape - subtle organic curves
        return "M 10 20 Q 15 10 25 15 Q 35 20 40 25 Q 45 30 47 40 Q 48 50 45 60 Q 42 70 35 75 Q 28 80 20 78 Q 12 76 8 70 Q 4 64 5 55 Q 6 45 8 35 Q 10 25 10 20 Z"
      case 'carrot':
        // Carrot shape - organic triangular
        return "M 50 5 Q 55 10 58 20 Q 60 30 61 40 Q 61 50 59 60 Q 57 70 53 75 Q 49 80 45 78 Q 41 76 38 72 Q 35 68 33 62 Q 31 56 32 48 Q 33 40 35 32 Q 37 24 40 18 Q 43 12 47 8 Q 50 5 50 5 Z"
      case 'beet':
        // Beetroot shape - rounded, organic
        return "M 50 8 Q 60 5 70 10 Q 75 15 78 25 Q 80 35 78 45 Q 75 55 70 60 Q 65 65 58 68 Q 51 71 42 68 Q 33 65 28 60 Q 23 55 20 45 Q 17 35 19 25 Q 22 15 27 10 Q 32 5 42 6 Q 46 7 50 8 Z"
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
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`glow-${type}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={getSVGPath()}
          fill={getBackgroundColor()}
          stroke={getBorderColor()}
          strokeWidth="0.5"
          filter={`url(#glow-${type})`}
          opacity="0.95"
        />
        <foreignObject x="0" y="0" width="100" height="100">
          <div className="bento-content-wrapper">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

