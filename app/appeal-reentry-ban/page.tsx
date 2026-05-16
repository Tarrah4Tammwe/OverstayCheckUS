'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function AppealReentryBanPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">Can You Appeal a Re-Entry Ban?</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            A 3-year or 10-year re-entry ban sounds permanent. But there are ways to get it waived — usually through family sponsorship or extreme hardship. Here's how.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">The two ways to beat a re-entry ban</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">1. I-601 Waiver (Extreme Hardship)</h3>
          <p>
            If you can prove that keeping you out causes "extreme hardship" to a US citizen or permanent resident family member, USCIS can waive the ban.
          </p>

          <p>
            <strong>"Extreme hardship" means more than just missing someone.</strong> It means:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Medical/health crisis (eg: your child needs your care and has no one else)</li>
            <li>• Severe financial hardship (eg: your spouse loses their job without you)</li>
            <li>• Mental health crisis directly tied to your absence</li>
            <li>• Special educational needs the family can't meet without you</li>
          </ul>

          <p className="mt-6">
            To qualify, you need:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• A US citizen or green card holder who is your spouse, parent, or adult child</li>
            <li>• Documented proof of the hardship (medical records, financial documents, letters)</li>
            <li>• A lawyer to build the case (most people succeed with attorneys, few without)</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">2. Family-Based Sponsorship (Immediate Relative Visa)</h3>
          <p>
            If you have a US citizen spouse or parent, they can petition for you. You can be abroad and request a waiver of the re-entry ban.
          </p>

          <p>
            This is the most common way to get around a ban. The process:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Your US citizen relative (spouse or parent) files Form I-130 (petition)</li>
            <li>Once approved, you're eligible for an immediate relative visa</li>
            <li>You go to a US consulate abroad</li>
            <li>At the consulate, you request a waiver of the re-entry ban (Form I-601)</li>
            <li>If approved, you get your visa and can re-enter</li>
          </ol>

          <p className="mt-6">
            The "hardship" standard for immediate relatives is lower than for non-family. Simply showing the family will be apart can be enough.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Who qualifies for a waiver?</h2>

          <p>
            <strong>Eligible immediate relatives:</strong>
          </p>

          <ul className="space-y-2 ml-4">
            <li>• US citizen spouse</li>
            <li>• US citizen parent (if you're age 21+)</li>
            <li>• US citizen child (if you're age 21+)</li>
          </ul>

          <p className="mt-6">
            <strong>NOT eligible:</strong>
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Siblings</li>
            <li>• Cousins</li>
            <li>• Aunts/uncles</li>
            <li>• Grandchildren</li>
            <li>• Fiancée (unless you marry first)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How long does a waiver take?</h2>
          <p>
            Waiver processing: 4–12 months (varies by consulate). It's separate from the visa petition, so budget extra time.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you work while you're banned?</h2>
          <p>
            No. A re-entry ban means you must be outside the US. You cannot get work authorisation while under a ban.
          </p>

          <p>
            Some people stay in the US illegally after their overstay while pursuing a waiver. This is extremely risky — it adds to your unlawful presence and makes future cases harder.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Critical:</p>
                <p className="text-orange-800">
                  If you have a re-entry ban, you must leave the US before it's enforceable. Once CBP records it, staying illegally can make you deportable.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Do you need a lawyer?</h2>
          <p>
            Yes. Waiver cases are almost always handled by immigration attorneys. The documentation is complex, and "extreme hardship" has to be proven carefully.
          </p>

          <p>
            Most people who try I-601 waivers alone are denied. Attorneys increase approval odds significantly.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            A re-entry ban isn't the end of the road if you have family in the US. An immediate relative can petition for you, or you can pursue a waiver. But it takes time, documentation, and usually a lawyer. Start the process early.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Not legal advice:</p>
                <p className="text-blue-800">
                  This is general information. Waiver cases are highly individual. Consult a qualified immigration attorney in your state.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">Related guides:</p>
          <ul className="space-y-2">
            <li><Link href="/what-is-i94" className="text-primary hover:underline">→ What is an I-94 Visa?</Link></li>
            <li><Link href="/unlawful-presence" className="text-primary hover:underline">→ Unlawful Presence vs. Overstay</Link></li>
            <li><Link href="/travel-with-reentry-ban" className="text-primary hover:underline">→ Travel Options with a Re-Entry Ban</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
