// Organic icons in the style of bento box borders - minimalist with curved, organic lines

export function OrganicLocationIcon({ size = 16 }: { size?: number }) {
  // Organic location pin with curved, flowing edges
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Organic curved pin shape - similar to bento box curves */}
      <path 
        d="M 12 2 Q 8 2 6 4.5 Q 4 7 4 10 Q 4 13 5.5 15 Q 7 17 12 22 Q 17 17 18.5 15 Q 20 13 20 10 Q 20 7 18 4.5 Q 16 2 12 2 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Inner circle with organic curves */}
      <circle cx="12" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function OrganicContactIcon({ size = 16 }: { size?: number }) {
  // Organic envelope with curved, flowing edges
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Organic envelope shape with curved edges */}
      <path 
        d="M 4 6 Q 4 4 6 4 L 18 4 Q 20 4 20 6 L 20 18 Q 20 20 18 20 L 6 20 Q 4 20 4 18 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Curved letter line */}
      <path 
        d="M 4 6 Q 8 10 12 13 Q 16 10 20 6" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function OrganicIntranetIcon({ size = 16 }: { size?: number }) {
  // Organic network/connection icon with curved, flowing lines
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Organic network nodes - slightly irregular circles */}
      <ellipse cx="6" cy="6" rx="2.5" ry="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="18" cy="6" rx="2.5" ry="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="12" cy="12" rx="2.5" ry="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="6" cy="18" rx="2.5" ry="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="18" cy="18" rx="2.5" ry="2.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Curved, organic connection lines */}
      <path d="M 8.2 6.5 Q 10 8.5 12 9.5 Q 14 8.5 15.8 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 8.2 17.5 Q 10 15.5 12 14.5 Q 14 15.5 15.8 17.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 6.5 8.2 Q 8.5 10 9.5 12 Q 8.5 14 6.5 15.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 17.5 8.2 Q 15.5 10 14.5 12 Q 15.5 14 17.5 15.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

