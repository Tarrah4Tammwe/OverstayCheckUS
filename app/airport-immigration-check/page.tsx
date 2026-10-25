import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'US Airport Immigration After an Overstay',
  description:
    'What CBP can see, what you may be asked, why honesty matters, and what to do before flying to the US after a past overstay.',
  alternates: { canonical: `${site.domain}/airport-immigration-check` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="airport-immigration-check"
      title="US Airport Immigration After an Overstay"
      description="What CBP can see, what they may ask, and why accurate answers matter."
      sources={[
        { label: 'CBP: Official I-94 website (arrival and departure records)', href: 'https://i94.cbp.dhs.gov' },
        { label: 'CBP: ESTA (Visa Waiver Program) eligibility', href: 'https://esta.cbp.dhs.gov' },
        { label: '8 U.S.C. §1182(a)(6)(C): misrepresentation', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
        { label: '8 U.S.C. §1225: inspection and expedited removal', href: 'https://www.law.cornell.edu/uscode/text/8/1225' },
      ]}
    >
      <p className="lede">
        At US immigration, a CBP officer decides whether to admit you and for how long. If you have overstayed before,
        the officer can usually see it. The best preparation is to know your own history and to answer accurately.
      </p>

      <Callout tone="info" title="In short">
        CBP holds records of your entries, exits and I-94s. A past overstay does not by itself mean you will be refused,
        but a bar that is still running, or a false answer, can. <strong>Never misstate your history.</strong>
      </Callout>

      <h2>What CBP can see</h2>
      <p>
        Officers have access to the data from your visa application, your previous entries and departures, and the
        immigration systems that record overstays, removals and refusals. Airlines also send passenger data before you
        fly. You can look up much of your own entry and exit history on the official{' '}
        <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer">I-94 website</a>.
      </p>

      <h2>What you may be asked</h2>
      <ul>
        <li>The purpose and length of your trip, where you will stay, and how you will fund it.</li>
        <li>Your plans to leave, such as a return ticket.</li>
        <li>Your past US travel, including whether you have ever stayed longer than allowed.</li>
        <li>Your job and ties to your home country.</li>
      </ul>
      <p>
        If you have overstayed before, expect more questions. Answer briefly, accurately and consistently with your
        documents.
      </p>

      <h2>Why honesty matters more than the overstay itself</h2>
      <p>
        Willfully misrepresenting a material fact to obtain a visa or admission is a separate ground of inadmissibility
        that can be <strong>permanent</strong> (waivable only in limited cases). A past overstay is a problem that often
        has a time limit or a fix. A lie can make it much worse. If you are asked whether you have overstayed and you
        have, say so.
      </p>

      <h2>If you overstayed and are now travelling</h2>
      <ul>
        <li>
          <strong>You cannot rely on ESTA.</strong> People who previously overstayed are generally ineligible for the
          Visa Waiver Program and need a visa.
        </li>
        <li>
          <strong>Your old visa is likely void.</strong> An overstay voids the visa you were using, so a new visa is
          normally required.
        </li>
        <li>
          <strong>If a bar is running</strong>, you can be found inadmissible. See{' '}
          <Link href="/travel-with-reentry-ban">travel with a re-entry bar</Link> and{' '}
          <Link href="/denied-entry-rights">denied entry</Link>.
        </li>
      </ul>

      <h2>If you are leaving the US while overstaying</h2>
      <p>
        Leaving does not normally involve a confrontation. Your exit is recorded by the airline passenger data. The time
        you were in the US after your I-94 date is counted as unlawful presence, and the 3-year or 10-year bar is
        triggered by the departure if enough days accrued. See the <Link href="/unlawful-presence">unlawful presence guide</Link>{' '}
        and use the <Link href="/">calculator</Link> to see where you stand.
      </p>

      <h2>Before you fly</h2>
      <ol>
        <li>Check your own I-94 and travel history online and note any dates that look wrong.</li>
        <li>Write down your overstay dates so your answers are consistent.</li>
        <li>If you are unsure whether a bar applies, speak to an attorney <em>before</em> buying a ticket.</li>
        <li>Carry the documents that support your trip: itinerary, accommodation, return ticket, proof of ties and funds.</li>
      </ol>

      <Callout tone="warning" title="Not legal advice">
        What happens at inspection depends on your facts and on officer discretion. This is general information only.
      </Callout>
    </GuideLayout>
  )
}
