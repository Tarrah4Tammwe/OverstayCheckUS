import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'How to Check Your US Immigration Records',
  description:
    'Where your I-94 and travel history live, how to view them online, how to request your file with a FOIA request, and what to do if a record is wrong.',
  alternates: { canonical: `${site.domain}/uscis-overstay-records` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="uscis-overstay-records"
      title="How to Check Your US Immigration Records"
      description="Your I-94 history is online. Your full file can be requested by FOIA. Here is what each shows."
      sources={[
        { label: 'CBP: Official I-94 website', href: 'https://i94.cbp.dhs.gov' },
        { label: 'USCIS: Request records (FOIA and Privacy Act)', href: 'https://www.uscis.gov/records/request-records-through-the-freedom-of-information-act-or-privacy-act' },
        { label: 'CBP: Freedom of Information Act', href: 'https://www.cbp.gov/site-policy-notices/foia' },
        { label: 'USCIS: Create or sign in to a USCIS online account', href: 'https://myaccount.uscis.dhs.gov' },
      ]}
    >
      <p className="lede">
        Several US agencies keep records about your travel and applications. Checking them yourself before you apply for
        anything tells you what officers will see.
      </p>

      <Callout tone="info" title="In short">
        Use the <strong>CBP I-94 website</strong> to see your I-94 and recent travel history. Use{' '}
        <strong>FOIA requests</strong> to get your full file. An overstay is not “deleted” from your history, but a bar
        ends on its own timeline.
      </Callout>

      <h2>Who holds which record</h2>
      <ul>
        <li>
          <strong>CBP</strong> records your arrivals and departures and issues your I-94. This is where admission dates
          and “Admit Until” dates come from.
        </li>
        <li>
          <strong>USCIS</strong> holds records of applications you filed (for example extensions, petitions and
          applications for status) and decisions on them.
        </li>
        <li>
          <strong>The Department of State</strong> holds your visa applications and any refusals.
        </li>
        <li>
          <strong>ICE and the immigration courts</strong> hold records related to enforcement and removal proceedings.
        </li>
      </ul>

      <h2>Check your I-94 and travel history</h2>
      <ol>
        <li>
          Go to the official{' '}
          <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer">CBP I-94 website</a>.
        </li>
        <li>Use “Get Most Recent I-94” to see your latest admission and “Admit Until” date.</li>
        <li>Use the travel history option to see past entries and exits recorded by CBP.</li>
      </ol>
      <p>
        If you left after your “Admit Until” date, the difference between that date and your departure date is the
        period of overstay recorded. If your record is missing an exit, an exit may not have been captured and you may
        need proof of departure, such as a boarding pass or passport stamp.
      </p>

      <h2>Your USCIS account</h2>
      <p>
        If you have filed applications with USCIS, you can see their status and notices in your USCIS online account.
        That account shows your filings and case history. It is not a general “overstay report” and does not list your
        CBP travel history.
      </p>

      <h2>Request your full file with FOIA</h2>
      <p>
        You can ask each agency for the records it holds about you through the Freedom of Information Act (FOIA) or the
        Privacy Act. USCIS handles requests for your immigration file, and CBP handles travel and inspection records.
        Requests can take months, and each agency has its own instructions and identity-verification rules, so use the
        official pages linked below.
      </p>

      <h2>If a record is wrong</h2>
      <ol>
        <li>Check the online record again and note exactly what is wrong.</li>
        <li>
          For a CBP admission or I-94 error, you can ask CBP to correct it, normally through a Deferred Inspection
          office, with documents that prove the correct information.
        </li>
        <li>
          If the error matters to a pending application, tell your attorney before filing. An error can sometimes be
          explained with evidence in the application itself.
        </li>
      </ol>

      <h2>How long does an overstay stay on record?</h2>
      <p>
        There is no automatic deletion date for the record that you overstayed. But the legal <em>consequences</em> that
        are time-limited do end: a 3-year or 10-year bar runs out. Questions on visa forms, however, often ask whether
        you have <em>ever</em> overstayed, and you need to answer truthfully. For the specific rules, see the{' '}
        <Link href="/unlawful-presence">unlawful presence guide</Link>.
      </p>

      <h2>Privacy</h2>
      <p>
        Your records are protected by privacy law. Government agencies can see them, you can request them, and an
        attorney or representative can request them for you with your written consent. Family members cannot get them
        without your permission.
      </p>

      <Callout tone="warning" title="Not legal advice">
        Check your own records before any application or trip, and keep copies of your documents. If something looks
        wrong or worrying, speak to an immigration attorney.
      </Callout>
    </GuideLayout>
  )
}
