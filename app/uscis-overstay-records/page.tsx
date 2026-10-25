import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'USCIS Overstay Records',
  description: 'How to check your USCIS records for overstay history. What information USCIS has about you.',
  alternates: {
    canonical: `${site.domain}/uscis-overstay-records`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="uscis-overstay-records" title="USCIS Overstay Records" description="How to check your USCIS records for overstay history. What information USCIS has about you.">
  <p className="lede">
    Every time you enter or leave the US, it's recorded. Your overstay is documented forever. Here's what USCIS knows about you and how to check your own record.
  </p>

  <h2>What records does USCIS keep?</h2>
  <p>
    USCIS and CBP (Customs and Border Protection) maintain:
  </p>

  <ul>
    <li>Every time you entered the US (date, port of entry, visa type)</li>
    <li>Every time you left the US (date, port of departure)</li>
    <li>Your I-94 record (including "Admit Until Date")</li>
    <li>Any visa applications or rejections</li>
    <li>Any green card applications</li>
    <li>Any overstays or unlawful presence</li>
    <li>Any deportation orders or re-entry bans</li>
    <li>Any criminal records</li>
  </ul>

  <p>
    All of this is connected in one database. Agents at every border, consulate, and USCIS office can see it.
  </p>

  <h2>How long does an overstay stay on your record?</h2>
  <p>
    Forever. There's no statute of limitations. A 5-day overstay from 20 years ago will still show up.
  </p>

  <p>
    You cannot request that USCIS remove or forget an overstay. It's part of your permanent immigration file.
  </p>

  <h2>How to check your own USCIS record</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Method 1: I-94 Online (easiest)</h3>
  <p>
    Visit <a href="https://i94.cbp.dhs.gov" target="_blank" rel="noopener noreferrer">i94.cbp.dhs.gov</a> and search by your name and passport number.
  </p>

  <p>
    You'll see:
  </p>

  <ul>
    <li>Your most recent I-94 arrival and departure records</li>
    <li>Your "Admit Until Date"</li>
    <li>Whether you overstayed (if it shows a departure date after your I-94 expiry, you overstayed)</li>
  </ul>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Method 2: USCIS My USCIS Account</h3>
  <p>
    Create an account at <a href="https://myaccount.uscis.dhs.gov" target="_blank" rel="noopener noreferrer">myaccount.uscis.dhs.gov</a>.
  </p>

  <p>
    You can see:
  </p>

  <ul>
    <li>All your USCIS applications and petitions</li>
    <li>Your visa status</li>
    <li>Any pending cases</li>
    <li>Overstay notices (if issued)</li>
  </ul>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Method 3: Request via FOIA</h3>
  <p>
    You can request your full immigration file from USCIS using the Freedom of Information Act (FOIA).
  </p>

  <p>
    This takes 2–6 months and you'll get everything: scans of documents, notes from agents, everything.
  </p>

  <p>
    File a FOIA request at <a href="https://www.uscis.gov/foia" target="_blank" rel="noopener noreferrer">uscis.gov/foia</a>.
  </p>

  <h2>What if you can't find your I-94 record?</h2>
  <p>
    If the CBP.gov website doesn't show your record, you either:
  </p>

  <ul>
    <li>Never had one (you weren't admitted properly)</li>
    <li>Entered without inspection (illegal entry)</li>
    <li>Have an extremely old record (pre-2000s might not be online)</li>
  </ul>

  <p>
    Contact CBP or an immigration attorney for help accessing old records.
  </p>

  <h2>Can you get an overstay removed from your record?</h2>
  <p>
    No. An overstay is a fact. It happened. USCIS will not erase it or pretend it didn't happen.
  </p>

  <p>
    What you CAN do:
  </p>

  <ul>
    <li>File an I-601 waiver if you have family sponsorship (may waive the consequences)</li>
    <li>Document mitigating circumstances (medical emergency, abuse, etc.) for future cases</li>
    <li>Consult an attorney about your options</li>
  </ul>

  <Callout tone="info" title="Important">An overstay stays on your record even if you later married a US citizen or got a green card. It doesn't disappear. But a green card means you're no longer "overstayed" — you're now lawfully present.</Callout>

  <h2>What if your record is wrong?</h2>
  <p>
    If you believe your I-94 record is incorrect (wrong dates, wrong visa type, etc.), you can:
  </p>

  <ol>
    <li>Contact CBP directly to request a review</li>
    <li>File a FOIA request with supporting documents</li>
    <li>Consult an immigration attorney if the error is significant</li>
  </ol>

  <p>
    Corrections are rare and require solid proof that the record is wrong.
  </p>

  <h2>Can family members see your record?</h2>
  <p>
    No. Your USCIS record is confidential. Only:
  </p>

  <ul>
    <li>You</li>
    <li>An immigration attorney you authorize</li>
    <li>USCIS and CBP agents</li>
    <li>A family member you give explicit permission to</li>
  </ul>

  <p>
    Don't assume your family knows about your overstay unless you told them.
  </p>

  <h2>Bottom line</h2>
  <p>
    Your overstay is recorded and permanent. Check your own record via i94.cbp.dhs.gov to confirm. Don't be surprised if you see it — it means CBP caught it at the border. If you're planning future US immigration, know that this overstay will come up. Plan accordingly.
  </p>

  <Callout tone="warning" title="Before future applications">Always check your record before applying for visas, jobs requiring background checks, or anything tied to immigration. Know what USCIS knows about you.</Callout>
    </GuideLayout>
  )
}
