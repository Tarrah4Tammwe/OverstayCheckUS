'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function DeniedEntryPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">Denied Entry at the Border</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            If CBP denies you entry to the US, you have limited rights — but there are steps you can take. Here's what to do.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Why might you be denied?</h2>
          <p>
            CBP can deny entry for:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Re-entry ban (3-year or 10-year overstay penalty)</li>
            <li>• Criminal conviction</li>
            <li>• Fraudulent documents or lying to CBP</li>
            <li>• Gang affiliation or terrorism concerns</li>
            <li>• Medical grounds (communicable disease)</li>
            <li>• Lack of proof of funds or return ticket</li>
            <li>• Prior visa violations</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What happens when you're denied?</h2>
          <p>
            CBP will:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Take you to a secondary inspection room</li>
            <li>Tell you the reason for denial</li>
            <li>Give you a Notice of Ineligibility or similar form</li>
            <li>Allow you to call a lawyer or family member</li>
            <li>Send you back on the next flight to your point of departure (at your cost)</li>
          </ol>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Your rights at the border:</p>
                <p className="text-orange-800">
                  You have the right to remain silent. You can ask for a lawyer. Don't lie to CBP — lying is a separate crime. Be honest and clear.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What are your options?</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If the denial is based on a re-entry ban</h3>
          <p>
            A re-entry ban is fixed. You cannot appeal it at the border. Your only options are:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• File an I-601 waiver (if you have family sponsorship) once abroad</li>
            <li>• Wait until the ban expires (3 or 10 years)</li>
            <li>• Don't try to enter again</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If the denial is based on insufficient documents</h3>
          <p>
            If CBP says you don't have enough proof of funds or a return ticket, you could theoretically:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Call someone in the US to wire you money or buy you a return ticket</li>
            <li>• Ask CBP for a second chance</li>
            <li>• Have a friend/family member at the airport come to vouch for you</li>
          </ul>

          <p className="mt-6">
            This rarely works. Once CBP denies you, they're usually firm.
          </p>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If the denial is based on fraud or lies</h3>
          <p>
            If you lied on your visa application or to CBP, the denial is likely permanent. You would need:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Clear evidence the fraud allegation is false</li>
            <li>• A lawyer to file for expedited review</li>
            <li>• Very strong mitigating circumstances</li>
          </ul>

          <p className="mt-6">
            This is difficult and requires legal representation.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you appeal a denial?</h2>
          <p>
            No formal appeal process exists for border denials. Once CBP says no, you're sent back.
          </p>

          <p>
            However, you can:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Request a supervisor review (rare and usually unsuccessful)</li>
            <li>• Consult an immigration attorney about filing an I-601 waiver if you have family sponsorship</li>
            <li>• File a FOIA request to see what CBP recorded about your case</li>
            <li>• Try again with a different visa application months or years later (if your circumstances change)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What do you do after you're deported?</h2>
          <p>
            CBP will:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Put you on a plane back to your home country or last departure point</li>
            <li>• Give you a deportation/removal notice</li>
            <li>• Possibly ban you from future entry</li>
          </ul>

          <p className="mt-6">
            Once you're back in your home country or abroad:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Consult an immigration attorney immediately</li>
            <li>• Gather documents supporting your case (if applicable)</li>
            <li>• File an I-601 waiver if you have family sponsorship</li>
            <li>• Explore other visa options (work visa, student visa, etc.)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Will this affect future travel?</h2>
          <p>
            It depends on the reason for denial.
          </p>

          <p>
            <strong>Re-entry ban:</strong> You cannot return until the ban expires or is waived. Every attempt to enter will be denied.
          </p>

          <p>
            <strong>Fraud or criminal conviction:</strong> You may be permanently barred. Even after time, a second attempt will likely be denied.
          </p>

          <p>
            <strong>Insufficient documents:</strong> You can try again later with better proof (more money, a return ticket, a job offer).
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you sue CBP for wrongful denial?</h2>
          <p>
            Extremely unlikely. CBP has broad discretion at the border. US citizens can challenge border decisions in court, but non-citizens have very limited recourse.
          </p>

          <p>
            You would need:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Clear proof of discrimination (racial, religious, political)</li>
            <li>• Solid evidence CBP violated federal law</li>
            <li>• An experienced immigration attorney</li>
          </ul>

          <p className="mt-6">
            Most lawsuits fail.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            If denied at the border, your immediate options are limited. Accept the denial, get on the plane, and then consult a lawyer. From abroad, you can pursue a waiver, apply for a different visa, or prepare for a future attempt. But at the moment of denial, CBP's decision is final.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Before traveling to the US:</p>
                <p className="text-blue-800">
                  Check your status. If you think you might be denied, consult an immigration attorney BEFORE boarding your flight. Don't take the risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">Related guides:</p>
          <ul className="space-y-2">
            <li><Link href="/travel-with-reentry-ban" className="text-primary hover:underline">→ Travel with a Re-Entry Ban</Link></li>
            <li><Link href="/airport-immigration-check" className="text-primary hover:underline">→ Airport Immigration Check</Link></li>
            <li><Link href="/appeal-reentry-ban" className="text-primary hover:underline">→ Appealing a Re-Entry Ban</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
