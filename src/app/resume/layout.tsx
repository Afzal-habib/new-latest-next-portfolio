import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./resume.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Afzal Habib - Full Stack Developer Resume",
  description:
    "Professional resume of Afzal Habib - MERN Stack Developer with expertise in Next.js, React, Node.js, and mobile development",
  generator: "v0.app",
  icons: {
    icon: '/images/main-logo.png',
    shortcut: '/images/main-logo.png',
    apple: '/images/main-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
