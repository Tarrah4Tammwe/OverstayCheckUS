import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Appeal a Re-Entry Ban',
  description: 'How to appeal or waive a US re-entry ban after an overstay. I-601 waivers, timelines, and eligibility explained.',
  alternates: {
    canonical: `${site.domain}/appeal-reentry-ban`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="appeal-reentry-ban" title="Can You Appeal a Re-Entry Ban?" description="How to appeal or waive a US re-entry ban after an overstay. I-601 waivers, timelines, and eligibility explained.">
  <p className="lede">
    A 3-year or 10-year re-entry ban sounds permanent. But there are ways to get it waived — usually through family sponsorship or extreme hardship. Here's how.
  </p>

  <h2>The two ways to beat a re-entry ban</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">1. I-601 Waiver (Extreme Hardship)</h3>
  <p>
    If you can prove that keeping you out causes "extreme hardship" to a US citizen or permanent resident family member, USCIS can waive the ban.
  </p>

  <p>
    <strong>"Extreme hardship" means more than just missing someone.</strong> It means:
  </p>

  <ul>
    <li>Medical/health crisis (eg: your child needs your care and has no one else)</li>
    <li>Severe financial hardship (eg: your spouse loses their job without you)</li>
    <li>Mental health crisis directly tied to your absence</li>
    <li>Special educational needs the family can't meet without you</li>
  </ul>

  <p>
    To qualify, you need:
  </p>

  <ul>
    <li>A US citizen or green card holder who is your spouse, parent, or adult child</li>
    <li>Documented proof of the hardship (medical records, financial documents, letters)</li>
    <li>A lawyer to build the case (most people succeed with attorneys, few without)</li>
  </ul>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">2. Family-Based Sponsorship (Immediate Relative Visa)</h3>
  <p>
    If you have a US citizen spouse or parent, they can petition for you. You can be abroad and request a waiver of the re-entry ban.
  </p>

  <p>
    This is the most common way to get around a ban. The process:
  </p>

  <ol>
    <li>Your US citizen relative (spouse or parent) files Form I-130 (petition)</li>
    <li>Once approved, you're eligible for an immediate relative visa</li>
    <li>You go to a US consulate abroad</li>
    <li>At the consulate, you request a waiver of the re-entry ban (Form I-601)</li>
    <li>If approved, you get your visa and can re-enter</li>
  </ol>

  <p>
    The "hardship" standard for immediate relatives is lower than for non-family. Simply showing the family will be apart can be enough.
  </p>

  <h2>Who qualifies for a waiver?</h2>

  <p>
    <strong>Eligible immediate relatives:</strong>
  </p>

  <ul>
    <li>US citizen spouse</li>
    <li>US citizen parent (if you're age 21+)</li>
    <li>US citizen child (if you're age 21+)</li>
  </ul>

  <p>
    <strong>NOT eligible:</strong>
  </p>

  <ul>
    <li>Siblings</li>
    <li>Cousins</li>
    <li>Aunts/uncles</li>
    <li>Grandchildren</li>
    <li>Fiancée (unless you marry first)</li>
  </ul>

  <h2>How long does a waiver take?</h2>
  <p>
    Waiver processing: 4–12 months (varies by consulate). It's separate from the visa petition, so budget extra time.
  </p>

  <h2>Can you work while you're banned?</h2>
  <p>
    No. A re-entry ban means you must be outside the US. You cannot get work authorisation while under a ban.
  </p>

  <p>
    Some people stay in the US illegally after their overstay while pursuing a waiver. This is extremely risky — it adds to your unlawful presence and makes future cases harder.
  </p>

  <Callout tone="warning" title="Critical">If you have a re-entry ban, you must leave the US before it's enforceable. Once CBP records it, staying illegally can make you deportable.</Callout>

  <h2>Do you need a lawyer?</h2>
  <p>
    Yes. Waiver cases are almost always handled by immigration attorneys. The documentation is complex, and "extreme hardship" has to be proven carefully.
  </p>

  <p>
    Most people who try I-601 waivers alone are denied. Attorneys increase approval odds significantly.
  </p>

  <h2>Bottom line</h2>
  <p>
    A re-entry ban isn't the end of the road if you have family in the US. An immediate relative can petition for you, or you can pursue a waiver. But it takes time, documentation, and usually a lawyer. Start the process early.
  </p>

  <Callout tone="info" title="Not legal advice">This is general information. Waiver cases are highly individual. Consult a qualified immigration attorney in your state.</Callout>
    </GuideLayout>
  )
}
