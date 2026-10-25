import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What Is an I-94? Admit Until Date Explained',
  description:
    'Your I-94 record, not your visa, sets how long you may stay in the US. Where to find it, what D/S means, and how it relates to overstay.',
  alternates: { canonical: `${site.domain}/what-is-i94` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="what-is-i94"
      title="What Is an I-94? Your Admit Until Date Explained"
      description="Your I-94 record, not your visa, sets how long you may stay in the US."
      sources={[
        { label: 'CBP: Official I-94 website (look up your record)', href: 'https://i94.cbp.dhs.gov' },
        { label: 'USCIS: Form I-539, Application to Extend/Change Nonimmigrant Status', href: 'https://www.uscis.gov/i-539' },
        { label: '8 U.S.C. §1182(a)(9)(B): unlawful presence bars', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
      ]}
    >
      <p className="lede">
        The I-94 is the US government’s record of when you entered and how long you are allowed to stay. It is not
        your visa. Most overstay questions come down to one date on this record.
      </p>

      <Callout tone="info" title="In short">
        Your <strong>visa</strong> lets you travel to a US port of entry and ask to be admitted. Your{' '}
        <strong>I-94</strong> says how long you may stay once admitted. If your visa is valid until 2030 but your I-94
        says “Admit Until” June 30, 2026, you must leave or have a timely extension pending by that date.
      </Callout>

      <h2>Visa vs. I-94: what is the difference?</h2>
      <p>
        A visa is a foil in your passport issued by a US consulate. It is permission to <em>apply for admission</em>.
        The officer at the port of entry then decides whether to admit you and for how long. That decision is recorded
        on your I-94.
      </p>
      <p>
        This is why people with a long-validity tourist visa can still overstay. The visa can be good for years while
        each individual stay is limited to the period on the I-94.
      </p>

      <h2>Where to find your I-94</h2>
      <ol>
        <li>
          <strong>Online (most reliable).</strong> Go to the official CBP site at{' '}
          <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer">i94.cbp.dhs.gov</a>. Choose “Get
          Most Recent I-94” and enter your passport details. You can also view your recent travel history there.
        </li>
        <li>
          <strong>Your passport stamp.</strong> The admission stamp from the officer may show the date you were admitted
          and “until” date or “D/S”.
        </li>
        <li>
          <strong>A paper I-94.</strong> If you crossed a land border in the past or were given a paper card, it will
          show the same information.
        </li>
      </ol>
      <p>
        If the online record and your stamp disagree, the online record is what officers check. If you think the record
        is wrong, see “What if your I-94 is wrong?” below.
      </p>

      <h2 id="ds">What if my I-94 says “D/S”?</h2>
      <p>
        “D/S” means “duration of status”. It is common for students (F-1), exchange visitors (J-1) and some other
        categories. There is no calendar date. You may stay as long as you keep your status and follow its rules, for
        example by staying enrolled and within the program end date on your Form I-20 or DS-2019.
      </p>
      <p>
        Unlawful presence works differently for D/S holders. It generally does not begin to accrue just because your
        program ended or you violated the terms of your status. It begins when USCIS makes a formal finding of a status
        violation while deciding a benefit request, or an immigration judge issues a decision. If your I-94 says D/S,
        speak to an attorney or your school’s designated official before using any date-based calculator, including
        ours.
      </p>

      <h2>Which date counts for an overstay?</h2>
      <p>
        For most visitors and workers, the “Admit Until Date” on the I-94 is the last day of authorized stay. If you are
        still in the US the next day and have no extension or other protection, you are in a period of{' '}
        <Link href="/unlawful-presence">unlawful presence</Link>.
      </p>
      <ul>
        <li>Under or up to 180 days: no automatic re-entry bar when you leave, but your visa is voided and future applications are affected.</li>
        <li>More than 180 days and less than one year: a 3-year bar can apply when you depart.</li>
        <li>One year or more: a 10-year bar applies when you depart.</li>
      </ul>
      <p>
        You can see which range applies to you with the <Link href="/">overstay calculator</Link>.
      </p>

      <h2>Can I extend my I-94?</h2>
      <p>
        Many people can, but they must ask <em>before</em> the date passes. Visitors usually file Form I-539 with USCIS.
        Workers are usually extended through an employer petition, and students through their school. A timely filed,
        non-frivolous request can stop unlawful presence from accruing while it is pending. Read the{' '}
        <Link href="/i539-extension">I-539 guide</Link> for details and exceptions.
      </p>

      <h2>What if my I-94 is wrong?</h2>
      <p>
        Errors happen: a wrong name, class of admission or date. Start by checking the official online record. If it is
        still wrong, you can ask CBP to correct it, usually through a Deferred Inspection office, and you will need
        documents that prove what it should say. An immigration attorney can help if the error affects a pending
        application.
      </p>

      <h2>Special situations</h2>
      <p>
        Some people are not accruing unlawful presence even after their I-94 date passes: for example people with{' '}
        <Link href="/tps-status-overstay">Temporary Protected Status</Link>, children under 18, and some applicants with
        pending asylum, extension, or change-of-status requests. These exceptions are narrow and fact-specific.
      </p>

      <Callout tone="warning" title="Not legal advice">
        This guide is general information. If you are near a deadline or unsure what applies to you, speak to a
        licensed US immigration attorney.
      </Callout>
    </GuideLayout>
  )
}
