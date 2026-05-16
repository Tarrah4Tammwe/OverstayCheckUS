'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function TPSStatusPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">TPS Status and Overstay</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            If you have Temporary Protected Status (TPS), the I-94 overstay rules don't work the same way. TPS can pause the clock on unlawful presence — even if your regular I-94 has already expired.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What is TPS?</h2>
          <p>
            Temporary Protected Status is a special immigration benefit. It allows people from certain countries to stay and work in the US legally, even if they don't have a visa.
          </p>

          <p>
            TPS is usually granted when:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• A country has civil war, natural disaster, or epidemic</li>
            <li>• The US government says it's too dangerous to send people back</li>
            <li>• Citizens of that country are already in the US</li>
          </ul>

          <p className="mt-6">
            Countries with TPS (2026): Syria, Yemen, South Sudan, Somalia, Myanmar, El Salvador, Honduras, Nicaragua, Sudan, Ukraine, Afghanistan, Cameroon, and others. The list changes.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How does TPS affect overstay?</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Key rule:</p>
                <p className="text-blue-800">
                  If you have TPS, unlawful presence doesn't accrue. That means even if your I-94 expired years ago, you're not building up overstay days.
                </p>
              </div>
            </div>
          </div>

          <p>
            Here's the scenario:
          </p>

          <p>
            Your I-94 expired on June 1, 2023. You didn't file an extension. Normally, after 180 days of overstay, you'd face a 3-year re-entry ban when you left.
          </p>

          <p>
            But on September 15, 2023, your country got TPS designation, and you applied and were approved.
          </p>

          <p>
            Now: The overstay clock stopped. As long as you maintain TPS status, those months of overstay don't count. No re-entry ban will apply when you leave — because you weren't unlawfully present while TPS was in effect.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">But what if TPS ends?</h2>
          <p>
            TPS doesn't last forever. The government re-designates it every 6–18 months. It can end.
          </p>

          <p>
            <strong>Scenario: TPS is terminated</strong>
          </p>

          <p>
            Your TPS designation ends on July 1, 2026. You have 90 days to decide: file for something else, or prepare to leave.
          </p>

          <p>
            If you stay in the US after July 1 without a new status, the overstay clock <em>resumes</em> from where it left off. If you were overstayed 200 days before TPS, and TPS lasted 2 years, now your counter is ticking again — and you're in the 3-year ban zone.
          </p>

          <p>
            That's why it's critical to prepare <em>before</em> TPS ends.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What are your options if TPS is ending?</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Option 1: Apply for a different status</h3>
          <p>
            If you're eligible for another visa (work visa, family-based, diversity visa, etc.), you can apply before TPS ends.
          </p>

          <p>
            Common options:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• H-1B (work visa) — if your employer sponsors you</li>
            <li>• Diversity visa — if you win the lottery</li>
            <li>• Family-based visa — if a relative petitions for you</li>
            <li>• Student visa (F-1) — if you enrol at a school</li>
            <li>• Asylum or withholding of removal — if you face persecution</li>
          </ul>

          <p className="mt-6">
            Ask an immigration attorney which applies to you.
          </p>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Option 2: File for deferred action</h3>
          <p>
            If you've been on TPS for years and have ties to the US (family, job, community), you might be able to apply for deferred action (also called prosecutorial discretion). This is discretionary — not guaranteed — but it keeps you in the US while your case is reviewed.
          </p>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Option 3: Leave the US voluntarily</h3>
          <p>
            If no other status is available, the safest option is to leave before TPS ends. This stops the overstay clock before it resumes. You avoid triggering re-entry bans.
          </p>

          <p>
            If you've already overstayed significantly, leaving early might be worth it.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Does TPS give you a green card?</h2>
          <p>
            No. TPS is temporary. It doesn't lead directly to permanent residency (green card) unless you have another path — like marriage to a US citizen, or an employer sponsoring you.
          </p>

          <p>
            Many TPS holders have been waiting 20+ years for a permanent solution. TPS is protection, not a pathway.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you travel while on TPS?</h2>
          <p>
            Yes, but carefully. You need:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Valid advance parole document (travel permit)</li>
            <li>• Valid passport from your country</li>
            <li>• Often a re-entry permit</li>
          </ul>

          <p className="mt-6">
            Without advance parole, leaving the US cancels your TPS protection. You'll likely be unable to re-enter.
          </p>

          <p>
            If you need to travel, apply for advance parole before you leave.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Do you need an attorney?</h2>
          <p>
            Yes. TPS cases are fact-specific, and the rules change regularly. Especially as TPS designations end, you need someone to understand your options.
          </p>

          <p>
            The stakes are high: if TPS ends and you have no backup status, you'll accrue overstay again — and potentially face re-entry bans.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            TPS protects you from overstay accumulation while it's active. But it's temporary. Start planning your next step 6 months before your TPS designation ends. Talk to an attorney about work visas, family sponsorship, or other permanent options.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Important:</p>
                <p className="text-orange-800">
                  TPS law is complex and changes frequently. This is general information only. Consult a qualified immigration attorney before making decisions.
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
