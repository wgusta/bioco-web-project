// Vegetable icon components for lists and UI elements

interface IconProps {
  className?: string
  size?: number
}

export function CarrotIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 4L8 12L12 12L10 4Z" fill="#F29200" stroke="#39A933" strokeWidth="1.5"/>
      <path d="M10 12L6 16L14 16L10 12Z" fill="#F29200" stroke="#39A933" strokeWidth="1.5"/>
    </svg>
  )
}

export function BeetIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 6L8 14L12 14L10 6Z" fill="#87213D" stroke="#39A933" strokeWidth="1.5"/>
      <circle cx="10" cy="16" r="3" fill="#87213D" stroke="#39A933" strokeWidth="1.5"/>
    </svg>
  )
}

export function LeafIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 4C6 6 4 10 6 14C8 16 12 16 14 14C16 10 14 6 10 4Z" fill="#39A933" stroke="#285A19" strokeWidth="1.5"/>
    </svg>
  )
}

export function SeedIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="10" cy="10" rx="4" ry="6" fill="#39A933" stroke="#285A19" strokeWidth="1.5"/>
    </svg>
  )
}

export function PlantIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 2L8 8L12 8L10 2Z" fill="#39A933" stroke="#285A19" strokeWidth="1.5"/>
      <path d="M10 8L6 14L14 14L10 8Z" fill="#39A933" stroke="#285A19" strokeWidth="1.5"/>
    </svg>
  )
}

export function CheckIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 10L8 14L16 6" stroke="#39A933" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
