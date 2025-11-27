import React from 'react'

interface IconProps {
  className?: string
  ariaLabel?: string
  size?: number
}

const canvasStyle = (size?: number) => ({
  width: `${size ?? 72}px`,
  height: `${size ?? 72}px`,
  borderRadius: '28px',
  background: 'var(--bg-secondary)',
  border: '2px solid var(--bioco-green)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const svgStyle = {
  width: '90%',
  height: '90%',
  display: 'block',
} as const

/**
 * Tomato cluster inspired avatar (hand-painted look, simplified flat style)
 */
export const DuckAvatarIcon = ({ className = '', ariaLabel = 'Tomaten Illustration', size }: IconProps) => {
  return (
    <div
      className={className}
      role="img"
      aria-label={ariaLabel}
      style={canvasStyle(size)}
    >
      <svg viewBox="0 0 120 120" style={svgStyle}>
        {/* Simple vine */}
        <path
          d="M18 30 C30 22 42 20 54 26 C65 31 74 44 86 50 C95 55 104 55 108 58 C112 61 111 67 105 70 C95 76 82 72 72 68 C62 64 52 58 42 52 C30 45 20 38 15 33 C12 30 14 28 18 30 Z"
          fill="none"
          stroke="var(--bioco-green-dark)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Simple flat tomatoes */}
        {[{ cx: 36, cy: 40, r: 16 },
          { cx: 60, cy: 32, r: 14 },
          { cx: 80, cy: 48, r: 15 },
          { cx: 52, cy: 64, r: 17 }].map((tomato) => (
          <circle 
            key={`${tomato.cx}-${tomato.cy}`}
            cx={tomato.cx} 
            cy={tomato.cy} 
            r={tomato.r} 
            fill="var(--bioco-beet)" 
            stroke="var(--bioco-beet-light)" 
            strokeWidth="3" 
          />
        ))}
        {/* Simple stems */}
        {[{ x: 34, y: 26 }, { x: 58, y: 20 }, { x: 78, y: 40 }, { x: 50, y: 58 }].map((stem, idx) => (
          <path
            key={idx}
            d={`M${stem.x} ${stem.y} c -6 -6 -4 -12 4 -16`}
            stroke="var(--bioco-green)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  )
}

/**
 * Carrot icon for location-type actions (hand-painted, simplified flat style)
 */
export const MapNeedleIcon = ({ className = '', ariaLabel = 'Karotten Illustration', size = 64 }: IconProps) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      className={className}
      viewBox="0 0 120 120"
      style={{ ...svgStyle, width: `${size}px`, height: `${size}px` }}
    >
      {/* Simple flat carrot */}
      <path
        d="M20 38 C32 18 42 10 48 14 C54 18 56 32 74 34 C92 36 102 46 96 60 C90 74 66 104 54 110 C42 116 32 106 28 94 C24 82 26 68 18 52 C12 40 14 32 20 38 Z"
        fill="var(--bioco-orange)"
        stroke="var(--bioco-orange-dark)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Simple leaves */}
      {[{ x: 42, y: 20 }, { x: 52, y: 22 }, { x: 60, y: 24 }].map((leaf, idx) => (
        <path
          key={idx}
          d={`M${leaf.x} ${leaf.y} c -4 -16 6 -20 16 -18`}
          stroke="var(--bioco-green)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  )
}

/**
 * Letter/Envelope icon for contact (hand-drawn style with beet colors)
 */
export const ContactLetterIcon = ({ className = '', ariaLabel = 'Brief Illustration', size = 64 }: IconProps) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      className={className}
      viewBox="0 0 100 80"
      style={{ ...svgStyle, width: `${size}px`, height: `${size}px` }}
    >
      {/* Envelope/letter base - hand-drawn rectangle */}
      <path
        d="M10 20 L10 60 Q10 65 15 65 L85 65 Q90 65 90 60 L90 20 Q90 15 85 15 L15 15 Q10 15 10 20 Z"
        fill="var(--bioco-beet)"
        stroke="var(--bioco-beet-light)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Letter flap/triangle at top - hand-drawn */}
      <path
        d="M10 20 L50 40 L90 20 L85 15 L15 15 L10 20 Z"
        fill="var(--bioco-beet-light)"
        stroke="var(--bioco-beet-light)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Letter lines inside - hand-drawn text lines */}
      <path
        d="M20 35 L70 35"
        stroke="var(--bg-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M20 45 L65 45"
        stroke="var(--bg-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M20 55 L60 55"
        stroke="var(--bg-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

/**
 * Peas / Pod icon for freshness cues (simplified flat style)
 */
export const PeasIcon = ({ className = '', ariaLabel = 'Erbsenschote Illustration', size = 64 }: IconProps) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      className={className}
      viewBox="0 0 140 120"
      style={{ ...svgStyle, width: `${size}px`, height: `${size}px` }}
    >
      {/* Simple flat pod */}
      <path
        d="M26 66 C18 42 32 26 54 22 C78 18 112 24 126 40 C140 56 136 72 118 88 C100 104 64 108 42 100 C20 92 10 84 26 66 Z"
        fill="var(--bioco-green)"
        stroke="var(--bioco-green-dark)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Simple flat peas */}
      {[0, 1, 2, 3].map((idx) => (
        <circle
          key={`pea-${idx}`}
          cx={48 + idx * 18}
          cy={70 - idx * 4}
          r={9}
          fill="var(--bioco-green-light)"
          stroke="var(--bioco-green-dark)"
          strokeWidth="2"
        />
      ))}
      {/* Simple stem */}
      <path
        d="M28 58 Q24 40 38 30"
        stroke="var(--bioco-green)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

/**
 * Duck Head Icon for navigation (hand-drawn, realistic style)
 * Shows head and neck only, with longer beak, black and green colors, in a circle
 */
export const DuckIcon = ({ className = '', size = 20 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Circle background */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="var(--bg-primary)"
        stroke="var(--bioco-green)"
        strokeWidth="3"
      />
      
      {/* Duck head - black, realistic profile shape */}
      <path
        d="M30 50 Q25 40 30 30 Q40 20 55 22 Q70 25 75 35 Q78 42 76 50 Q74 58 68 62 Q60 66 50 66 Q40 66 32 62 Q28 58 30 50 Z"
        fill="#1F2A1B"
        stroke="#1F2A1B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Duck beak - longer, realistic shape, green accent */}
      <path
        d="M75 35 Q82 30 92 38 Q90 45 85 48 Q80 50 75 45 Q73 40 75 35 Z"
        fill="var(--bioco-green)"
        stroke="var(--bioco-green-dark)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Beak detail line */}
      <path
        d="M80 38 Q85 40 88 42"
        stroke="var(--bioco-green-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Duck eye - simple black circle */}
      <circle 
        cx="55" 
        cy="42" 
        r="4" 
        fill="#1F2A1B" 
      />
      
      {/* Eye highlight - small white dot */}
      <circle 
        cx="56" 
        cy="41" 
        r="1.2" 
        fill="var(--bg-primary)" 
      />
      
      {/* Neck - extending down from head */}
      <path
        d="M32 58 Q28 65 30 72 Q32 75 35 75"
        stroke="#1F2A1B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Neck detail - green accent line */}
      <path
        d="M34 60 Q30 68 32 74"
        stroke="var(--bioco-green)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
    </svg>
  )
}


