import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Form I-539: How to Extend Your Stay in the US',
  description:
    'Who can file Form I-539, why you must file before your I-94 expires, what a pending application does and does not protect, and what happens if it is denied.',
  alternates: { canonical: `${site.domain}/i539-extension` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="i539-extension"
      title="Form I-539: How to Extend Your Stay"
      description="Form I-539 asks USCIS for more time in the US. Filed on time, it stops unlawful presence from accruing while it is pending."
      sources={[
        { label: 'USCIS: Form I-539, including current fee and filing instructions', href: 'https://www.uscis.gov/i-539' },
        { label: '8 CFR §214.1: requirements for admission, extension and maintenance of status', href: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-214/section-214.1' },
        { label: 'USCIS processing times', href: 'https://egov.uscis.gov/processing-times/' },
      ]}
    >
      <p className="lede">
        Form I-539 is how many visitors and some dependents ask USCIS for more time in the US. It only protects you if
        you file it on time, and it does not give you more than it says.
      </p>

      <Callout tone="info" title="In short">
        File <strong>before</strong> your I-94 date. A timely filed, non-frivolous I-539 means you do not accrue
        unlawful presence while it is pending. It does not give you permission to work, and leaving the US generally
        abandons it.
      </Callout>

      <h2>Who uses Form I-539?</h2>
      <p>Form I-539 is the “Application to Extend/Change Nonimmigrant Status”. It is commonly used by:</p>
      <ul>
        <li>Visitors in B-1 or B-2 status who need longer than they were admitted for.</li>
        <li>Dependents (spouses and children) of workers, such as H-4 and L-2.</li>
        <li>Some other categories, depending on the visa type.</li>
      </ul>
      <p>Other people extend in different ways:</p>
      <ul>
        <li>
          <strong>Workers</strong> (such as H-1B, L-1, O-1) are normally extended by their employer filing a petition
          (Form I-129), not by filing I-539 themselves.
        </li>
        <li>
          <strong>Students and exchange visitors</strong> (F-1, J-1) extend through their school or program sponsor, who
          updates the Form I-20 or DS-2019.
        </li>
        <li>
          <strong>Visa Waiver Program (ESTA) visitors</strong> generally cannot extend or change status with USCIS.
        </li>
      </ul>

      <h2>The deadline: file before your I-94 expires</h2>
      <p>
        USCIS generally expects the extension request to be received before your authorized stay ends. A timely filed
        request means the time while it is pending is not counted as unlawful presence, as long as it is not frivolous
        and you have not worked without authorization.
      </p>
      <p>
        USCIS may excuse a late filing in limited cases, if the delay was caused by extraordinary circumstances beyond
        your control, was reasonable, and you did not otherwise violate your status. It is discretionary and not
        something to plan on. Do not assume you are protected unless you filed on time.
      </p>
      <p>
        Allow time for delivery. Your protection depends on when USCIS <em>receives</em> your application, not when you
        post it.
      </p>

      <h2>How to file</h2>
      <ol>
        <li>
          <strong>Use the current form and instructions</strong> on the{' '}
          <a href="https://www.uscis.gov/i-539" target="_blank" rel="noopener noreferrer">USCIS Form I-539 page</a>.
          Forms, fees and whether you can file online change, so check there rather than relying on an older guide.
        </li>
        <li>
          <strong>Gather evidence:</strong> your passport, your I-94 record, proof of why you need more time, and proof
          you can support yourself during the extension.
        </li>
        <li>
          <strong>Pay the fee</strong> shown on the USCIS page. Fee waivers are only available for limited categories.
        </li>
        <li>
          <strong>Submit and keep proof.</strong> Keep a copy of everything and the receipt notice (Form I-797C) USCIS
          sends, which is your evidence that you filed on time.
        </li>
      </ol>

      <h2>What a pending I-539 does and does not do</h2>
      <p><strong>It does:</strong></p>
      <ul>
        <li>Stop unlawful presence from accruing while the application is pending, if you filed on time.</li>
        <li>Let you remain in the US while USCIS decides.</li>
      </ul>
      <p><strong>It does not:</strong></p>
      <ul>
        <li>Give you permission to work. Visitors in B status cannot work.</li>
        <li>Make you “in status”. It is a period of stay authorized for the purpose of unlawful presence.</li>
        <li>Keep the application alive if you leave the US. Departing generally means the application is treated as abandoned.</li>
      </ul>

      <h2>If it is denied</h2>
      <p>
        If USCIS denies the request, you are no longer in a period of authorized stay. Unlawful presence starts to
        accrue from the day <em>after</em> the denial. It does not go back to the original I-94 date. You then need to
        leave, or have another basis to remain. Options such as a motion to reopen or reconsider (Form I-290B) exist
        where there was a legal or factual error, but filing one does not automatically restore protection.
      </p>
      <p>
        Because the days after a denial start to count, many people leave promptly. Speak to an attorney before
        deciding.
      </p>

      <h2>How long does it take?</h2>
      <p>
        USCIS processing times vary by form, location and year, and can be many months. Check the current figures on the{' '}
        <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener noreferrer">USCIS processing times page</a>.
        You can track your case online with the receipt number from your notice.
      </p>

      <h2>When to get an attorney</h2>
      <p>Consider professional help if:</p>
      <ul>
        <li>You have previously overstayed, been denied, or worked without permission.</li>
        <li>You are filing close to your deadline or after it passed.</li>
        <li>You want to change to another status, rather than extend.</li>
      </ul>

      <p>
        Not sure how many days you have? Check the <Link href="/">calculator</Link>, or read about{' '}
        <Link href="/unlawful-presence">unlawful presence</Link>.
      </p>

      <Callout tone="warning" title="Not legal advice">
        General information only. Eligibility depends on your visa class and history. Talk to a qualified immigration
        attorney before filing.
      </Callout>
    </GuideLayout>
  )
}
