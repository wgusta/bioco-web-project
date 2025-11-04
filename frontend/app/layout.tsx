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
      <body>
        {children}
        <MatomoScript />
      </body>
    </html>
  )
}
