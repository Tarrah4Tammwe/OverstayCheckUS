'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function USCISRecordsPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">USCIS Overstay Records</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Every time you enter or leave the US, it's recorded. Your overstay is documented forever. Here's what USCIS knows about you and how to check your own record.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What records does USCIS keep?</h2>
          <p>
            USCIS and CBP (Customs and Border Protection) maintain:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Every time you entered the US (date, port of entry, visa type)</li>
            <li>• Every time you left the US (date, port of departure)</li>
            <li>• Your I-94 record (including "Admit Until Date")</li>
            <li>• Any visa applications or rejections</li>
            <li>• Any green card applications</li>
            <li>• Any overstays or unlawful presence</li>
            <li>• Any deportation orders or re-entry bans</li>
            <li>• Any criminal records</li>
          </ul>

          <p className="mt-6">
            All of this is connected in one database. Agents at every border, consulate, and USCIS office can see it.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How long does an overstay stay on your record?</h2>
          <p>
            Forever. There's no statute of limitations. A 5-day overstay from 20 years ago will still show up.
          </p>

          <p>
            You cannot request that USCIS remove or forget an overstay. It's part of your permanent immigration file.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How to check your own USCIS record</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Method 1: I-94 Online (easiest)</h3>
          <p>
            Visit <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">i94.cbp.dhs.gov</a> and search by your name and passport number.
          </p>

          <p>
            You'll see:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Your most recent I-94 arrival and departure records</li>
            <li>• Your "Admit Until Date"</li>
            <li>• Whether you overstayed (if it shows a departure date after your I-94 expiry, you overstayed)</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Method 2: USCIS My USCIS Account</h3>
          <p>
            Create an account at <a href="https://myaccount.uscis.dhs.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">myaccount.uscis.dhs.gov</a>.
          </p>

          <p>
            You can see:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• All your USCIS applications and petitions</li>
            <li>• Your visa status</li>
            <li>• Any pending cases</li>
            <li>• Overstay notices (if issued)</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Method 3: Request via FOIA</h3>
          <p>
            You can request your full immigration file from USCIS using the Freedom of Information Act (FOIA).
          </p>

          <p>
            This takes 2–6 months and you'll get everything: scans of documents, notes from agents, everything.
          </p>

          <p>
            File a FOIA request at <a href="https://www.uscis.gov/foia" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">uscis.gov/foia</a>.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if you can't find your I-94 record?</h2>
          <p>
            If the CBP.gov website doesn't show your record, you either:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Never had one (you weren't admitted properly)</li>
            <li>• Entered without inspection (illegal entry)</li>
            <li>• Have an extremely old record (pre-2000s might not be online)</li>
          </ul>

          <p className="mt-6">
            Contact CBP or an immigration attorney for help accessing old records.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you get an overstay removed from your record?</h2>
          <p>
            No. An overstay is a fact. It happened. USCIS will not erase it or pretend it didn't happen.
          </p>

          <p>
            What you CAN do:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• File an I-601 waiver if you have family sponsorship (may waive the consequences)</li>
            <li>• Document mitigating circumstances (medical emergency, abuse, etc.) for future cases</li>
            <li>• Consult an attorney about your options</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Important:</p>
                <p className="text-blue-800">
                  An overstay stays on your record even if you later married a US citizen or got a green card. It doesn't disappear. But a green card means you're no longer "overstayed" — you're now lawfully present.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if your record is wrong?</h2>
          <p>
            If you believe your I-94 record is incorrect (wrong dates, wrong visa type, etc.), you can:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Contact CBP directly to request a review</li>
            <li>File a FOIA request with supporting documents</li>
            <li>Consult an immigration attorney if the error is significant</li>
          </ol>

          <p className="mt-6">
            Corrections are rare and require solid proof that the record is wrong.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can family members see your record?</h2>
          <p>
            No. Your USCIS record is confidential. Only:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• You</li>
            <li>• An immigration attorney you authorize</li>
            <li>• USCIS and CBP agents</li>
            <li>• A family member you give explicit permission to</li>
          </ul>

          <p className="mt-6">
            Don't assume your family knows about your overstay unless you told them.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            Your overstay is recorded and permanent. Check your own record via i94.cbp.dhs.gov to confirm. Don't be surprised if you see it — it means CBP caught it at the border. If you're planning future US immigration, know that this overstay will come up. Plan accordingly.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Before future applications:</p>
                <p className="text-orange-800">
                  Always check your record before applying for visas, jobs requiring background checks, or anything tied to immigration. Know what USCIS knows about you.
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
            <li><Link href="/airport-immigration-check" className="text-primary hover:underline">→ Airport Immigration Check</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
