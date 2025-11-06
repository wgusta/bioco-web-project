// Bean menu icon for mobile navigation - based on BushBeanIcon but optimized for menu use
export function BeanMenuIcon({
  width = 32,
  height = 32,
  beans = 3,
  spread = 7,
  curvature = 0.75,
  thickness = 0.15,
  fill = "var(--bioco-green, #2E7D32)",
  stroke = "var(--bioco-green-dark, #1B5E20)",
  strokeOpacity = 1,
}: {
  width?: number
  height?: number
  beans?: number
  spread?: number
  curvature?: number
  thickness?: number
  fill?: string
  stroke?: string
  strokeOpacity?: number
}) {
  const H = height
  const W = width
  const startY = H * 0.25

  // Create deterministic bean paths (no randomness for consistent menu icon)
  const paths = Array.from({ length: beans }, (_, i) => {
    const y = startY + i * spread
    const amp = (H * thickness) * curvature * 1.5 // Much more curvature
    const tipInsetL = W * 0.12
    const tipInsetR = W * 0.88
    const isMiddle = i === 1 // Middle bean (index 1)

    // Bean pod shape - much more curved with asymmetric curve
    const pod = `M ${tipInsetL},${y}
      C ${W*0.25},${y-amp*1.2} ${W*0.75},${y-amp*1.2} ${tipInsetR},${y}
      C ${W*0.75},${y+amp*0.6} ${W*0.25},${y+amp*0.6} ${tipInsetL},${y} Z`

    // Midrib line - more curved
    const midrib = `M ${W*0.15},${y-0.4}
      C ${W*0.32},${y-amp*0.7} ${W*0.68},${y-amp*0.7} ${W*0.85},${y-0.4}`

    // Stem - positioned based on which side (flipped for middle)
    const stem = isMiddle 
      ? `M ${tipInsetR},${y} c 1.8,3.5 1.5,5.0 0.6,6.5` // Flipped: stem on right
      : `M ${tipInsetL},${y} c -1.8,-3.5 -1.5,-5.0 -0.6,-6.5` // Normal: stem on left

    return { pod, midrib, stem, y, isMiddle }
  })

  return (
    <svg 
      width={W} 
      height={H} 
      viewBox={`0 0 ${W} ${H}`} 
      role="img" 
      aria-label="Menü" 
      xmlns="http://www.w3.org/2000/svg"
      className="bean-menu-icon"
    >
      {paths.map((p, idx) => (
        <g 
          key={idx}
          transform={p.isMiddle ? `rotate(180 ${W/2} ${p.y})` : ''}
        >
          <path 
            d={p.pod} 
            fill={fill} 
            stroke={stroke} 
            strokeOpacity={strokeOpacity}
            strokeWidth={Math.max(1.2, W*0.025)} 
            strokeLinejoin="round"
          />
          <path 
            d={p.midrib} 
            fill="none" 
            stroke="rgba(255,255,255,.4)"
            strokeWidth={Math.max(0.8, W*0.015)} 
            strokeLinecap="round"
          />
          <path 
            d={p.stem} 
            fill="none" 
            stroke={stroke}
            strokeWidth={Math.max(1.2, W*0.025)} 
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  )
}

