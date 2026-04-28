import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { getSkillBySlug, getAllSkillSlugs } from '@/data/skills'
import { absoluteUrl } from '@/lib/seo'
import { BreadcrumbJsonLd } from '@/components/seo'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const skill = getSkillBySlug(slug)

  if (!skill) {
    return {
      title: 'Skill Not Found',
    }
  }

  const canonicalPath = `/skills/${slug}`

  return {
    title: skill.name,
    description: skill.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${skill.name} | ${siteConfig.name}`,
      description: skill.description,
      url: absoluteUrl(canonicalPath),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${skill.name} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${skill.name} | ${siteConfig.name}`,
      description: skill.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllSkillSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function SkillDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const skill = getSkillBySlug(slug)

  return (
    <>
      {skill ? (
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', path: '/' },
            { name: 'Skills', path: '/skills' },
            { name: skill.name, path: `/skills/${slug}` },
          ]}
        />
      ) : null}
      {children}
    </>
  )
}
