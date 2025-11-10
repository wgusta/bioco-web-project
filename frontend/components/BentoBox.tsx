'use client'

import React from 'react'

interface BentoBoxProps {
  colSpan?: number
  rowSpan?: number
  className?: string
  children: React.ReactNode
}

export function BentoBox({ colSpan = 1, rowSpan = 1, className = '', children }: BentoBoxProps) {
  // Map colSpan to Tailwind grid column classes
  const colSpanClasses: Record<number, string> = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
  }

  const rowSpanClasses: Record<number, string> = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
  }

  return (
    <div
      className={`bento-box rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${colSpanClasses[colSpan] || 'col-span-1'} ${rowSpanClasses[rowSpan] || 'row-span-1'} ${className}`}
    >
      {children}
    </div>
  )
}

