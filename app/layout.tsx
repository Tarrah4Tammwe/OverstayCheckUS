import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Analytics from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geist_mono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OverstayCheck — Check Your US Visa Status & I-94',
  description: 'Enter your I-94 expiry date and find instantly if you face a 3-year or 10-year US re-entry ban. Plain English answer in seconds.',
  keywords: 'I-94 lookup, visa overstay calculator, overstay calculator, US visa status, re-entry ban',
  metadataBase: new URL('https://www.overstaycheck.com'),
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
    canonical: 'https://www.overstaycheck.com',
  },
  openGraph: {
    title: 'OverstayCheck — Check Your US Visa Status & I-94',
    description: 'Enter your I-94 expiry date and find instantly if you face a 3-year or 10-year US re-entry ban. Plain English answer in seconds.',
    type: 'website',
    url: 'https://www.overstaycheck.com',
    siteName: 'OverstayCheck',
    images: [
      {
        url: 'https://www.overstaycheck.com/icon-light-32x32.png',
        width: 32,
        height: 32,
        alt: 'OverstayCheck Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OverstayCheck — Check Your US Visa Status',
    description: 'Find out instantly if you face a 3-year or 10-year re-entry ban.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=pub-8935274984783226`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-dsdg0google"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-dsdg0google', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${geist.variable} ${geist_mono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
