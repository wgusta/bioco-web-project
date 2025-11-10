'use client'

import React from 'react'
import Link from 'next/link'

interface OrganicButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

// Organic SVG path - similar to bento boxes but smaller
const getOrganicPath = () => {
  // Small organic shape - full width (0-100) with organic curves
  return "M 0 50 Q 0 20 0 5 Q 0 0 5 0 Q 10 0 15 0 Q 20 0 25 0 Q 30 0 35 0 Q 40 0 45 0 Q 50 0 55 0 Q 60 0 65 0 Q 70 0 75 0 Q 80 0 85 0 Q 90 0 95 0 Q 100 0 100 5 Q 100 20 100 50 Q 100 80 100 95 Q 100 100 95 100 Q 90 100 85 100 Q 80 100 75 100 Q 70 100 65 100 Q 60 100 55 100 Q 50 100 45 100 Q 40 100 35 100 Q 30 100 25 100 Q 20 100 15 100 Q 10 100 5 100 Q 0 100 0 95 Q 0 80 0 50 Z"
}

export function OrganicButton({ href, onClick, variant = 'primary', className = '', children }: OrganicButtonProps) {
  const isPrimary = variant === 'primary'
  const bgColor = isPrimary ? '#000000' : '#ffffff'
  const textColor = isPrimary ? '#ffffff' : '#000000'
  const borderColor = '#000000'
  
  // Check if className includes w-full
  const hasFullWidth = className.includes('w-full')

  const buttonContent = (
    <div className={`organic-button-wrapper ${hasFullWidth ? 'w-full' : ''}`}>
      {/* SVG for shape and border */}
      <svg
        className="organic-button-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background shape - shifted 3px horizontally for offset effect */}
        <path
          d={getOrganicPath()}
          fill={bgColor}
          transform="translate(3, 0)"
        />
        {/* Black border following organic shape */}
        <path
          d={getOrganicPath()}
          fill="none"
          stroke={borderColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Content */}
      <div 
        className="organic-button-content"
        style={{ color: textColor }}
      >
        {children}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className={`organic-button-link ${className}`} onClick={onClick}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={`organic-button ${className}`} onClick={onClick}>
      {buttonContent}
    </button>
  )
}

