import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'TPS Status and Overstay',
  description: 'Can you overstay while on TPS? What happens to your overstay when TPS expires.',
  alternates: {
    canonical: `${site.domain}/tps-status-overstay`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="tps-status-overstay" title="TPS Status and Overstay" description="Can you overstay while on TPS? What happens to your overstay when TPS expires.">
  <p className="lede">
    If you have Temporary Protected Status (TPS), the I-94 overstay rules don't work the same way. TPS can pause the clock on unlawful presence — even if your regular I-94 has already expired.
  </p>

  <h2>What is TPS?</h2>
  <p>
    Temporary Protected Status is a special immigration benefit. It allows people from certain countries to stay and work in the US legally, even if they don't have a visa.
  </p>

  <p>
    TPS is usually granted when:
  </p>

  <ul>
    <li>A country has civil war, natural disaster, or epidemic</li>
    <li>The US government says it's too dangerous to send people back</li>
    <li>Citizens of that country are already in the US</li>
  </ul>

  <p>
    Countries with TPS (2026): Syria, Yemen, South Sudan, Somalia, Myanmar, El Salvador, Honduras, Nicaragua, Sudan, Ukraine, Afghanistan, Cameroon, and others. The list changes.
  </p>

  <h2>How does TPS affect overstay?</h2>

  <Callout tone="info" title="Key rule">If you have TPS, unlawful presence doesn't accrue. That means even if your I-94 expired years ago, you're not building up overstay days.</Callout>

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

  <h2>But what if TPS ends?</h2>
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

  <h2>What are your options if TPS is ending?</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Option 1: Apply for a different status</h3>
  <p>
    If you're eligible for another visa (work visa, family-based, diversity visa, etc.), you can apply before TPS ends.
  </p>

  <p>
    Common options:
  </p>

  <ul>
    <li>H-1B (work visa) — if your employer sponsors you</li>
    <li>Diversity visa — if you win the lottery</li>
    <li>Family-based visa — if a relative petitions for you</li>
    <li>Student visa (F-1) — if you enrol at a school</li>
    <li>Asylum or withholding of removal — if you face persecution</li>
  </ul>

  <p>
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

  <h2>Does TPS give you a green card?</h2>
  <p>
    No. TPS is temporary. It doesn't lead directly to permanent residency (green card) unless you have another path — like marriage to a US citizen, or an employer sponsoring you.
  </p>

  <p>
    Many TPS holders have been waiting 20+ years for a permanent solution. TPS is protection, not a pathway.
  </p>

  <h2>Can you travel while on TPS?</h2>
  <p>
    Yes, but carefully. You need:
  </p>

  <ul>
    <li>Valid advance parole document (travel permit)</li>
    <li>Valid passport from your country</li>
    <li>Often a re-entry permit</li>
  </ul>

  <p>
    Without advance parole, leaving the US cancels your TPS protection. You'll likely be unable to re-enter.
  </p>

  <p>
    If you need to travel, apply for advance parole before you leave.
  </p>

  <h2>Do you need an attorney?</h2>
  <p>
    Yes. TPS cases are fact-specific, and the rules change regularly. Especially as TPS designations end, you need someone to understand your options.
  </p>

  <p>
    The stakes are high: if TPS ends and you have no backup status, you'll accrue overstay again — and potentially face re-entry bans.
  </p>

  <h2>Bottom line</h2>
  <p>
    TPS protects you from overstay accumulation while it's active. But it's temporary. Start planning your next step 6 months before your TPS designation ends. Talk to an attorney about work visas, family sponsorship, or other permanent options.
  </p>

  <Callout tone="warning" title="Important">TPS law is complex and changes frequently. This is general information only. Consult a qualified immigration attorney before making decisions.</Callout>
    </GuideLayout>
  )
}
