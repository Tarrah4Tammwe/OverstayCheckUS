import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { PageShell } from '@/components/page-shell'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About and methodology',
  description:
    'Who runs OverstayCheck, how the US overstay calculator works, which rules it is based on, and what it cannot tell you.',
  alternates: { canonical: `${site.domain}/about` },
}

export default function AboutPage() {
  return (
    <PageShell title="About OverstayCheck" lede="A free, independent tool that explains US overstay rules in plain English.">
      <h2>What this site is</h2>
      <p>
        OverstayCheck helps people understand where they stand when their authorized stay in the United States has
        ended or is about to. It combines a calculator with guides on the questions people most often ask: what an I-94
        is, how unlawful presence is counted, when the 3-year and 10-year bars apply, and what options exist.
      </p>
      <p>
        It is an independent project. It is <strong>not a law firm</strong>, it does not provide legal advice, and it is
        not affiliated with USCIS, CBP, DHS or any government agency.
      </p>

      <h2>How the calculator works</h2>
      <ol>
        <li>You enter the &ldquo;Admit Until Date&rdquo; from your I-94 record.</li>
        <li>The calculator counts the whole days between that date and today, in your local time zone.</li>
        <li>
          It compares the result with the statutory thresholds: 180 days or fewer, 181 to 364 days (more than 180 days,
          less than a year), and 365 days or more of unlawful presence.
        </li>
        <li>It shows which range applies, how far you are from the next one, and which guides are relevant.</li>
      </ol>
      <p>
        The calculation runs entirely in your browser. The date you enter is not sent to our servers and is not stored.
      </p>

      <h2>Where the rules come from</h2>
      <ul>
        <li>
          The 3-year and 10-year bars are set by{' '}
          <a href="https://www.law.cornell.edu/uscode/text/8/1182" target="_blank" rel="noopener noreferrer">
            Section 212(a)(9)(B) of the Immigration and Nationality Act (8 U.S.C. §1182)
          </a>
          .
        </li>
        <li>
          Your authorized stay is the date on your I-94 record, which you can look up on the{' '}
          <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer">CBP I-94 website</a>.
        </li>
        <li>
          Extension rules are explained by{' '}
          <a href="https://www.uscis.gov/i-539" target="_blank" rel="noopener noreferrer">USCIS (Form I-539)</a>.
        </li>
      </ul>

      <h2>What it cannot tell you</h2>
      <p>
        The calculator applies the standard thresholds, and it is not designed for people whose I-94 says “D/S”, such as many F-1 and J-1 holders. Real cases often involve exceptions it cannot see: a timely
        pending extension or change of status, TPS, asylum applications, age under 18, certain waivers, and more. Rules
        and USCIS policy also change over time.
      </p>
      <Callout tone="warning" title="Talk to a professional for decisions">
        If you are near a threshold, planning to leave, or considering an application, speak to a licensed US
        immigration attorney first. Low-cost options are listed on the{' '}
        <Link href="/contact">contact page</Link>.
      </Callout>

      <h2>Corrections</h2>
      <p>
        Found something out of date or wrong? We want to fix it. See the <Link href="/contact">contact page</Link>.
        Guides were last updated in {site.updated}.
      </p>
    </PageShell>
  )
}
