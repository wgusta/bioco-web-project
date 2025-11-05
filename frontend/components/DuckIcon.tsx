// Duck icon for intranet link
export function DuckIcon({ className = '', size = 20 }: { className?: string, size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C8 2 5 5 5 9C5 11 6 13 7 14C7 15 6 16 5 16C4 16 3 17 3 18C3 19 4 20 5 20C6 20 7 19 8 18C9 19 10 20 11 20C12 20 13 19 14 18C15 19 16 20 17 20C18 20 19 19 19 18C19 17 18 16 17 16C16 16 15 15 15 14C16 13 17 11 17 9C17 5 14 2 12 2Z" fill="#F29200" stroke="#39A933" strokeWidth="1.5"/>
      <circle cx="10" cy="9" r="1" fill="#1F2A1B"/>
      <circle cx="14" cy="9" r="1" fill="#1F2A1B"/>
      <path d="M10 12C10 13 11 14 12 14C13 14 14 13 14 12" stroke="#1F2A1B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
