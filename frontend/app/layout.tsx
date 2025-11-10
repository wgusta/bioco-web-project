import type { Metadata } from 'next'
// import './globals.css' // Original sketchy design - disabled for rooty-bento
// import './rooty-bento.css' // New modern rooty-bento design
import './globals-tailwind.css' // Tailwind CSS for organic bento design
import { MatomoScript } from '@/components/MatomoScript'

export const metadata: Metadata = {
  title: 'bioco.ch',
  description: 'bioco.ch Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Use rooty-bento design variant
  // To switch back to original, comment out rooty-bento.css import above
  return (
    <html lang="de" className="rooty-bento">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Keep original fonts for now, can be changed later */}
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Fredoka+One&family=Patrick+Hand&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <MatomoScript />
      </body>
    </html>
  )
}
