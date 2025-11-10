'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface RootConnection {
  from: { x: number; y: number }
  to: { x: number; y: number }
  id: string
}

interface SVGRootsProps {
  connections: RootConnection[]
}

export function SVGRoots({ connections }: SVGRootsProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathsRef = useRef<SVGPathElement[]>([])

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) {
      return // Disable on mobile
    }

    const paths = pathsRef.current

    paths.forEach((path, index) => {
      const pathLength = path.getTotalLength()
      
      // Set initial state
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        opacity: 0,
      })

      // Create scroll trigger animation
      ScrollTrigger.create({
        trigger: path,
        start: 'top 80%',
        end: 'top 20%',
        onEnter: () => {
          gsap.to(path, {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 2,
            ease: 'power2.out',
          })
        },
        onLeave: () => {
          gsap.to(path, {
            opacity: 0.3,
            duration: 0.5,
          })
        },
        onEnterBack: () => {
          gsap.to(path, {
            opacity: 1,
            duration: 0.5,
          })
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [connections])

  return (
    <svg
      ref={svgRef}
      className="svg-root-container"
      viewBox="0 0 1200 3000"
      preserveAspectRatio="xMidYMin meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#6B5B4A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4A3E2E" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {connections.map((connection, index) => {
        // Create organic root path with curves
        const midX = (connection.from.x + connection.to.x) / 2
        const midY = (connection.from.y + connection.to.y) / 2
        const controlX1 = midX + (Math.random() * 40 - 20)
        const controlY1 = midY - 30
        const controlX2 = midX + (Math.random() * 40 - 20)
        const controlY2 = midY + 30

        const pathData = `M ${connection.from.x} ${connection.from.y} 
          Q ${controlX1} ${controlY1} ${midX} ${midY}
          Q ${controlX2} ${controlY2} ${connection.to.x} ${connection.to.y}`

        return (
          <path
            key={connection.id}
            ref={(el) => {
              if (el) pathsRef.current[index] = el
            }}
            d={pathData}
            fill="none"
            stroke="url(#rootGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )
      })}
    </svg>
  )
}

