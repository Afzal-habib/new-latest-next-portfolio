import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { absoluteUrl } from '@/lib/seo'

const description = `Explore the portfolio of ${siteConfig.author}: web and mobile projects across Next.js, Laravel, React Native, and production integrations.`

export const metadata: Metadata = {
  title: 'Projects',
  description,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/projects'),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Projects by ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
