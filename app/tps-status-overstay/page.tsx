import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'TPS and Unlawful Presence: What Counts',
  description:
    'Time with Temporary Protected Status is not unlawful presence, but time before and after is. How TPS interacts with overstay, travel and the bars.',
  alternates: { canonical: `${site.domain}/tps-status-overstay` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="tps-status-overstay"
      title="TPS and Overstay"
      description="Temporary Protected Status stops unlawful presence from accruing while it is in effect, but it does not erase days counted before or after."
      sources={[
        { label: 'USCIS: Temporary Protected Status (current designations and rules)', href: 'https://www.uscis.gov/humanitarian/temporary-protected-status' },
        { label: '8 U.S.C. §1254a: Temporary Protected Status', href: 'https://www.law.cornell.edu/uscode/text/8/1254a' },
        { label: '8 U.S.C. §1182(a)(9)(B): unlawful presence bars', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
      ]}
    >
      <p className="lede">
        Temporary Protected Status (TPS) protects people from deportation and allows work authorization while their
        country’s designation lasts. It also changes how unlawful presence is counted, in a way that is easy to get
        wrong.
      </p>

      <Callout tone="info" title="In short">
        While you have TPS, time does <strong>not</strong> count as unlawful presence. Days you accrued <em>before</em>{' '}
        TPS still count, and counting can <strong>resume</strong> when TPS ends if you have no other status.
      </Callout>

      <h2>What TPS is</h2>
      <p>
        TPS is a temporary status the US government can give to nationals of a country that is affected by armed
        conflict, a natural disaster or other extraordinary conditions. People must apply, show they meet the
        requirements, and be registered during the designated period. A designation is for a fixed period set by the
        government. It can be extended, or it can be ended.
      </p>
      <p>
        Which countries are designated, their deadlines and whether a designation has been extended or terminated change
        often and are sometimes affected by court cases. Always check the current notice on the{' '}
        <a href="https://www.uscis.gov/humanitarian/temporary-protected-status" target="_blank" rel="noopener noreferrer">USCIS TPS page</a>{' '}
        rather than an old list.
      </p>

      <h2>How TPS affects unlawful presence</h2>
      <p>
        By law, a person with TPS is treated as being in lawful temporary status for the period of TPS and does not
        accrue unlawful presence during that time. This applies even if your original I-94 expired earlier.
      </p>
      <p><strong>Example.</strong></p>
      <ul>
        <li>Your I-94 expires on June 1. You do nothing. You accrue unlawful presence from June 2.</li>
        <li>On September 15 (106 days later) you are granted TPS. The count stops at 106 days.</li>
        <li>You keep TPS for two years. No new days are added.</li>
        <li>
          TPS ends and you have no other status. Counting <strong>resumes from 106 days</strong>. You reach the 3-year
          bar range after 75 more days (181 total), and the 10-year bar range at 365 total.
        </li>
      </ul>
      <p>
        The days before TPS are not forgiven. They sit in the background and become relevant again when protection ends.
      </p>

      <h2>When TPS ends</h2>
      <p>
        When a designation ends, the government publishes a notice with an effective date and what people may do next.
        If you have no other status on that date, you may start to accrue unlawful presence again, and you may be
        subject to removal.
      </p>
      <p>Options people explore with an attorney include:</p>
      <ul>
        <li>A different immigration status for which you qualify, such as through an employer or a family member.</li>
        <li>Adjustment of status if you qualify, for example as an immediate relative of a US citizen.</li>
        <li>Asylum or other protection, if you fear return.</li>
        <li>Planning departure with an understanding of which bar, if any, would apply.</li>
      </ul>

      <h2>Travelling on TPS</h2>
      <p>
        Leaving the US without permission can end your TPS protection and affect your ability to return. If you need to
        travel, you generally need <strong>travel authorization (advance parole)</strong> approved before you leave. Even
        with advance parole, entry is not guaranteed. Speak to an attorney first.
      </p>

      <h2>Does TPS lead to a green card?</h2>
      <p>
        No. TPS is temporary and does not itself lead to permanent residence. Some TPS holders qualify through another
        route, such as a family relationship, but how TPS interacts with those routes depends on how and when you
        entered and on court decisions. This is a technical area where individual advice matters.
      </p>

      <Callout tone="warning" title="Get individual advice">
        TPS law changes quickly and the rules for each country differ. This is general information only. Speak to a
        qualified immigration attorney or accredited representative. See also{' '}
        <Link href="/unlawful-presence">unlawful presence</Link> and the <Link href="/">calculator</Link>.
      </Callout>
    </GuideLayout>
  )
}
