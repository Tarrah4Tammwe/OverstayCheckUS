import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Waiving a 3-Year or 10-Year Re-Entry Bar',
  description:
    'No appeal exists for an unlawful presence bar, but a waiver may. Who qualifies, the hardship standard, I-601 vs I-601A, and adjusting without leaving.',
  alternates: { canonical: `${site.domain}/appeal-reentry-ban` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="appeal-reentry-ban"
      title="Waiving a 3-Year or 10-Year Re-Entry Ban"
      description="You cannot appeal an unlawful presence bar, but some people can get a waiver or avoid triggering it."
      sources={[
        { label: '8 U.S.C. §1182(a)(9)(B)(v): waiver of the unlawful presence bars', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
        { label: 'USCIS: Form I-601, Application for Waiver of Grounds of Inadmissibility', href: 'https://www.uscis.gov/i-601' },
        { label: 'USCIS: Form I-601A, Provisional Unlawful Presence Waiver', href: 'https://www.uscis.gov/i-601a' },
        { label: 'USCIS Policy Manual, Volume 9, Part B: extreme hardship', href: 'https://www.uscis.gov/policy-manual/volume-9-part-b' },
        { label: '8 U.S.C. §1255: adjustment of status', href: 'https://www.law.cornell.edu/uscode/text/8/1255' },
      ]}
    >
      <p className="lede">
        The 3-year and 10-year bars are automatic, so there is nothing to “appeal”. But the law provides a waiver for
        some people, and some can avoid triggering the bar altogether.
      </p>

      <Callout tone="info" title="In short">
        A waiver requires an <strong>immigrant visa</strong> application and proof that refusing admission would cause{' '}
        <strong>extreme hardship to a US citizen or permanent resident spouse or parent</strong>. Hardship to a child or
        to yourself does not count for this waiver. People who qualify to adjust status inside the US may not need one.
      </Callout>

      <h2>Option 1: avoid triggering the bar</h2>
      <p>
        The bars only apply when you <em>leave</em> and seek admission again. If you are an immediate relative of a US
        citizen (spouse, unmarried child under 21, or parent of a citizen aged 21 or over) and you were inspected and
        admitted or paroled, you can generally apply for a green card without leaving, even if you overstayed. Because
        you never depart, the bar is not triggered.
      </p>
      <p>
        This is the single most important option to check before anyone leaves the US. Whether it applies depends on how
        you entered, your history and your relative’s status, so speak to an attorney first.
      </p>

      <h2>Option 2: the unlawful presence waiver</h2>
      <p>
        If you need to leave to complete an immigrant visa interview at a US consulate, the departure triggers the bar.
        Congress allows a waiver, but with conditions:
      </p>
      <ul>
        <li>You must be applying for an immigrant visa or green card (for example through a family petition).</li>
        <li>
          You must be the spouse, or son or daughter, of a US citizen or lawful permanent resident, <em>and</em> show
          that refusing you would cause <strong>extreme hardship to your US citizen or permanent resident spouse or
          parent</strong>.
        </li>
        <li>It is discretionary. Meeting the conditions does not guarantee approval.</li>
      </ul>
      <p>
        Hardship to your child does not by itself qualify, and “the family will be separated” is not enough on its own.
        USCIS looks at the whole picture: health, finances, family ties, country conditions and more, supported by
        evidence.
      </p>

      <h2>I-601 and I-601A: the difference</h2>
      <ul>
        <li>
          <strong>Form I-601A (provisional waiver)</strong> can be filed <em>in the US</em> before you depart for your
          visa interview, for people who qualify. It lets you find out about the waiver before you leave. It cannot
          cover every ground of inadmissibility.
        </li>
        <li>
          <strong>Form I-601</strong> is filed after you have been found inadmissible at the consulate abroad. You wait
          outside the US for the decision.
        </li>
      </ul>
      <p>
        Check the current forms, fees and eligibility on the USCIS pages linked below, as these are updated.
      </p>

      <h2>Option 3: temporary visits with a nonimmigrant waiver</h2>
      <p>
        If you want to visit the US temporarily while a bar applies, a consulate can recommend a “nonimmigrant waiver”
        under section 212(d)(3). It is discretionary and not available for every situation, but it shows that a bar does
        not always mean an absolute “no”.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Leaving first and asking questions later.</strong> Departure triggers the bar. Get advice before you travel.</li>
        <li><strong>Assuming a child can be the qualifying relative.</strong> For this waiver, only a spouse or parent counts.</li>
        <li><strong>Paying a “notario”.</strong> Only licensed attorneys and accredited representatives can give immigration legal advice.</li>
        <li><strong>Misrepresenting facts.</strong> Lying to an official can create a separate, more serious ground of inadmissibility.</li>
      </ul>

      <p>
        See also: <Link href="/travel-with-reentry-ban">living and travelling while a ban applies</Link> and the{' '}
        <Link href="/">overstay calculator</Link>.
      </p>

      <Callout tone="warning" title="Get an attorney for waivers">
        Waivers turn on evidence and legal detail. This is general information only. Speak to a qualified immigration
        attorney in your state.
      </Callout>
    </GuideLayout>
  )
}
