import type { Project } from '@/types'
import { JsonLdScript } from '@/components/seo/JsonLd'
import { siteConfig } from '@/data/about'
import { absoluteUrl, resolveOgImageUrl } from '@/lib/seo'

export function ProjectJsonLd({ project }: { project: Project }) {
  const url = absoluteUrl(`/projects/${project.slug}`)
  const imageUrl = resolveOgImageUrl(project.images[0]?.url)

  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: project.title,
    headline: project.title,
    description: project.shortDescription || project.description,
    url,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: absoluteUrl('/'),
    },
    keywords: project.tags.join(', '),
  }

  return <JsonLdScript data={data} />
}
