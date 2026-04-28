import { siteConfig } from '@/data/about'

/** Production site origin without trailing slash */
export function getSiteOrigin(): string {
  return siteConfig.url.replace(/\/$/, '')
}

/** Absolute HTTPS URL for a pathname (leading slash) */
export function absoluteUrl(pathname: string): string {
  const base = getSiteOrigin()
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${base}${path}`
}

/** Prefer HTTPS project images for OG; otherwise global share image as absolute URL */
export function resolveOgImageUrl(candidate?: string): string {
  if (candidate?.startsWith('https://')) return candidate
  const fb = siteConfig.ogImage
  if (fb.startsWith('/')) return absoluteUrl(fb)
  return fb
}
