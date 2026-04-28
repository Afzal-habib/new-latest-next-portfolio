import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { absoluteUrl } from '@/lib/seo'

const description = `Get in touch with ${siteConfig.author} about your next project, collaboration, or consulting — remote-friendly and clear timelines.`

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/contact'),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | ${siteConfig.name}`,
    description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
