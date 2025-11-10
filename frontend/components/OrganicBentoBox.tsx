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
  const getBackgroundColor = () => {
    switch (type) {
      case 'apple':
        return 'bg-bioco-beet' // Deep red (beet color for sky/apple theme)
      case 'lettuce':
        return 'bg-bioco-green' // Green
      case 'carrot':
        return 'bg-bioco-orange' // Orange
      default:
        return 'bg-gray-200'
    }
  }

  const getBorderColor = () => {
    switch (type) {
      case 'apple':
        return 'border-bioco-beet-light'
      case 'lettuce':
        return 'border-bioco-green-dark'
      case 'carrot':
        return 'border-orange-800'
      default:
        return 'border-gray-400'
    }
  }

  const getClipPath = () => {
    switch (type) {
      case 'apple':
        // Apple shape - rounded, organic
        return 'polygon(30% 10%, 50% 5%, 70% 10%, 85% 25%, 88% 45%, 85% 55%, 80% 60%, 70% 65%, 50% 68%, 30% 65%, 20% 60%, 15% 55%, 12% 45%, 15% 25%, 30% 10%)'
      case 'lettuce':
        // Lettuce head shape - wavy, organic
        return 'polygon(30% 3%, 50% 5%, 70% 3%, 85% 12%, 88% 28%, 85% 40%, 75% 48%, 50% 58%, 25% 48%, 15% 40%, 12% 28%, 15% 12%, 30% 3%)'
      case 'carrot':
        // Carrot shape - triangular, organic
        return 'polygon(50% 2%, 60% 6%, 68% 18%, 72% 32%, 74% 48%, 72% 60%, 67% 68%, 50% 75%, 33% 68%, 28% 60%, 26% 48%, 28% 32%, 32% 18%, 40% 6%, 50% 2%)'
      default:
        return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }
  }

  return (
    <div
      className={`organic-bento-box min-h-[300px] ${getBackgroundColor()} ${getBorderColor()} border-2 shadow-xl ${className}`}
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        clipPath: getClipPath(),
        WebkitClipPath: getClipPath(),
      }}
    >
      <div className="bento-content h-full w-full p-6 flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  )
}

