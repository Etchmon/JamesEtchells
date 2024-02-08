import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "James Etchells | Portfolio",
  description:
    "A website to showcase the work and skill of James Etchells. Built by James Etchells.",
  icons: {
    icon: "/images/J.svg",
    apple: "/images/J.js",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-1">
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  )
}
