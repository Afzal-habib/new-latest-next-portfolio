import { JsonLdScript } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/seo'

export type Crumb = { name: string; path: string }

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path.startsWith('/') ? item.path : `/${item.path}`),
    })),
  }

  return <JsonLdScript data={data} />
}
