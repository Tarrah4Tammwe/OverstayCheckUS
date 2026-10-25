import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { GuideLayout } from '@/components/guide-layout'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Unlawful Presence vs. Overstay',
  description: 'What is unlawful presence? How is it different from overstay? Consequences and how to fix it.',
  alternates: {
    canonical: `${site.domain}/unlawful-presence`,
  },
}

export default function Page() {
  return (
    <GuideLayout slug="unlawful-presence" title="Unlawful Presence vs. Overstay" description="What is unlawful presence? How is it different from overstay? Consequences and how to fix it.">
  <p className="lede">
    "Unlawful presence" and "overstay" sound the same, but they're different. The distinction matters for re-entry bans and future immigration applications.
  </p>

  <h2>What's the difference?</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Overstay</h3>
  <p>
    An overstay happens when you stay in the US after your I-94 "Admit Until Date" expires. It's the act of being here past your deadline.
  </p>

  <p>
    <strong>Example:</strong> Your I-94 says you can stay until June 30, 2026. You leave on July 15, 2026. You overstayed by 15 days.
  </p>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Unlawful Presence</h3>
  <p>
    Unlawful presence is the legal status of being in the US without authorisation. It means the US government doesn't recognise your right to be here.
  </p>

  <p>
    <strong>Unlawful presence can start:</strong>
  </p>

  <ul>
    <li>When your I-94 expires (the obvious one)</li>
    <li>When you enter the US without inspection (eg: crossing the border illegally)</li>
    <li>When you work without authorisation</li>
    <li>When your visa is revoked or cancelled</li>
    <li>When you violate the terms of your visa (eg: studying when your visa says work only)</li>
  </ul>

  <h2>Can you overstay without unlawful presence?</h2>
  <p>
    Yes. This is important.
  </p>

  <p>
    <strong>Scenario:</strong>
  </p>

  <p>
    Your I-94 expires June 30, 2026. But on June 20, you file an I-539 extension application. Your I-94 hasn't expired yet, so there's no overstay yet.
  </p>

  <p>
    On July 15, your I-94 technically expires, but your I-539 extension is still pending. USCIS says you're in a "period of stay" now. You're not unlawfully present — you're protected by the pending application.
  </p>

  <p>
    In this case, you're technically in a limbo. You're not overstaying on paper, and you're not unlawfully present. You're waiting for a decision.
  </p>

  <h2>How does unlawful presence affect you?</h2>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">The re-entry bans</h3>
  <p>
    Unlawful presence of 180+ days triggers automatic re-entry bans when you leave:
  </p>

  <ul>
    <li>180–364 days: 3-year ban</li>
    <li>365+ days: 10-year ban</li>
  </ul>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Future visa applications</h3>
  <p>
    Any unlawful presence shows up on your immigration record. It:
  </p>

  <ul>
    <li>Makes future visa applications harder</li>
    <li>Can trigger visa denials</li>
    <li>Affects green card applications</li>
    <li>Never goes away from your record</li>
  </ul>

  <p>
    Even if you overstayed for just 5 days, it's recorded. Even if it was decades ago.
  </p>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Work authorisation</h3>
  <p>
    If you're in unlawful presence, you cannot legally work in the US. Any job is a violation.
  </p>

  <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Travel</h3>
  <p>
    If you leave the US while in unlawful presence, you trigger re-entry bans (if applicable).
  </p>

  <h2>Can unlawful presence be removed from your record?</h2>
  <p>
    No. Unlawful presence is permanent. It never disappears from your USCIS file.
  </p>

  <p>
    However, it can be "stopped" or "paused" in certain situations:
  </p>

  <ul>
    <li>Pending I-539 extension (pauses unlawful presence while application is pending)</li>
    <li>TPS status (pauses unlawful presence while TPS is active)</li>
    <li>Asylum claim (pauses unlawful presence during processing)</li>
    <li>VAWA or U visa claim (pauses unlawful presence while pending)</li>
  </ul>

  <p>
    But once the pause ends (eg: TPS designation ends, I-539 is denied), the unlawful presence resumes.
  </p>

  <Callout tone="info" title="Key point">If you're going to overstay, plan ahead. File an I-539 extension or pursue another status BEFORE your I-94 expires. This prevents unlawful presence from starting in the first place.</Callout>

  <h2>Can you fix a past overstay?</h2>
  <p>
    Not really. Once it's on your record, it stays. But you can:
  </p>

  <ul>
    <li>File an I-601 waiver if you have qualifying relatives</li>
    <li>Leave the US if a re-entry ban applies</li>
    <li>Consult an attorney about other options (deferred action, prosecutorial discretion)</li>
  </ul>

  <h2>Bottom line</h2>
  <p>
    Unlawful presence is more serious than just "overstaying". It locks in consequences: re-entry bans, visa denials, future application problems. The best strategy is to prevent it — file your I-539 extension before your I-94 expires.
  </p>

  <Callout tone="warning" title="Not legal advice">If you're facing unlawful presence or overstay, consult a qualified immigration attorney. Your case may have options we haven't covered here.</Callout>
    </GuideLayout>
  )
}
