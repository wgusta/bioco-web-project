// Bean menu icon for mobile navigation - based on BushBeanIcon but optimized for menu use
export function BeanMenuIcon({
  width = 32,
  height = 32,
  beans = 3,
  spread = 7,
  curvature = 0.75,
  thickness = 0.12, // Narrower beans
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
    const amp = (H * thickness) * curvature * 1.5
    const tipInsetL = W * 0.20 // Narrower: more inset
    const tipInsetR = W * 0.80 // Narrower: more inset

    // Bean pod shape - curved but narrower
    const pod = `M ${tipInsetL},${y}
      C ${W*0.30},${y-amp*1.2} ${W*0.70},${y-amp*1.2} ${tipInsetR},${y}
      C ${W*0.70},${y+amp*0.6} ${W*0.30},${y+amp*0.6} ${tipInsetL},${y} Z`

    // Midrib line - more curved
    const midrib = `M ${W*0.22},${y-0.4}
      C ${W*0.35},${y-amp*0.7} ${W*0.65},${y-amp*0.7} ${W*0.78},${y-0.4}`

    // Stem - shorter
    const stem = `M ${tipInsetL},${y} c -1.2,-2.0 -1.0,-3.0 -0.4,-4.0` // Shorter stem

    return { pod, midrib, stem, y }
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
      <g transform={`scale(1, -1) translate(0, -${H})`}>
        {paths.map((p, idx) => (
          <g key={idx}>
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
      </g>
    </svg>
  )
}

