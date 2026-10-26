import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Unlawful Presence vs. Overstay: The Difference',
  description:
    'Overstay and unlawful presence are not the same. Learn when unlawful presence starts and stops and how it triggers the 3-year and 10-year bars.',
  alternates: { canonical: `${site.domain}/unlawful-presence` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="unlawful-presence"
      title="Unlawful Presence vs. Overstay"
      description="Overstay and unlawful presence are related but not the same. The difference decides whether the 3-year or 10-year bar can apply."
      sources={[
        { label: '8 U.S.C. §1182(a)(9)(B): inadmissibility for unlawful presence', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
        { label: 'USCIS Policy Manual (Volume 8, Part O: unlawful presence)', href: 'https://www.uscis.gov/policy-manual' },
        { label: 'USCIS Policy Manual, Volume 9, Part B: extreme hardship', href: 'https://www.uscis.gov/policy-manual/volume-9-part-b' },
      ]}
    >
      <p className="lede">
        People use “overstay” and “unlawful presence” as if they were the same. They are related, but only one of them
        triggers the 3-year and 10-year bars.
      </p>

      <Callout tone="info" title="In short">
        An <strong>overstay</strong> is staying past the end of your authorized period. <strong>Unlawful presence</strong>{' '}
        is a legal measure of time spent in the US without authorization, and it is what the law counts toward the
        bars. Some overstays do not create unlawful presence, and some unlawful presence does not come from an
        overstay.
      </Callout>

      <h2>What is an overstay?</h2>
      <p>
        You overstay when you remain in the US after the date on your I-94 record. It is a description of what
        happened: you were admitted until a date, and you were still here after it.
      </p>

      <h2>What is unlawful presence?</h2>
      <p>
        Unlawful presence is time in the US without being admitted or paroled, or after the period of stay authorized
        by the government has expired. Under section 212(a)(9)(B) of the Immigration and Nationality Act, it is the
        time that counts toward the re-entry bars.
      </p>
      <p>Unlawful presence generally starts:</p>
      <ul>
        <li>The day after your I-94 “Admit Until Date”, if you are still in the US without protection.</li>
        <li>When you entered the US without being inspected and admitted.</li>
        <li>
          For people admitted for “duration of status” (D/S), such as many F-1 and J-1 holders: only after USCIS finds a
          status violation while deciding a request, or an immigration judge orders removal.
        </li>
      </ul>
      <p>
        Working without authorization or breaking the conditions of a visa is a status violation. It can have serious
        consequences, but it does not by itself start the unlawful presence clock.
      </p>

      <h2>When unlawful presence does not accrue</h2>
      <p>
        The law and USCIS policy list situations where time does not count, even if the I-94 date has passed. The main
        ones include:
      </p>
      <ul>
        <li>Being under 18 years old.</li>
        <li>
          A <strong>timely filed, non-frivolous</strong> request to extend or change status, while it is pending and as
          long as you have not worked without authorization.
        </li>
        <li>Having Temporary Protected Status (TPS) while it is in effect.</li>
        <li>A pending, bona fide asylum application, if you have not worked without authorization.</li>
        <li>Some victims of abuse (such as under VAWA) or of trafficking, who meet specific conditions.</li>
        <li>Certain family unity beneficiaries.</li>
      </ul>
      <p>
        Each exception has conditions. Do not rely on a list: speak to an attorney about which, if any, applies to you.
      </p>

      <h2>How unlawful presence leads to a bar</h2>
      <p>The bars are only triggered when you <em>depart</em> the US and later seek admission:</p>
      <ul>
        <li><strong>More than 180 days and less than 1 year</strong> of unlawful presence: a 3-year bar, if you depart voluntarily before removal proceedings begin.</li>
        <li><strong>1 year or more</strong> of unlawful presence: a 10-year bar.</li>
      </ul>
      <p>
        The time is counted over the whole period, not just one stay. If you remain in the US, the bar has not been
        triggered yet, but the days keep adding up. Use the <Link href="/">calculator</Link> to see where your count
        stands.
      </p>

      <Callout tone="success" title="Pending extension example">
        Your I-94 ends June 30. You file a complete Form I-539 on June 20. On July 15 your I-94 date has passed, but
        you do not accrue unlawful presence while the application is pending. If it is denied, unlawful presence starts
        the day <em>after</em> the denial. It does not go back to June 30.
      </Callout>

      <h2>What an overstay does even without a bar</h2>
      <ul>
        <li>Your visa is automatically voided, so you normally must apply for a new one at a US consulate in your country of nationality.</li>
        <li>Visa Waiver Program (ESTA) travel is generally not available to people who overstayed in the past.</li>
        <li>Visa and immigration forms ask about overstays. Answering untruthfully can lead to a separate, permanent inadmissibility ground.</li>
      </ul>

      <h2>Can unlawful presence be fixed?</h2>
      <p>
        You cannot erase the record, but there are lawful ways to deal with the consequences:
      </p>
      <ul>
        <li>
          <strong>Adjustment of status inside the US.</strong> An immediate relative of a US citizen (spouse, parent of a
          citizen aged 21 or older, or unmarried child under 21) who was inspected and admitted can generally apply for a
          green card without leaving, even after an overstay. Because they do not depart, the bars are not triggered.
        </li>
        <li>
          <strong>A waiver.</strong> If you must leave to get an immigrant visa, a waiver (Form I-601, or I-601A filed
          before departing) is possible if you show extreme hardship to a US citizen or permanent resident{' '}
          <em>spouse or parent</em>. See the <Link href="/appeal-reentry-ban">waiver guide</Link>.
        </li>
        <li>Waiting out the bar: it ends after 3 or 10 years from your departure.</li>
      </ul>

      <Callout tone="warning" title="Not legal advice">
        Unlawful presence is technical, and the answer often depends on dates and documents you would need to show an
        attorney. Speak to a licensed immigration attorney before you leave the US or file anything.
      </Callout>
    </GuideLayout>
  )
}
