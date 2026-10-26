import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Denied Entry at a US Airport or Border',
  description:
    'CBP can offer withdrawal or issue expedited removal. Learn the difference, your rights at inspection, and what to do next.',
  alternates: { canonical: `${site.domain}/denied-entry-rights` },
}

export default function Page() {
  return (
    <GuideLayout
      slug="denied-entry-rights"
      title="Denied Entry at a US Airport or Border"
      description="What happens when CBP refuses admission, and the important difference between withdrawal and expedited removal."
      sources={[
        { label: '8 U.S.C. §1225: inspection, expedited removal and credible fear', href: 'https://www.law.cornell.edu/uscode/text/8/1225' },
        { label: '8 U.S.C. §1182(a)(9)(A): bars after removal', href: 'https://www.law.cornell.edu/uscode/text/8/1182' },
        { label: 'CBP: Freedom of Information Act (request your records)', href: 'https://www.cbp.gov/site-policy-notices/foia' },
      ]}
    >
      <p className="lede">
        If a CBP officer decides you are inadmissible, what happens next depends on the type of refusal. The
        difference between two outcomes can affect your ability to return for years.
      </p>

      <Callout tone="info" title="In short">
        You may be allowed to <strong>withdraw your application for admission</strong> and fly home, which has no
        formal removal order. Or you may be ordered removed under <strong>expedited removal</strong>, which normally
        carries a 5-year bar. Read anything you are asked to sign, and ask which one it is.
      </Callout>

      <h2>Why people are refused</h2>
      <ul>
        <li>A running bar from a past overstay, or a visa that was voided or cancelled.</li>
        <li>No valid visa or entry document, or one that does not match the purpose of the trip.</li>
        <li>Officer doubts that the trip is genuinely temporary, or that you can support yourself.</li>
        <li>Criminal history, health-related or security grounds, or past immigration fraud.</li>
        <li>Misstatements during the inspection.</li>
      </ul>

      <h2>What usually happens</h2>
      <ol>
        <li>You are sent to secondary inspection for further questions and checks.</li>
        <li>The officer decides whether to admit you, refer you for more review, or treat you as inadmissible.</li>
        <li>If inadmissible, you may be offered withdrawal, or you may be placed in expedited removal.</li>
        <li>You are usually returned on a flight to where you came from, at the airline’s or your expense.</li>
      </ol>

      <h2>Withdrawal vs. expedited removal</h2>
      <p>
        <strong>Withdrawal of application for admission</strong> is discretionary. If the officer allows it, you
        withdraw and depart without a formal order of removal. It is not a legal right and an officer is not required to
        offer it. People often have a strong interest in asking for it where it makes sense.
      </p>
      <p>
        <strong>Expedited removal</strong> is a removal order issued at the port of entry without a hearing before a
        judge. It generally makes you inadmissible for <strong>5 years</strong>, and more serious findings, such as
        fraud, can bring longer or permanent bars.
      </p>
      <p>
        If you fear persecution or torture if returned, tell the officer. You are entitled to a screening interview to
        assess your fear before being removed.
      </p>

      <h2>Your rights at inspection</h2>
      <p>
        At the border, noncitizens have fewer rights than people already inside the US. In practice:
      </p>
      <ul>
        <li>You can ask to speak to a lawyer or contact your consulate. CBP is not required to delay the inspection to let you, but asking is reasonable and often noted.</li>
        <li>You may decline to answer questions, but because you are the one asking to be admitted, refusing can lead to being refused entry.</li>
        <li>
          <strong>Do not lie or give false documents.</strong> Misrepresentation can create a permanent inadmissibility
          ground.
        </li>
        <li>Do not sign forms you do not understand. Ask what each form is and whether it is a removal order.</li>
      </ul>

      <h2>After you are back abroad</h2>
      <ol>
        <li>Keep every document: any notice, the refusal reason, boarding passes and your passport stamps.</li>
        <li>Write down what you were asked and what you answered while it is fresh.</li>
        <li>Speak to an immigration attorney before applying for another visa or trying to travel again.</li>
        <li>Consider requesting your CBP record under FOIA to see what was recorded.</li>
        <li>Answer future visa forms accurately. They usually ask whether you have been refused admission or removed.</li>
      </ol>
      <p>
        If you were refused because a bar applies, see <Link href="/appeal-reentry-ban">waivers</Link> and{' '}
        <Link href="/travel-with-reentry-ban">life outside the US during a bar</Link>.
      </p>

      <h2>Can you challenge a refusal?</h2>
      <p>
        There is generally no appeal from a refusal of admission at the port of entry, and courts have limited power to
        review expedited removal. Practical routes are to correct any factual error with evidence through an attorney,
        apply later for a visa with a stronger case, or seek a waiver if one is available. These are all case-specific.
      </p>

      <Callout tone="warning" title="Not legal advice">
        Border decisions turn on facts and officer discretion. This is general information only. If you are refused
        entry or expect to be, speak to a qualified immigration attorney.
      </Callout>
    </GuideLayout>
  )
}
