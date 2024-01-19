import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'James Etchells | Portfolio',
  description: 'A website to showcase the work and skill of James Etchells. Built by James Etchells.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
