'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react'

export default function I539ExtensionPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">I-539 Extension Application</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            An I-539 is your legal way to ask for more time in the US before your I-94 expires. If you file it before your deadline, you're protected from overstay — even while the government takes months to decide.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What is an I-539?</h2>
          <p>
            Form I-539 is called "Application to Extend/Change Nonimmigrant Status". It's for people on temporary visas (tourists, students, workers) who need to stay longer.
          </p>

          <p>
            The key word: <strong>you must file before your I-94 expires.</strong>
          </p>

          <p>
            If you do, USCIS will not count the waiting period as unlawful presence. Your status is "protected" while they review your application — even if it takes 6, 12, or 18 months.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <div className="flex gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-green-900 mb-2">This is important:</p>
                <p className="text-green-800">
                  If your I-94 expires June 30 and you file I-539 on June 20, you are NOT overstaying even if the application is still pending on August 15. The clock stops the moment you file.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Who can file an I-539?</h2>
          <p>
            You can file an I-539 if:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• You're on a temporary visa (B-1/B-2, F-1, H-1B, L-1, etc.)</li>
            <li>• Your I-94 hasn't expired yet (or just expired very recently)</li>
            <li>• You have a valid reason to stay longer (job, school, medical, family, etc.)</li>
            <li>• You haven't been ordered to leave by an immigration judge</li>
          </ul>

          <p className="mt-6">
            <strong>You probably cannot file I-539 if:</strong>
          </p>

          <ul className="space-y-2 ml-4">
            <li>• You're on an immediate relative (IR) visa or green card</li>
            <li>• Your I-94 expired more than 180 days ago</li>
            <li>• You have a deportation order</li>
            <li>• You're in removal proceedings</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Step-by-step: How to file I-539</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Step 1: Get the form</h3>
          <p>
            Download Form I-539 from <a href="https://www.uscis.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">USCIS.gov</a>. You need:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• Form I-539 (main form)</li>
            <li>• Form I-539A (supplemental form, if you have dependents)</li>
            <li>• Fee: $575 (as of 2026)</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Step 2: Gather supporting documents</h3>
          <p>
            What you need depends on your visa type and reason for extending:
          </p>

          <p><strong>For all I-539 applications:</strong></p>
          <ul className="space-y-2 ml-4">
            <li>• Copy of your passport (first page and US visa page)</li>
            <li>• Copy of your I-94 (the page showing your "Admit Until Date")</li>
            <li>• Birth certificate and proof of relationship (if bringing family)</li>
          </ul>

          <p className="mt-4"><strong>For work visas (H-1B, L-1, O-1, etc.):</strong></p>
          <ul className="space-y-2 ml-4">
            <li>• Letter from your employer (on company letterhead) confirming the extension</li>
            <li>• Current employment contract or offer letter</li>
            <li>• Pay stubs from the last 2-3 months</li>
          </ul>

          <p className="mt-4"><strong>For student visas (F-1):</strong></p>
          <ul className="space-y-2 ml-4">
            <li>• Updated I-20 form from your school</li>
            <li>• Proof of enrollment</li>
            <li>• Financial support documentation</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Step 3: Fill out the form</h3>
          <p>
            Follow the USCIS instructions carefully. Key sections:
          </p>

          <ul className="space-y-3 ml-4">
            <li><strong>Part 1:</strong> Your personal information</li>
            <li><strong>Part 2:</strong> Immigration history (when you arrived, visa type, current status)</li>
            <li><strong>Part 3:</strong> Reason for extension (select the reason that applies)</li>
            <li><strong>Part 4:</strong> How long you're requesting to extend (usually to match your visa validity)</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Step 4: Pay the fee</h3>
          <p>
            USCIS charges $575 for I-539 applications (2026). You can:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Mail a check or money order with your application</li>
            <li>• Pay online (if filing electronically)</li>
            <li>• Apply for a fee waiver if you're low income (Form I-912)</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Step 5: Submit</h3>
          <p>
            Mail or file your complete I-539 package to the USCIS address listed in the instructions. Keep a copy for yourself.
          </p>

          <p>
            Important: <strong>Your application must be received before your I-94 expires.</strong> Mail it with enough time — at least 1-2 weeks before the deadline.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What happens after you file?</h2>

          <p>
            USCIS will send you:
          </p>

          <ul className="space-y-3 ml-4">
            <li><strong>Notice of Receipt (Form I-797):</strong> Confirms they got your application. This is your proof that you're protected from overstay.</li>
            <li><strong>Fingerprint appointment notice:</strong> Some applicants need to go in for fingerprints</li>
            <li><strong>Decision letter:</strong> USCIS approves or denies your extension (can take 2-12 months)</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Key point:</p>
                <p className="text-blue-800">
                  As long as your I-539 is pending, you have a "period of stay" that protects you. You can legally work and travel (with advance parole if needed). You're not overstaying.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if your I-539 is denied?</h2>
          <p>
            If USCIS denies your extension, your I-94 goes back to the original expiration date. Any time you've spent in the US after that date becomes unlawful presence.
          </p>

          <p>
            In that case, you have limited options:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Request a deferred action or prosecutorial discretion (rare)</li>
            <li>• File an appeal (Form I-290B) if there's a legal error</li>
            <li>• Leave the US before your original I-94 date to avoid overstay penalties</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you work while your I-539 is pending?</h2>
          <p>
            It depends on your visa type.
          </p>

          <p>
            <strong>If you're on an H-1B, L-1, or other work visa:</strong> Yes, you can continue working for the same employer while your I-539 is pending — as long as your employer's petitions are also pending.
          </p>

          <p>
            <strong>If you're on B-1/B-2, F-1, or J-1:</strong> You cannot work (with rare exceptions). You need different status or work authorization.
          </p>

          <p>
            If you need to work while extending, consult an immigration attorney about other visa options.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How long does I-539 take?</h2>
          <p>
            USCIS doesn't give a fixed timeline. Processing times vary by:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Which USCIS office is handling your case</li>
            <li>• How complex your case is</li>
            <li>• Whether USCIS needs additional documents from you</li>
          </ul>

          <p className="mt-6">
            Typical range: 2–12 months. You can check status on the USCIS website using your receipt number.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Do you need an immigration attorney?</h2>
          <p>
            You can file I-539 yourself (many people do), but an attorney can help if:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Your case is complex (prior overstay, visa violations, dependents)</li>
            <li>• You've been denied before</li>
            <li>• You need advance parole or work authorization</li>
          </ul>

          <p className="mt-6">
            The I-539 form itself is straightforward, but the supporting documents matter. If you're unsure about your case, a consultation with an attorney is worth the cost.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            File your I-539 <strong>before your I-94 expires.</strong> This stops the overstay clock and gives you time to sort out your status. If you miss the deadline, every day counts as unlawful presence — and that triggers the re-entry bans.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Not legal advice:</p>
                <p className="text-orange-800">
                  This is general information only. Immigration rules vary by case. Talk to a qualified immigration attorney before filing I-539.
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
            <li><Link href="/appeal-reentry-ban" className="text-primary hover:underline">→ Appealing a Re-Entry Ban</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
