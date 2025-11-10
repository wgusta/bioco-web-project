// Organic menu icon - three curved lines in the style of bento box borders
export function OrganicMenuIcon({
  width = 32,
  height = 32,
}: {
  width?: number
  height?: number
}) {
  // Three horizontal organic lines with curved edges, similar to bento box borders
  // Using organic curves like the bento box SVG paths
  // Each line is a horizontal organic shape with slight curves
  const line1 = "M 4 10 Q 4 6 4 4 Q 4 2 6 2 Q 8 2 10 2 Q 12 2 14 2 Q 16 2 18 2 Q 20 2 22 2 Q 24 2 26 2 Q 28 2 28 4 Q 28 6 28 10 Q 28 14 28 16 Q 28 18 26 18 Q 24 18 22 18 Q 20 18 18 18 Q 16 18 14 18 Q 12 18 10 18 Q 8 18 6 18 Q 4 18 4 16 Q 4 14 4 10 Z"
  
  const line2 = "M 4 18 Q 4 14 4 12 Q 4 10 6 10 Q 8 10 10 10 Q 12 10 14 10 Q 16 10 18 10 Q 20 10 22 10 Q 24 10 26 10 Q 28 10 28 12 Q 28 14 28 18 Q 28 22 28 24 Q 28 26 26 26 Q 24 26 22 26 Q 20 26 18 26 Q 16 26 14 26 Q 12 26 10 26 Q 8 26 6 26 Q 4 26 4 24 Q 4 22 4 18 Z"
  
  const line3 = "M 4 26 Q 4 22 4 20 Q 4 18 6 18 Q 8 18 10 18 Q 12 18 14 18 Q 16 18 18 18 Q 20 18 22 18 Q 24 18 26 18 Q 28 18 28 20 Q 28 22 28 26 Q 28 30 28 32 Q 28 34 26 34 Q 24 34 22 34 Q 20 34 18 34 Q 16 34 14 34 Q 12 34 10 34 Q 8 34 6 34 Q 4 34 4 32 Q 4 30 4 26 Z"

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 32 36" 
      role="img" 
      aria-label="Menü" 
      xmlns="http://www.w3.org/2000/svg"
      className="organic-menu-icon"
    >
      {/* Three organic curved lines - similar to bento box border style */}
      <path 
        d={line1} 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d={line2} 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d={line3} 
        fill="none" 
        stroke="#000000" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

