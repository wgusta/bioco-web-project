'use client'

import React from 'react'

interface OrganicNumberBadgeProps {
  number: number | string
  className?: string
}

// Organic SVG path for number badge - smaller organic shape
const getOrganicPath = () => {
  // Small organic circle-like shape
  return "M 50 0 Q 75 0 90 10 Q 100 25 100 50 Q 100 75 90 90 Q 75 100 50 100 Q 25 100 10 90 Q 0 75 0 50 Q 0 25 10 10 Q 25 0 50 0 Z"
}

export function OrganicNumberBadge({ number, className = '' }: OrganicNumberBadgeProps) {
  return (
    <div className={`organic-number-badge ${className}`}>
      {/* SVG for shape and border */}
      <svg
        className="organic-number-badge-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background shape - shifted 3px horizontally for offset effect */}
        <path
          d={getOrganicPath()}
          fill="#000000"
          transform="translate(3, 0)"
        />
        {/* Black border following organic shape */}
        <path
          d={getOrganicPath()}
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Content */}
      <div className="organic-number-badge-content">
        {number}
      </div>
    </div>
  )
}

