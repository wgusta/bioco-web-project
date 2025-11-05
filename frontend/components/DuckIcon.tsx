// Duck icon for intranet link - sketchy style
export function DuckIcon({ className = '', size = 20 }: { className?: string, size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Duck body - oval shape */}
      <ellipse cx="14" cy="16" rx="7" ry="5" fill="#F29200" stroke="#E88200" strokeWidth="2"/>
      {/* Duck head - round */}
      <circle cx="7" cy="11" r="6" fill="#F29200" stroke="#E88200" strokeWidth="2"/>
      {/* Duck bill - orange triangle pointing left */}
      <path d="M1 11 L1 9 Q1 8 2 9 L4 10 Q5 10.5 6 10 L6 12 Q5 12.5 4 12 L2 11 Q1 11.5 1 11 Z" fill="#E88200" stroke="#D67A00" strokeWidth="1.5"/>
      {/* Duck eye */}
      <circle cx="6" cy="10" r="1.5" fill="#1F2A1B"/>
      {/* Duck wing - visible on body */}
      <ellipse cx="15" cy="15" rx="4" ry="3" fill="#E88200" stroke="#D67A00" strokeWidth="1.5"/>
      {/* Duck tail feathers */}
      <path d="M21 16 Q23 14 23 18 Q23 20 21 18" fill="#E88200" stroke="#D67A00" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
