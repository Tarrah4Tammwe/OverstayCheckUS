import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Denied Entry Rights',
  description: 'Your rights when denied entry to the US at the airport. What to do if CBP denies you entry.',
  alternates: {
    canonical: `${site.domain}/denied-entry-rights`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="denied-entry-rights" title="Denied Entry at the Border" description="Your rights when denied entry to the US at the airport. What to do if CBP denies you entry.">
  <p className="lede">
    If CBP denies you entry to the US, you have limited rights — but there are steps you can take. Here's what to do.
  </p>

  <h2>Why might you be denied?</h2>
  <p>
    CBP can deny entry for:
  </p>

  <ul>
    <li>Re-entry ban (3-year or 10-year overstay penalty)</li>
    <li>Criminal conviction</li>
    <li>Fraudulent documents or lying to CBP</li>
    <li>Gang affiliation or terrorism concerns</li>
    <li>Medical grounds (communicable disease)</li>
    <li>Lack of proof of funds or return ticket</li>
    <li>Prior visa violations</li>
  </ul>

  <h2>What happens when you're denied?</h2>
  <p>
    CBP will:
  </p>

  <ol>
    <li>Take you to a secondary inspection room</li>
    <li>Tell you the reason for denial</li>
    <li>Give you a Notice of Ineligibility or similar form</li>
    <li>Allow you to call a lawyer or family member</li>
    <li>Send you back on the next flight to your point of departure (at your cost)</li>
  </ol>

  <Callout tone="warning" title="Your rights at the border">You have the right to remain silent. You can ask for a lawyer. Don't lie to CBP — lying is a separate crime. Be honest and clear.</Callout>

  <h2>What are your options?</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If the denial is based on a re-entry ban</h3>
  <p>
    A re-entry ban is fixed. You cannot appeal it at the border. Your only options are:
  </p>

  <ul>
    <li>File an I-601 waiver (if you have family sponsorship) once abroad</li>
    <li>Wait until the ban expires (3 or 10 years)</li>
    <li>Don't try to enter again</li>
  </ul>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If the denial is based on insufficient documents</h3>
  <p>
    If CBP says you don't have enough proof of funds or a return ticket, you could theoretically:
  </p>

  <ul>
    <li>Call someone in the US to wire you money or buy you a return ticket</li>
    <li>Ask CBP for a second chance</li>
    <li>Have a friend/family member at the airport come to vouch for you</li>
  </ul>

  <p>
    This rarely works. Once CBP denies you, they're usually firm.
  </p>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If the denial is based on fraud or lies</h3>
  <p>
    If you lied on your visa application or to CBP, the denial is likely permanent. You would need:
  </p>

  <ul>
    <li>Clear evidence the fraud allegation is false</li>
    <li>A lawyer to file for expedited review</li>
    <li>Very strong mitigating circumstances</li>
  </ul>

  <p>
    This is difficult and requires legal representation.
  </p>

  <h2>Can you appeal a denial?</h2>
  <p>
    No formal appeal process exists for border denials. Once CBP says no, you're sent back.
  </p>

  <p>
    However, you can:
  </p>

  <ul>
    <li>Request a supervisor review (rare and usually unsuccessful)</li>
    <li>Consult an immigration attorney about filing an I-601 waiver if you have family sponsorship</li>
    <li>File a FOIA request to see what CBP recorded about your case</li>
    <li>Try again with a different visa application months or years later (if your circumstances change)</li>
  </ul>

  <h2>What do you do after you're deported?</h2>
  <p>
    CBP will:
  </p>

  <ul>
    <li>Put you on a plane back to your home country or last departure point</li>
    <li>Give you a deportation/removal notice</li>
    <li>Possibly ban you from future entry</li>
  </ul>

  <p>
    Once you're back in your home country or abroad:
  </p>

  <ul>
    <li>Consult an immigration attorney immediately</li>
    <li>Gather documents supporting your case (if applicable)</li>
    <li>File an I-601 waiver if you have family sponsorship</li>
    <li>Explore other visa options (work visa, student visa, etc.)</li>
  </ul>

  <h2>Will this affect future travel?</h2>
  <p>
    It depends on the reason for denial.
  </p>

  <p>
    <strong>Re-entry ban:</strong> You cannot return until the ban expires or is waived. Every attempt to enter will be denied.
  </p>

  <p>
    <strong>Fraud or criminal conviction:</strong> You may be permanently barred. Even after time, a second attempt will likely be denied.
  </p>

  <p>
    <strong>Insufficient documents:</strong> You can try again later with better proof (more money, a return ticket, a job offer).
  </p>

  <h2>Can you sue CBP for wrongful denial?</h2>
  <p>
    Extremely unlikely. CBP has broad discretion at the border. US citizens can challenge border decisions in court, but non-citizens have very limited recourse.
  </p>

  <p>
    You would need:
  </p>

  <ul>
    <li>Clear proof of discrimination (racial, religious, political)</li>
    <li>Solid evidence CBP violated federal law</li>
    <li>An experienced immigration attorney</li>
  </ul>

  <p>
    Most lawsuits fail.
  </p>

  <h2>Bottom line</h2>
  <p>
    If denied at the border, your immediate options are limited. Accept the denial, get on the plane, and then consult a lawyer. From abroad, you can pursue a waiver, apply for a different visa, or prepare for a future attempt. But at the moment of denial, CBP's decision is final.
  </p>

  <Callout tone="info" title="Before traveling to the US">Check your status. If you think you might be denied, consult an immigration attorney BEFORE boarding your flight. Don't take the risk.</Callout>
    </GuideLayout>
  )
}
