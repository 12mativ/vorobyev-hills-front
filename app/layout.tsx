import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AirFood',
  description: 'Try our application for airlines food menu generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  )
}
