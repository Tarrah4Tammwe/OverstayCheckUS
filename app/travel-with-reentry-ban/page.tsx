'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export default function TravelWithBanPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b-2 border-secondary bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-secondary">Travel with a Re-Entry Ban</h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            A 3-year or 10-year re-entry ban means you can't come back to the US. But you can live and travel anywhere else in the world — here's what you need to know.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What does a re-entry ban actually prevent?</h2>
          <p>
            A re-entry ban only blocks entry to the US. It doesn't affect your passport or your ability to travel to other countries.
          </p>

          <p>
            <strong>You CAN:</strong>
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Return to your home country</li>
            <li>• Travel to Canada, Mexico, Europe, Asia, anywhere except the US</li>
            <li>• Live, work, and study outside the US</li>
            <li>• Get a driver's license, buy a house, or rent in any other country</li>
          </ul>

          <p className="mt-6">
            <strong>You CANNOT:</strong>
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Enter the US (unless the ban is waived)</li>
            <li>• Use the US as a transit point (even to connect flights)</li>
            <li>• Enter US territories (Puerto Rico, US Virgin Islands, etc.)</li>
          </ul>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-orange-900 mb-2">Critical:</p>
                <p className="text-orange-800">
                  If you try to enter the US with an active re-entry ban, CBP will arrest you at the border. The ban is enforced. Do not test it.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you get a job outside the US?</h2>
          <p>
            Yes. Once you leave the US, the re-entry ban doesn't affect your ability to work elsewhere. You can:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Get a work visa in another country (Canada, UK, Australia, etc.)</li>
            <li>• Self-employ or start a business</li>
            <li>• Work for a multinational company remotely</li>
          </ul>

          <p className="mt-6">
            Your re-entry ban is specific to the US. Other countries won't block you based on a US immigration issue (though some background checks might flag it).
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What about family in the US?</h2>
          <p>
            This is the hardest part. If your spouse, children, or parents are in the US, you can't visit them while a re-entry ban is active.
          </p>

          <p>
            Your options:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• They visit you outside the US (Mexico, Canada, another country)</li>
            <li>• File for a waiver while abroad (usually with family sponsorship)</li>
            <li>• Stay abroad until the ban expires (3 or 10 years)</li>
            <li>• Pursue legal remedies through an attorney (extremely difficult)</li>
          </ul>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Which countries are easiest to move to?</h2>
          <p>
            This depends on your passport and finances. Generally easier options:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• <strong>Home country:</strong> No visa needed. Easiest option.</li>
            <li>• <strong>Mexico or Central America:</strong> Often easier visa processes for people with US history</li>
            <li>• <strong>Canada:</strong> If you have education/work experience, relatively accessible</li>
            <li>• <strong>Turkey, Portugal, Spain:</strong> Have temporary residence programs for remote workers</li>
            <li>• <strong>Southeast Asia:</strong> Thailand, Vietnam, Philippines offer long-term visas</li>
          </ul>

          <p className="mt-6">
            Consult an immigration attorney in the country you're considering.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Can you get citizenship in another country?</h2>
          <p>
            Yes. A US re-entry ban has nothing to do with other countries' citizenship or naturalisation processes. You can:
          </p>

          <ul className="space-y-2 ml-4">
            <li>• Get permanent residency abroad</li>
            <li>• Naturalise and become a citizen of another country</li>
            <li>• Lose US citizenship if you voluntarily become a citizen elsewhere (very rare)</li>
          </ul>

          <p className="mt-6">
            Many people with US re-entry bans establish new lives in their home countries or other countries and become citizens there. Life goes on.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">What if your re-entry ban expires?</h2>
          <p>
            After 3 years (for the 3-year ban) or 10 years (for the 10-year ban), the ban technically expires. But it's on your record forever.
          </p>

          <p>
            Even after the ban expires, a past overstay makes future US immigration difficult. You can apply for a new visa, but consular officers will see the overstay history and may deny you.
          </p>

          <p>
            Don't assume the ban "going away" means you can waltz back into the US. It's complicated.
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">The waiver route</h2>
          <p>
            If you have a US citizen spouse or parent, you can pursue a waiver while abroad:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>They file Form I-130 (family petition)</li>
            <li>It's approved</li>
            <li>You go to a US consulate in another country</li>
            <li>You request a waiver of the re-entry ban (Form I-601)</li>
            <li>If approved, you get a visa and can re-enter</li>
          </ol>

          <p className="mt-6">
            This process takes 1–3 years. But it's a real path to coming back.
          </p>

          <p>
            <Link href="/appeal-reentry-ban" className="text-primary hover:underline font-semibold">
              Learn more about waivers and appeals →
            </Link>
          </p>

          <h2 className="text-2xl font-bold text-secondary mt-10 mb-4">Bottom line</h2>
          <p>
            A re-entry ban isn't the end of your life — it's the end of living in the US. You can travel, work, and live well outside the US. Many people do. The hard part is being separated from family. Plan ahead, explore waiver options, and build a new life elsewhere if needed.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-blue-900 mb-2">Not legal advice:</p>
                <p className="text-blue-800">
                  If you're facing a re-entry ban, consult an immigration attorney and a relocation specialist. Your situation may have options.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="border-t-2 border-secondary mt-12 pt-8">
          <p className="text-sm text-muted-foreground mb-4">Related guides:</p>
          <ul className="space-y-2">
            <li><Link href="/appeal-reentry-ban" className="text-primary hover:underline">→ Appealing a Re-Entry Ban</Link></li>
            <li><Link href="/unlawful-presence" className="text-primary hover:underline">→ Unlawful Presence vs. Overstay</Link></li>
            <li><Link href="/" className="text-primary hover:underline font-semibold">→ Back to Calculator</Link></li>
          </ul>
        </nav>
      </article>
    </main>
  )
}
