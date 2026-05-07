import { Metadata } from 'next'

interface PageMetadataProps {
  title: string
  description: string
  path: string
  keywords?: string
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataProps): Metadata {
  const baseUrl = 'https://www.overstaycheck.com'
const fullUrl = `${baseUrl}${path}`

  return {
    title: `${title} — OverstayCheck`,
    description,
    keywords: keywords || 'overstay, visa, I-94, US immigration',
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} — OverstayCheck`,
      description,
      type: 'website',
      url: fullUrl,
      siteName: 'OverstayCheck',
      images: [
        {
          url: `${baseUrl}/icon-light-32x32.png`,
          width: 32,
          height: 32,
          alt: 'OverstayCheck',
        },
      ],
    },
  }
}
