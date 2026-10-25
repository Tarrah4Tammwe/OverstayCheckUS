import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })

const title = 'US Visa Overstay Calculator: Check Your 3-Year and 10-Year Ban Risk | OverstayCheck'
const description =
  "Enter your I-94 expiry date and see how many days of unlawful presence you have, which re-entry ban applies, and what to do next. Free, private, plain English."

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: title, template: '%s | OverstayCheck' },
  description,
  alternates: { canonical: site.domain },
  robots: 'index, follow',
  openGraph: {
    title,
    description,
    url: site.domain,
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary', title, description },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2b3f86',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'OverstayCheck US',
              url: site.domain,
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Any',
              description: 'Free US visa overstay calculator. Check unlawful presence and re-entry ban thresholds.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8935274984783226"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
