import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'
import { absoluteUrl, resolveOgImageUrl } from '@/lib/seo'
import { BreadcrumbJsonLd, ProjectJsonLd } from '@/components/seo'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const description = project.shortDescription || project.description
  const canonicalPath = `/projects/${slug}`
  const ogImage = resolveOgImageUrl(project.images[0]?.url)

  return {
    title: project.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'article',
      title: `${project.title} | ${siteConfig.name}`,
      description,
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.images[0]?.alt || project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function ProjectDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  return (
    <>
      {project ? (
        <>
          <ProjectJsonLd project={project} />
          <BreadcrumbJsonLd
            items={[
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: project.title, path: `/projects/${slug}` },
            ]}
          />
        </>
      ) : null}
      {children}
    </>
  )
}
