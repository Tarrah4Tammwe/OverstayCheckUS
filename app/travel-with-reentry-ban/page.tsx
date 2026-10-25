import type { Metadata } from 'next'
import Link from 'next/link'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Travel with a Re-Entry Ban',
  description: 'Can you travel internationally if you have a US re-entry ban? What happens if you try to return.',
  alternates: {
    canonical: `${site.domain}/travel-with-reentry-ban`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="travel-with-reentry-ban" title="Travel with a Re-Entry Ban" description="Can you travel internationally if you have a US re-entry ban? What happens if you try to return.">
  <p className="lede">
    A 3-year or 10-year re-entry ban means you can't come back to the US. But you can live and travel anywhere else in the world — here's what you need to know.
  </p>

  <h2>What does a re-entry ban actually prevent?</h2>
  <p>
    A re-entry ban only blocks entry to the US. It doesn't affect your passport or your ability to travel to other countries.
  </p>

  <p>
    <strong>You CAN:</strong>
  </p>

  <ul>
    <li>Return to your home country</li>
    <li>Travel to Canada, Mexico, Europe, Asia, anywhere except the US</li>
    <li>Live, work, and study outside the US</li>
    <li>Get a driver's license, buy a house, or rent in any other country</li>
  </ul>

  <p>
    <strong>You CANNOT:</strong>
  </p>

  <ul>
    <li>Enter the US (unless the ban is waived)</li>
    <li>Use the US as a transit point (even to connect flights)</li>
    <li>Enter US territories (Puerto Rico, US Virgin Islands, etc.)</li>
  </ul>

  <Callout tone="warning" title="Critical">If you try to enter the US with an active re-entry ban, CBP will arrest you at the border. The ban is enforced. Do not test it.</Callout>

  <h2>Can you get a job outside the US?</h2>
  <p>
    Yes. Once you leave the US, the re-entry ban doesn't affect your ability to work elsewhere. You can:
  </p>

  <ul>
    <li>Get a work visa in another country (Canada, UK, Australia, etc.)</li>
    <li>Self-employ or start a business</li>
    <li>Work for a multinational company remotely</li>
  </ul>

  <p>
    Your re-entry ban is specific to the US. Other countries won't block you based on a US immigration issue (though some background checks might flag it).
  </p>

  <h2>What about family in the US?</h2>
  <p>
    This is the hardest part. If your spouse, children, or parents are in the US, you can't visit them while a re-entry ban is active.
  </p>

  <p>
    Your options:
  </p>

  <ul>
    <li>They visit you outside the US (Mexico, Canada, another country)</li>
    <li>File for a waiver while abroad (usually with family sponsorship)</li>
    <li>Stay abroad until the ban expires (3 or 10 years)</li>
    <li>Pursue legal remedies through an attorney (extremely difficult)</li>
  </ul>

  <h2>Which countries are easiest to move to?</h2>
  <p>
    This depends on your passport and finances. Generally easier options:
  </p>

  <ul>
    <li><strong>Home country:</strong> No visa needed. Easiest option.</li>
    <li><strong>Mexico or Central America:</strong> Often easier visa processes for people with US history</li>
    <li><strong>Canada:</strong> If you have education/work experience, relatively accessible</li>
    <li><strong>Turkey, Portugal, Spain:</strong> Have temporary residence programs for remote workers</li>
    <li><strong>Southeast Asia:</strong> Thailand, Vietnam, Philippines offer long-term visas</li>
  </ul>

  <p>
    Consult an immigration attorney in the country you're considering.
  </p>

  <h2>Can you get citizenship in another country?</h2>
  <p>
    Yes. A US re-entry ban has nothing to do with other countries' citizenship or naturalisation processes. You can:
  </p>

  <ul>
    <li>Get permanent residency abroad</li>
    <li>Naturalise and become a citizen of another country</li>
    <li>Lose US citizenship if you voluntarily become a citizen elsewhere (very rare)</li>
  </ul>

  <p>
    Many people with US re-entry bans establish new lives in their home countries or other countries and become citizens there. Life goes on.
  </p>

  <h2>What if your re-entry ban expires?</h2>
  <p>
    After 3 years (for the 3-year ban) or 10 years (for the 10-year ban), the ban technically expires. But it's on your record forever.
  </p>

  <p>
    Even after the ban expires, a past overstay makes future US immigration difficult. You can apply for a new visa, but consular officers will see the overstay history and may deny you.
  </p>

  <p>
    Don't assume the ban "going away" means you can waltz back into the US. It's complicated.
  </p>

  <h2>The waiver route</h2>
  <p>
    If you have a US citizen spouse or parent, you can pursue a waiver while abroad:
  </p>

  <ol>
    <li>They file Form I-130 (family petition)</li>
    <li>It's approved</li>
    <li>You go to a US consulate in another country</li>
    <li>You request a waiver of the re-entry ban (Form I-601)</li>
    <li>If approved, you get a visa and can re-enter</li>
  </ol>

  <p>
    This process takes 1–3 years. But it's a real path to coming back.
  </p>

  <p>
    <Link href="/appeal-reentry-ban">
      Learn more about waivers and appeals →
    </Link>
  </p>

  <h2>Bottom line</h2>
  <p>
    A re-entry ban isn't the end of your life — it's the end of living in the US. You can travel, work, and live well outside the US. Many people do. The hard part is being separated from family. Plan ahead, explore waiver options, and build a new life elsewhere if needed.
  </p>

  <Callout tone="info" title="Not legal advice">If you're facing a re-entry ban, consult an immigration attorney and a relocation specialist. Your situation may have options.</Callout>
    </GuideLayout>
  )
}
