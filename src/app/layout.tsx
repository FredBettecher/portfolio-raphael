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
        <script type="text/javascript" src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
      </body>
    </html>
  )
}
