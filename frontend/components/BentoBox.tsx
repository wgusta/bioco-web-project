'use client'

import React from 'react'

interface BentoBoxProps {
  colSpan?: number | string
  rowSpan?: number
  className?: string
  children: React.ReactNode
}

export function BentoBox({ colSpan = 1, rowSpan = 1, className = '', children }: BentoBoxProps) {
  // Handle responsive colSpan (e.g., "12 md:col-span-6")
  const colSpanStyle = typeof colSpan === 'number' 
    ? { gridColumn: `span ${colSpan}` }
    : {}

  return (
    <div
      className={`bento-box rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${className}`}
      style={{
        ...colSpanStyle,
        gridRow: `span ${rowSpan}`,
      }}
    >
      {children}
    </div>
  )
}

