import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { absoluteUrl } from '@/lib/seo'

const description = `Explore the technical skills of ${siteConfig.author}: frontend, backend, databases, DevOps, and tools used to ship reliable software.`

export const metadata: Metadata = {
  title: 'Skills & Expertise',
  description,
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    title: `Skills & Expertise | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/skills'),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — skills`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Skills & Expertise | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
