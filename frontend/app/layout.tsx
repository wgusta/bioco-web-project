import type { Metadata } from 'next'
import './globals.css'
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
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Patrick+Hand&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <MatomoScript />
      </body>
    </html>
  )
}
