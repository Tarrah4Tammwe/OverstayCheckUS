import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Airport Immigration Check',
  description: 'What happens at US airports if you have an overstay record. Learn how CBP checks your status and what to expect.',
  alternates: {
    canonical: `${site.domain}/airport-immigration-check`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="airport-immigration-check" title="Airport Immigration Check" description="What happens at US airports if you have an overstay record. Learn how CBP checks your status and what to expect.">
  <p className="lede">
    When you land at a US airport, CBP (Customs and Border Protection) agents will ask questions. Here's what to expect and how your overstay status affects you.
  </p>

  <h2>Who checks your status?</h2>
  <p>
    CBP agents at immigration control. They have access to:
  </p>

  <ul>
    <li>Your passport</li>
    <li>Your USCIS records (including any past overstay)</li>
    <li>Your arrival/departure history</li>
    <li>Your visa status</li>
    <li>Any deportation orders or re-entry bans</li>
  </ul>

  <p>
    Everything is linked. If you overstayed in 2018, they'll see it. If you're under a re-entry ban, they'll see it immediately.
  </p>

  <h2>What questions will they ask?</h2>
  <p>
    Standard questions:
  </p>

  <ul>
    <li>Where are you coming from?</li>
    <li>What's the purpose of your visit?</li>
    <li>How long are you staying?</li>
    <li>Do you have a return ticket?</li>
    <li>Where are you staying?</li>
    <li>Do you have a job lined up?</li>
  </ul>

  <p>
    If you're re-entering after an overstay or on a borderline status, they might ask:
  </p>

  <ul>
    <li>When did you last leave the US?</li>
    <li>Have you ever overstayed a US visa?</li>
    <li>Do you have a waiver or letter from USCIS?</li>
  </ul>

  <h2>What happens if you have an overstay on record?</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If you're re-entering with a valid visa or status</h3>
  <p>
    CBP will see the overstay history, but if you have valid status and no re-entry ban, they'll usually let you in. They may:
  </p>

  <ul>
    <li>Ask you why you overstayed last time</li>
    <li>Make a note in your file</li>
    <li>Require a return ticket or proof of funds</li>
    <li>Reduce the number of days they grant you to stay</li>
  </ul>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">If you're under a re-entry ban</h3>
  <p>
    CBP will see the re-entry ban immediately. They will:
  </p>

  <ul>
    <li>Deny you entry</li>
    <li>Put you in a secondary inspection room</li>
    <li>Ask you to call a lawyer</li>
    <li>Send you back on the next flight to your point of departure</li>
  </ul>

  <p>
    There is no flexibility here. A re-entry ban is absolute.
  </p>

  <Callout tone="warning" title="Do NOT try to hide an overstay">CBP has full access to your record. Lying about an overstay is a separate crime. Be honest. If you're concerned, consult a lawyer before traveling.</Callout>

  <h2>What if CBP discovers you're overstaying right now?</h2>
  <p>
    If you're currently in unlawful presence (you're past your I-94 date with no extension filed), and you try to leave the US, CBP at the airport will:
  </p>

  <ul>
    <li>Check your I-94 date when you scan your passport</li>
    <li>Discover you're overstayed</li>
    <li>Formally record the overstay</li>
    <li>Let you leave (they don't usually detain you at departure)</li>
  </ul>

  <p>
    Once you leave with an overstay on your record, the re-entry ban clock starts (180 days, 365 days, etc.). You can't come back without a waiver.
  </p>

  <h2>Can you talk your way out of a re-entry ban?</h2>
  <p>
    No. CBP agents have no discretion. A re-entry ban is a law. They'll deny you entry, no matter what you say.
  </p>

  <p>
    Your only options are:
  </p>

  <ul>
    <li>File an I-601 waiver (if you have family in the US)</li>
    <li>Wait until the ban expires (3 or 10 years)</li>
    <li>Don't try to enter</li>
  </ul>

  <h2>What about connections through US airports?</h2>
  <p>
    If you're just transiting through the US (eg: flying from Mexico to Canada with a connection in Houston), you still have to clear immigration.
  </p>

  <p>
    If you have a re-entry ban, you can't even transit through the US. CBP will deny you entry at the first airport.
  </p>

  <p>
    Plan international flights that avoid the US entirely.
  </p>

  <h2>What if you're a dual citizen?</h2>
  <p>
    If you're a US citizen and also a citizen of another country, the re-entry ban doesn't apply to you. You can re-enter using your US passport.
  </p>

  <p>
    But if you're only a foreign national, the ban applies.
  </p>

  <h2>Bottom line</h2>
  <p>
    CBP has complete records. Be honest with them. If you know you're under a re-entry ban, don't try to enter the US. If you're unsure of your status, check your USCIS record before traveling, and talk to an attorney.
  </p>

  <Callout tone="info" title="Before traveling">Check your USCIS status online. If you're unsure about your I-94 or overstay status, consult an immigration attorney before boarding any plane.</Callout>
    </GuideLayout>
  )
}
