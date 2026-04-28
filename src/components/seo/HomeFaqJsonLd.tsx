import { JsonLdScript } from '@/components/seo/JsonLd'
import { faqItems } from '@/data/faq'

export function HomeFaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return <JsonLdScript data={data} />
}
