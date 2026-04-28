import HomePageClient from './home-client'
import { HomeFaqJsonLd } from '@/components/seo'

export default function HomePage() {
  return (
    <>
      <HomeFaqJsonLd />
      <HomePageClient />
    </>
  )
}
