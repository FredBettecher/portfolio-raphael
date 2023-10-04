import './globals.css'
import type { Metadata } from 'next'
import { lato } from '@/assets/fonts'

export const metadata: Metadata = {
  title: 'Raphael Barbosa',
  description: 'Assessor de Comunicação Digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
      </body>
    </html>
  )
}
