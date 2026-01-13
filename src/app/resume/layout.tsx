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
    icon: [
      {
        url: "resume/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "resume/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "resume/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "resume/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
