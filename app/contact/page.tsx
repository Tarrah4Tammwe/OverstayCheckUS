import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Overstay Check',
  description: 'Contact Overstay Check with questions or feedback. Note: This is an informational tool, not legal advice.',
  alternates: {
    canonical: 'https://overstaycheck.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Have a question or feedback about Overstay Check? We'd like to hear from you.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Get legal help</h2>
          <p>
            If you need immigration legal advice, consult an immigration attorney. Overstay Check is an informational tool, not legal counsel.
          </p>

          <p>
            Find qualified immigration attorneys:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• <a href="https://www.ailalawyer.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">American Immigration Lawyers Association (AILA) - Find a Lawyer</a></li>
            <li>• <a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LawHelp.org - Free and low-cost legal services</a></li>
            <li>• <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">USCIS - Official government immigration resources</a></li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Feedback</h2>
          <p>
            If you found an error, have a suggestion, or want to contribute guides, feel free to reach out.
          </p>

          <p>
            This tool is made to help people understand their visa status. Your feedback helps make it better.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Disclaimer</h2>
          <p>
            Overstay Check provides informational content only. It is not a substitute for legal advice from a qualified immigration attorney.
          </p>

          <p>
            Immigration law is complex and changes frequently. The information here is current as of the date published, but may not reflect recent changes.
          </p>

          <p>
            Always consult a lawyer before making immigration decisions.
          </p>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">More information:</p>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-primary hover:underline">→ Privacy Policy</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
