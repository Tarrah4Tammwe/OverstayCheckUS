'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function AirportImmigrationPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">Airport Immigration Check</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            When you land at a US airport, CBP (Customs and Border Protection) agents will ask questions. Here's what to expect and how your overstay status affects you.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Who checks your status?</h2>
          <p>
            CBP agents at immigration control. They have access to:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Your passport</li>
            <li>• Your USCIS records (including any past overstay)</li>
            <li>• Your arrival/departure history</li>
            <li>• Your visa status</li>
            <li>• Any deportation orders or re-entry bans</li>
          </ul>

          <p className="mt-6">
            Everything is linked. If you overstayed in 2018, they'll see it. If you're under a re-entry ban, they'll see it immediately.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What questions will they ask?</h2>
          <p>
            Standard questions:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Where are you coming from?</li>
            <li>• What's the purpose of your visit?</li>
            <li>• How long are you staying?</li>
            <li>• Do you have a return ticket?</li>
            <li>• Where are you staying?</li>
            <li>• Do you have a job lined up?</li>
          </ul>

          <p className="mt-6">
            If you're re-entering after an overstay or on a borderline status, they might ask:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• When did you last leave the US?</li>
            <li>• Have you ever overstayed a US visa?</li>
            <li>• Do you have a waiver or letter from USCIS?</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What happens if you have an overstay on record?</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If you're re-entering with a valid visa or status</h3>
          <p>
            CBP will see the overstay history, but if you have valid status and no re-entry ban, they'll usually let you in. They may:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Ask you why you overstayed last time</li>
            <li>• Make a note in your file</li>
            <li>• Require a return ticket or proof of funds</li>
            <li>• Reduce the number of days they grant you to stay</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If you're under a re-entry ban</h3>
          <p>
            CBP will see the re-entry ban immediately. They will:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Deny you entry</li>
            <li>• Put you in a secondary inspection room</li>
            <li>• Ask you to call a lawyer</li>
            <li>• Send you back on the next flight to your point of departure</li>
          </ul>

          <p className="mt-6">
            There is no flexibility here. A re-entry ban is absolute.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Do NOT try to hide an overstay:</p>
                <p className="text-orange-800">
                  CBP has full access to your record. Lying about an overstay is a separate crime. Be honest. If you're concerned, consult a lawyer before traveling.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if CBP discovers you're overstaying right now?</h2>
          <p>
            If you're currently in unlawful presence (you're past your I-94 date with no extension filed), and you try to leave the US, CBP at the airport will:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Check your I-94 date when you scan your passport</li>
            <li>• Discover you're overstayed</li>
            <li>• Formally record the overstay</li>
            <li>• Let you leave (they don't usually detain you at departure)</li>
          </ul>

          <p className="mt-6">
            Once you leave with an overstay on your record, the re-entry ban clock starts (180 days, 365 days, etc.). You can't come back without a waiver.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you talk your way out of a re-entry ban?</h2>
          <p>
            No. CBP agents have no discretion. A re-entry ban is a law. They'll deny you entry, no matter what you say.
          </p>

          <p>
            Your only options are:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• File an I-601 waiver (if you have family in the US)</li>
            <li>• Wait until the ban expires (3 or 10 years)</li>
            <li>• Don't try to enter</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What about connections through US airports?</h2>
          <p>
            If you're just transiting through the US (eg: flying from Mexico to Canada with a connection in Houston), you still have to clear immigration.
          </p>

          <p>
            If you have a re-entry ban, you can't even transit through the US. CBP will deny you entry at the first airport.
          </p>

          <p>
            Plan international flights that avoid the US entirely.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if you're a dual citizen?</h2>
          <p>
            If you're a US citizen and also a citizen of another country, the re-entry ban doesn't apply to you. You can re-enter using your US passport.
          </p>

          <p>
            But if you're only a foreign national, the ban applies.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            CBP has complete records. Be honest with them. If you know you're under a re-entry ban, don't try to enter the US. If you're unsure of your status, check your USCIS record before traveling, and talk to an attorney.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Before traveling:</p>
                <p className="text-blue-800">
                  Check your USCIS status online. If you're unsure about your I-94 or overstay status, consult an immigration attorney before boarding any plane.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">Related guides:</p>
          <ul className="space-y-2">
            <li><Link href="/travel-with-reentry-ban" className="text-primary hover:underline">→ Travel with a Re-Entry Ban</Link></li>
            <li><Link href="/unlawful-presence" className="text-primary hover:underline">→ Unlawful Presence vs. Overstay</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
