import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { absoluteUrl } from '@/lib/seo'

const description = `Learn about ${siteConfig.author}, Lead Software Engineer & System Architect — career journey, skills, experience, and how I deliver reliable software.`

export const metadata: Metadata = {
  title: 'About Me',
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/about'),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
