interface TriColorHamburgerIconProps {
  width?: number
  height?: number
  strokeWidth?: number
}

export function TriColorHamburgerIcon({
  width = 32,
  height = 28,
  strokeWidth = 3.5,
}: TriColorHamburgerIconProps) {
  const lineRadius = strokeWidth / 2
  const colors = [
    'var(--bioco-green, #2E7D32)',
    'var(--bioco-orange, #FF8C00)',
    'var(--bioco-beet, #8B0000)',
  ]
  const spacing = (height - strokeWidth * colors.length) / (colors.length + 1)

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Menü öffnen"
      xmlns="http://www.w3.org/2000/svg"
      className="tri-hamburger-icon"
    >
      {colors.map((color, index) => {
        const y = spacing * (index + 1) + strokeWidth * index
        return (
          <rect
            key={color}
            x={lineRadius}
            y={y}
            width={width - lineRadius * 2}
            height={strokeWidth}
            rx={lineRadius}
            fill={color}
          />
        )
      })}
    </svg>
  )
}

