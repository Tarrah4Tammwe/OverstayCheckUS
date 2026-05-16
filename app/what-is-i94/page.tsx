'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function WhatIsI94Page() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">What Is an I-94 Visa?</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            An I-94 is the single most important document for your US visa status. It's not your visa itself — it's the US government's official record of when you're allowed to stay. Getting it right is critical for avoiding overstay penalties.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What's the difference between a visa and an I-94?</h2>
          <p>
            People use the words "visa" and "I-94" as if they mean the same thing. They don't. Here's why it matters.
          </p>

          <p>
            <strong>A visa</strong> is a stamp in your passport. It's your <em>permission to enter</em> the US. It says "we let this person in". But a visa doesn't tell you how long you can stay.
          </p>

          <p>
            <strong>An I-94</strong> is the actual record of how long you're allowed to be here. It's called your "Arrival/Departure Record". The I-94 has a specific date — the "Admit Until Date" — and that's what matters for overstay.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Key point:</p>
                <p className="text-blue-800">
                  Your visa might say it expires in 2028. But your I-94 might say you only have permission to stay until June 2026. If you stay past June 2026, you're overstaying — even though your visa is valid.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Where do you find your I-94?</h2>
          <p>
            Your I-94 appears in three places:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li><strong>Your passport entry stamp.</strong> When you landed in the US, the border agent stamped your passport with a box showing your I-94 number and "Admit Until" date. Look in the US pages of your passport.</li>
            <li><strong>Your I-94 online record.</strong> Visit <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">i94.cbp.dhs.gov</a> and search by name and passport number. This shows your official USCIS record.</li>
            <li><strong>Your I-94 receipt.</strong> If you filled out the form on arrival, you got a receipt with the date.</li>
          </ol>

          <p className="mt-6">
            The online record (CBP.gov) is the most reliable source. That's what immigration officers check, and that's what determines your legal status.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What does the I-94 actually say?</h2>
          <p>
            Your I-94 record contains:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Your name and passport number</li>
            <li>• Your visa category (B-1/B-2 tourist, F-1 student, H-1B worker, etc.)</li>
            <li>• Your arrival date in the US</li>
            <li>• Your <strong>"Admit Until Date"</strong> — the deadline for staying legally</li>
            <li>• Any conditions on your stay (like whether you can work)</li>
          </ul>

          <p className="mt-6 font-bold">
            The "Admit Until Date" is the only number that matters for overstay.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can your I-94 be extended?</h2>
          <p>
            Yes, but only if you apply <em>before</em> it expires. The form is called I-539, and it's for people who need to stay longer.
          </p>

          <p>
            If your I-94 is set to expire on June 30, and you file an I-539 extension application <em>before</em> June 30, you're protected. Even if your application takes months to process, you're not overstaying while it's pending.
          </p>

          <p>
            But if your I-94 expires and you haven't filed an extension, every day after that date counts as unlawful presence.
          </p>

          <p>
            <Link href="/i539-extension" className="text-primary hover:underline font-semibold">
              Learn more about I-539 extensions →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if your I-94 is wrong?</h2>
          <p>
            If your I-94 shows an incorrect "Admit Until Date" — either too early or too late — you can request a correction. But this is rare and requires documentation.
          </p>

          <p>
            If you believe your I-94 is wrong:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>Check the CBP.gov online record first (it's the official source)</li>
            <li>If it's still wrong, contact CBP directly or consult an immigration attorney</li>
            <li>Don't assume it's wrong based on your passport stamp alone — the online record is what counts</li>
          </ol>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What happens if you stay past your I-94 date?</h2>
          <p>
            If you stay in the US after your "Admit Until Date", you're in "unlawful presence". This triggers the automatic re-entry bans.
          </p>

          <ul className="space-y-3 ml-4">
            <li><strong>Under 180 days overstay:</strong> No automatic re-entry ban, but your visa is cancelled</li>
            <li><strong>180-364 days overstay:</strong> A 3-year re-entry ban applies when you leave</li>
            <li><strong>365+ days overstay:</strong> A 10-year re-entry ban applies when you leave</li>
          </ul>

          <p className="mt-6">
            <Link href="/" className="text-primary hover:underline font-semibold">
              Use the calculator to check your specific situation →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Special statuses that affect your I-94</h2>
          <p>
            If you're on TPS (Temporary Protected Status) or have pending asylum or VAWA claims, your I-94 rules might be different. These statuses can pause the overstay clock even if your I-94 date has passed.
          </p>

          <p>
            <Link href="/tps-status-overstay" className="text-primary hover:underline font-semibold">
              Learn how TPS affects overstay rules →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            Your I-94 "Admit Until Date" is the countdown clock for your legal stay. Check it on CBP.gov. If it's coming up soon, consider filing an extension or arranging your departure. And if you've already overstayed, an immigration attorney can explain your options.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Important:</p>
                <p className="text-orange-800">
                  This is general information, not legal advice. If you're facing overstay or immigration issues, consult a qualified immigration attorney in your state.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">Related guides:</p>
          <ul className="space-y-2">
            <li><Link href="/i539-extension" className="text-primary hover:underline">→ I-539 Extension Applications</Link></li>
            <li><Link href="/unlawful-presence" className="text-primary hover:underline">→ Unlawful Presence vs. Overstay</Link></li>
            <li><Link href="/tps-status-overstay" className="text-primary hover:underline">→ TPS Status and Overstay</Link></li>
            <li><Link href="/appeal-reentry-ban" className="text-primary hover:underline">→ Appealing a Re-Entry Ban</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
