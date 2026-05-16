import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Overstay Check - US Visa Overstay Calculator',
  description: 'Check if you\'re overstaying in the US and understand your visa status and re-entry bans',
  alternates: {
    canonical: 'https://overstaycheck.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Overstay Check',
              url: 'https://overstaycheck.com',
              description: 'US Visa Overstay Calculator - Check re-entry bans',
            }),
          }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-8935274984783226"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
