import { JsonLdScript } from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/about'
import { getActiveSocialLinks } from '@/data/social'
import { absoluteUrl } from '@/lib/seo'

function normalizeSocialUrl(url: string): string {
  if (url.startsWith('http')) return url
  return `https://${url}`
}

export function PersonWebsiteJsonLd() {
  const sameAs = getActiveSocialLinks().map((link) => normalizeSocialUrl(link.url))

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${absoluteUrl('/')}#website`,
        url: absoluteUrl('/'),
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { '@id': `${absoluteUrl('/')}#person` },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Person',
        '@id': `${absoluteUrl('/')}#person`,
        name: siteConfig.name,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        url: absoluteUrl('/'),
        jobTitle: 'Lead Software Engineer & System Architect',
        description: siteConfig.description,
        image: absoluteUrl(siteConfig.ogImage),
        sameAs,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressCountry: 'PK',
        },
      },
    ],
  }

  return <JsonLdScript data={data} />
}
