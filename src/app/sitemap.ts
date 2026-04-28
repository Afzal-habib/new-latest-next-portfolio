import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'
import { getSiteOrigin } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin()
  const now = new Date()

  const staticPaths = ['/', '/about', '/contact', '/projects', '/skills', '/resume']

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.85,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: project.startDate ? new Date(project.startDate) : now,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.75 : 0.65,
  }))

  const skillEntries: MetadataRoute.Sitemap = skills.map((skill) => ({
    url: `${base}/skills/${skill.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: skill.featured ? 0.7 : 0.55,
  }))

  return [...staticEntries, ...projectEntries, ...skillEntries]
}
