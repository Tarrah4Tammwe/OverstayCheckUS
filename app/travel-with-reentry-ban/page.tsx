import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Travel and Life Outside the US During a Bar',
  description:
    'What an unlawful presence bar does and does not restrict: where you can travel, whether a future visa is possible, ESTA, and what to expect when the bar ends.',
  alternates: { canonical: `${site.domain}/travel-with-reentry-ban` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="travel-with-reentry-ban"
      title="Travel and Life Outside the US With a 3-Year or 10-Year Bar"
      description="A bar affects your ability to be admitted to the US. It does not stop you living, working or travelling elsewhere."
      sources={[
        { label: '8 U.S.C. §1182(a)(9)(B): unlawful presence bars and waivers', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
        { label: 'CBP: ESTA (Visa Waiver Program) eligibility', href: 'https://esta.cbp.dhs.gov' },
        { label: 'USCIS: Form I-601A provisional waiver', href: 'https://www.uscis.gov/i-601a' },
      ]}
    >
      <p className="lede">
        An unlawful presence bar is about admission to the United States. It does not follow you around the rest of the
        world, but it does shape what you should and should not try to do with the US.
      </p>

      <Callout tone="info" title="In short">
        While the bar runs, you are generally <strong>inadmissible</strong>: a US visa or admission can be refused,
        unless a waiver is granted. You can live and work elsewhere. The bar ends automatically after 3 or 10 years from
        your departure, but your overstay stays part of your record.
      </Callout>

      <h2>What a bar restricts</h2>
      <p>
        The bar means that if you apply for a visa, or for admission at a US port of entry, you can be found
        inadmissible. In practice:
      </p>
      <ul>
        <li>
          A <strong>visa application</strong> can be refused. A consular officer may refuse until the bar period ends,
          unless a waiver applies.
        </li>
        <li>
          <strong>Visa-free travel (ESTA) is not a workaround.</strong> People who have previously overstayed are
          generally not eligible for the Visa Waiver Program, and you must apply for a visa instead.
        </li>
        <li>
          <strong>Trying to enter anyway</strong> risks being refused entry at the airport or border. If CBP finds you
          inadmissible, you can be removed under expedited removal, which carries its own 5-year bar. See{' '}
          <Link href="/denied-entry-rights">denied entry</Link>.
        </li>
        <li>Transit through the US is risky too, because many connections involve being inspected.</li>
      </ul>

      <h2>What a bar does not restrict</h2>
      <ul>
        <li>Returning to your home country, or travelling to any other country that will admit you.</li>
        <li>Living, working, studying or starting a business abroad.</li>
        <li>Obtaining residence or citizenship in another country.</li>
      </ul>
      <p>
        Other countries have their own rules. Many ask on visa forms whether you were ever refused entry, deported or
        overstayed anywhere, and you must answer honestly. Check the requirements for your destination.
      </p>

      <h2>Family in the US</h2>
      <p>
        You cannot normally visit during the bar, but family can visit you abroad. If a family member is a US citizen
        or permanent resident spouse or parent, a waiver may allow you to immigrate sooner. See the{' '}
        <Link href="/appeal-reentry-ban">waiver guide</Link>.
      </p>

      <h2>When the bar ends</h2>
      <p>
        A 3-year or 10-year bar runs from the date you left the US. When it has passed, that particular ground of
        inadmissibility no longer applies, and you can apply for a visa again. Do not expect an automatic approval:
      </p>
      <ul>
        <li>Your overstay stays on your immigration history, and visa forms ask about it.</li>
        <li>Consular officers must be satisfied you will follow the rules this time.</li>
        <li>
          Your visa was voided by the overstay, so you normally apply at a US consulate in your country of nationality.
        </li>
      </ul>

      <h2>Practical steps</h2>
      <ol>
        <li>Keep proof of the date you departed (boarding passes, passport stamps, your I-94 departure record).</li>
        <li>Write down your own overstay dates so you can answer visa forms accurately.</li>
        <li>Talk to an attorney about waivers or other categories well before the bar ends.</li>
      </ol>

      <Callout tone="warning" title="Not legal advice">
        General information only. Rules for waivers, visas and other countries are specific to your situation. Speak to
        a qualified immigration attorney.
      </Callout>
    </GuideLayout>
  )
}
