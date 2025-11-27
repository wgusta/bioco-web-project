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
 * Tomato cluster inspired avatar (hand-painted look)
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
        <defs>
          <linearGradient id="tomato-blush" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bioco-beet)" />
            <stop offset="80%" stopColor="#b81818" />
          </linearGradient>
          <linearGradient id="tomato-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffaf5" stopOpacity="0.7" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M18 30 C30 22 42 20 54 26 C65 31 74 44 86 50 C95 55 104 55 108 58 C112 61 111 67 105 70 C95 76 82 72 72 68 C62 64 52 58 42 52 C30 45 20 38 15 33 C12 30 14 28 18 30 Z"
          fill="none"
          stroke="var(--bioco-green-dark)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[{ cx: 36, cy: 40, r: 16 },
          { cx: 60, cy: 32, r: 14 },
          { cx: 80, cy: 48, r: 15 },
          { cx: 52, cy: 64, r: 17 }].map((tomato) => (
          <g key={`${tomato.cx}-${tomato.cy}`}>
            <circle cx={tomato.cx} cy={tomato.cy} r={tomato.r} fill="url(#tomato-blush)" stroke="var(--bioco-beet-light)" strokeWidth="4" />
            <path
              d={`M${tomato.cx - tomato.r * 0.6} ${tomato.cy - tomato.r * 0.5}
                  C ${tomato.cx - tomato.r * 0.2} ${tomato.cy - tomato.r * 0.8},
                    ${tomato.cx + tomato.r * 0.2} ${tomato.cy - tomato.r * 0.8},
                    ${tomato.cx + tomato.r * 0.4} ${tomato.cy - tomato.r * 0.5}`}
              fill="none"
              stroke="var(--bg-primary)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.45"
            />
            <circle cx={tomato.cx - tomato.r * 0.3} cy={tomato.cy + tomato.r * 0.2} r={tomato.r * 0.15} fill="url(#tomato-highlight)" />
          </g>
        ))}
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
 * Carrot icon for location-type actions (hand-painted)
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
      <defs>
        <linearGradient id="carrot-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="70%" stopColor="var(--bioco-orange)" />
        </linearGradient>
      </defs>
      <path
        d="M20 38 C32 18 42 10 48 14 C54 18 56 32 74 34 C92 36 102 46 96 60 C90 74 66 104 54 110 C42 116 32 106 28 94 C24 82 26 68 18 52 C12 40 14 32 20 38 Z"
        fill="url(#carrot-fill)"
        stroke="#d86d00"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[0.85, 0.65, 0.45, 0.25].map((pos, idx) => (
        <path
          key={idx}
          d={`M${30 + idx * 10} ${60 + idx * 12} q 20 ${8 - idx * 6} 34 ${18 - idx * 8}`}
          stroke="#c96a04"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {[{ x: 42, y: 20 }, { x: 52, y: 22 }, { x: 60, y: 24 }].map((leaf, idx) => (
        <path
          key={idx}
          d={`M${leaf.x} ${leaf.y} c -4 -16 6 -20 16 -18`}
          stroke="var(--bioco-green)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  )
}

/**
 * Beet icon for contact/love letters (hand-painted)
 */
export const ContactLetterIcon = ({ className = '', ariaLabel = 'Randen Illustration', size = 64 }: IconProps) => {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      className={className}
      viewBox="0 0 140 120"
      style={{ ...svgStyle, width: `${size}px`, height: `${size}px` }}
    >
      <defs>
        <radialGradient id="beet-core" cx="40%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#ff5f6d" stopOpacity="0.55" />
          <stop offset="60%" stopColor="var(--bioco-beet)" />
          <stop offset="100%" stopColor="#6b0015" />
        </radialGradient>
      </defs>
      <path
        d="M50 95 C30 76 20 52 30 34 C40 16 70 6 96 20 C122 34 130 66 118 86 C106 106 82 114 66 110 C58 108 54 104 50 95 Z"
        fill="url(#beet-core)"
        stroke="var(--bioco-beet-light)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {[0.15, 0.35, 0.55].map((offset, idx) => (
        <path
          key={idx}
          d={`M${45 + idx * 6} ${58 + idx * 4}
              C ${70 + idx * 4} ${40 + idx * 10},
                ${95 + idx * 6} ${60 + idx * 6},
                ${102 + idx * 4} ${78 + idx * 6}`}
          stroke="#f7a7b5"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      ))}
      {[{ x: 68, y: 20, lean: -12 }, { x: 82, y: 18, lean: 8 }, { x: 96, y: 24, lean: 16 }].map((leaf, idx) => (
        <path
          key={idx}
          d={`M${leaf.x} ${leaf.y} q ${leaf.lean} -24 ${leaf.lean + 10} -40`}
          stroke="var(--bioco-green-light)"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
      ))}
    </svg>
  )
}

/**
 * Peas / Pod icon for freshness cues
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
      <defs>
        <linearGradient id="pea-pod" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--bioco-green)" />
          <stop offset="70%" stopColor="var(--bioco-green-dark)" />
        </linearGradient>
      </defs>
      <path
        d="M26 66 C18 42 32 26 54 22 C78 18 112 24 126 40 C140 56 136 72 118 88 C100 104 64 108 42 100 C20 92 10 84 26 66 Z"
        fill="url(#pea-pod)"
        stroke="var(--bioco-green-dark)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3].map((idx) => (
        <circle
          key={idx}
          cx={48 + idx * 18}
          cy={70 - idx * 4}
          r={10}
          fill="var(--bg-secondary)"
          opacity="0.35"
        />
      ))}
      {[0, 1, 2, 3].map((idx) => (
        <circle
          key={`pea-${idx}`}
          cx={48 + idx * 18}
          cy={70 - idx * 4}
          r={9}
          fill="#b6e08b"
          stroke="var(--bioco-green-dark)"
          strokeWidth="3"
        />
      ))}
      <path
        d="M28 58 Q24 40 38 30"
        stroke="var(--bioco-green)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

/**
 * Simple Duck Icon for navigation (without circular wrapper)
 * Hand-painted style matching the tomato/carrot/beet aesthetic
 */
export const DuckIcon = ({ className = '', size = 20 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="duck-body-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--bioco-orange-light)" />
          <stop offset="100%" stopColor="var(--bioco-orange)" />
        </linearGradient>
      </defs>
      {/* Duck body - oval shape with hand-painted style */}
      <ellipse 
        cx="70" cy="80" 
        rx="35" ry="25" 
        fill="url(#duck-body-gradient)" 
        stroke="var(--bioco-orange)" 
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Duck head - round with organic shape */}
      <circle 
        cx="35" cy="55" 
        r="30" 
        fill="url(#duck-body-gradient)" 
        stroke="var(--bioco-orange)" 
        strokeWidth="4"
      />
      {/* Duck bill - orange triangle pointing left with hand-drawn feel */}
      <path 
        d="M5 55 L5 45 Q5 40 10 45 L20 50 Q25 52.5 30 50 L30 60 Q25 62.5 20 60 L10 55 Q5 57.5 5 55 Z" 
        fill="var(--bioco-orange)" 
        stroke="#d67a00" 
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Duck eye */}
      <circle cx="30" cy="50" r="7.5" fill="#1F2A1B" />
      <circle cx="32" cy="48" r="2" fill="var(--bg-primary)" />
      {/* Duck wing - visible on body with texture */}
      <ellipse 
        cx="75" cy="75" 
        rx="20" ry="15" 
        fill="var(--bioco-orange)" 
        stroke="#d67a00" 
        strokeWidth="3"
      />
      <path
        d="M65 75 Q75 70 85 75 Q75 80 65 75"
        stroke="#d67a00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Duck tail feathers - hand-painted style */}
      <path 
        d="M105 80 Q115 70 115 90 Q115 100 105 90" 
        fill="var(--bioco-orange)" 
        stroke="#d67a00" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

