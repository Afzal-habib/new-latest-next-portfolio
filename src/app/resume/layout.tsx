import type React from 'react'
import type { Metadata } from 'next'
import './resume.css'
import { siteConfig } from '@/data/about'
import { absoluteUrl } from '@/lib/seo'

const description =
  'Professional resume of Afzal Habib — Lead Software Engineer & System Architect with expertise in Next.js, React, Node.js, Laravel, React Native, and enterprise delivery.'

export const metadata: Metadata = {
  title: 'Resume',
  description,
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: `${siteConfig.name} — Resume`,
    description,
    url: absoluteUrl('/resume'),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} resume`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Resume`,
    description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  icons: {
    icon: '/images/main-logo.png',
    shortcut: '/images/main-logo.png',
    apple: '/images/main-logo.png',
  },
}

export default function ResumeSegmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="resume-root min-h-screen">{children}</div>
}
