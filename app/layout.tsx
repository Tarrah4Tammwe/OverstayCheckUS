import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Overstay Check - UK Visa & Overstay Calculator',
  description: 'Check if you\'re overstaying in the UK and understand your visa status',
  alternates: {
    canonical: 'https://www.overstaycheck.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Overstay Check',
              url: 'https://www.overstaycheck.com',
              description: 'Check if you\'re overstaying in the UK',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
