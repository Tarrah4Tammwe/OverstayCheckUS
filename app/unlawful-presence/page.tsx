'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function UnlawfulPresencePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">Unlawful Presence vs. Overstay</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            "Unlawful presence" and "overstay" sound the same, but they're different. The distinction matters for re-entry bans and future immigration applications.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What's the difference?</h2>

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

          <ul className="space-y-2 ml-4">
            <li>• When your I-94 expires (the obvious one)</li>
            <li>• When you enter the US without inspection (eg: crossing the border illegally)</li>
            <li>• When you work without authorisation</li>
            <li>• When your visa is revoked or cancelled</li>
            <li>• When you violate the terms of your visa (eg: studying when your visa says work only)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you overstay without unlawful presence?</h2>
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

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">How does unlawful presence affect you?</h2>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">The re-entry bans</h3>
          <p>
            Unlawful presence of 180+ days triggers automatic re-entry bans when you leave:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• 180–364 days: 3-year ban</li>
            <li>• 365+ days: 10-year ban</li>
          </ul>

          <h3 className="text-xl font-bold text-secondary mt-8 mb-3">Future visa applications</h3>
          <p>
            Any unlawful presence shows up on your immigration record. It:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Makes future visa applications harder</li>
            <li>• Can trigger visa denials</li>
            <li>• Affects green card applications</li>
            <li>• Never goes away from your record</li>
          </ul>

          <p className="mt-6">
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

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can unlawful presence be removed from your record?</h2>
          <p>
            No. Unlawful presence is permanent. It never disappears from your USCIS file.
          </p>

          <p>
            However, it can be "stopped" or "paused" in certain situations:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Pending I-539 extension (pauses unlawful presence while application is pending)</li>
            <li>• TPS status (pauses unlawful presence while TPS is active)</li>
            <li>• Asylum claim (pauses unlawful presence during processing)</li>
            <li>• VAWA or U visa claim (pauses unlawful presence while pending)</li>
          </ul>

          <p className="mt-6">
            But once the pause ends (eg: TPS designation ends, I-539 is denied), the unlawful presence resumes.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Key point:</p>
                <p className="text-blue-800">
                  If you're going to overstay, plan ahead. File an I-539 extension or pursue another status BEFORE your I-94 expires. This prevents unlawful presence from starting in the first place.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you fix a past overstay?</h2>
          <p>
            Not really. Once it's on your record, it stays. But you can:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• File an I-601 waiver if you have qualifying relatives</li>
            <li>• Leave the US if a re-entry ban applies</li>
            <li>• Consult an attorney about other options (deferred action, prosecutorial discretion)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            Unlawful presence is more serious than just "overstaying". It locks in consequences: re-entry bans, visa denials, future application problems. The best strategy is to prevent it — file your I-539 extension before your I-94 expires.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Not legal advice:</p>
                <p className="text-orange-800">
                  If you're facing unlawful presence or overstay, consult a qualified immigration attorney. Your case may have options we haven't covered here.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">Related guides:</p>
          <ul className="space-y-2">
            <li><Link href="/what-is-i94" className="text-primary hover:underline">→ What is an I-94 Visa?</Link></li>
            <li><Link href="/i539-extension" className="text-primary hover:underline">→ I-539 Extension Applications</Link></li>
            <li><Link href="/appeal-reentry-ban" className="text-primary hover:underline">→ Appealing a Re-Entry Ban</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
