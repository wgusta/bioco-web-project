// Duck icon for intranet link - sketchy style
export function DuckIcon({ className = '', size = 20 }: { className?: string, size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Duck body */}
      <ellipse cx="12" cy="14" rx="8" ry="6" fill="#F29200" stroke="#E88200" strokeWidth="2"/>
      {/* Duck head */}
      <circle cx="8" cy="10" r="5" fill="#F29200" stroke="#E88200" strokeWidth="2"/>
      {/* Duck bill */}
      <path d="M3 10 Q3 8 5 9 Q7 10 8 10" fill="#E88200" stroke="#D67A00" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Duck eye */}
      <circle cx="7" cy="9" r="1.5" fill="#1F2A1B"/>
      {/* Duck wing */}
      <ellipse cx="14" cy="13" rx="3" ry="4" fill="#E88200" stroke="#D67A00" strokeWidth="1.5"/>
      {/* Duck tail */}
      <path d="M20 14 Q22 12 22 16 Q22 18 20 16" fill="#E88200" stroke="#D67A00" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
