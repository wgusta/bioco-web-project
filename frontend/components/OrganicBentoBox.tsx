'use client'

import React from 'react'

interface OrganicBentoBoxProps {
  type: 'apple' | 'lettuce' | 'carrot'
  gridCol: string
  gridRow: string
  children: React.ReactNode
  className?: string
}

export function OrganicBentoBox({ type, gridCol, gridRow, children, className = '' }: OrganicBentoBoxProps) {
  const getSVGPath = () => {
    switch (type) {
      case 'apple':
        // Apple shape - organic, rounded
        return "M 50 10 Q 60 5 70 10 Q 80 15 85 25 Q 90 35 88 45 Q 85 55 80 60 Q 75 65 70 65 Q 65 70 60 68 Q 55 70 50 68 Q 45 70 40 68 Q 35 70 30 68 Q 25 70 20 65 Q 15 60 12 55 Q 10 45 15 35 Q 20 25 25 20 Q 30 15 40 12 Q 45 10 50 10 Z"
      case 'lettuce':
        // Lettuce head shape - wavy, organic
        return "M 50 5 Q 60 8 70 5 Q 80 8 85 15 Q 90 25 88 35 Q 85 45 80 50 Q 75 55 70 55 Q 65 60 60 58 Q 55 60 50 58 Q 45 60 40 58 Q 35 60 30 58 Q 25 60 20 55 Q 15 50 12 45 Q 10 35 15 25 Q 20 15 25 10 Q 30 8 40 7 Q 45 5 50 5 Z"
      case 'carrot':
        // Carrot shape - triangular with organic curves
        return "M 50 5 Q 55 8 60 10 Q 65 15 68 25 Q 70 35 72 45 Q 73 55 70 60 Q 68 65 65 68 Q 62 70 58 72 Q 55 74 52 75 Q 50 75 48 75 Q 45 74 42 72 Q 38 70 35 68 Q 32 65 30 60 Q 27 55 28 45 Q 30 35 32 25 Q 35 15 40 10 Q 45 8 50 5 Z"
      default:
        return ""
    }
  }

  const getFillColor = () => {
    switch (type) {
      case 'apple':
        return '#dc2626' // Red
      case 'lettuce':
        return '#16a34a' // Green
      case 'carrot':
        return '#ea580c' // Orange
      default:
        return '#ffffff'
    }
  }

  const getStrokeColor = () => {
    switch (type) {
      case 'apple':
        return '#991b1b' // Dark red
      case 'lettuce':
        return '#15803d' // Dark green
      case 'carrot':
        return '#c2410c' // Dark orange
      default:
        return '#000000'
    }
  }

  return (
    <div
      className={`organic-bento-box ${className}`}
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`glow-${type}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d={getSVGPath()}
          fill={getFillColor()}
          stroke={getStrokeColor()}
          strokeWidth="1"
          filter={`url(#glow-${type})`}
          opacity="0.95"
        />
        <foreignObject x="0" y="0" width="100" height="100">
          <div className="bento-content">
            {children}
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}

