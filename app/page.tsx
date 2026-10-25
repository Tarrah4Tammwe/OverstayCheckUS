import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, BookOpen, EyeOff, Landmark, MessageSquareText, Plus } from 'lucide-react'
import AdUnit from '@/components/AdUnit'
import { OverstayCalculator } from '@/components/overstay-calculator'
import { Callout } from '@/components/callout'
import { guides, site } from '@/lib/site'

export const metadata: Metadata = {
  alternates: {
    canonical: site.domain,
    languages: { 'en-US': 'https://overstaycheck.com', 'en-GB': 'https://www.overstaycheck.co.uk', 'x-default': 'https://overstaycheck.com' },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is unlawful presence in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlawful presence is time spent in the US after your authorised stay expired — the date on your I-94, not your visa stamp. Once you accumulate more than 180 days of unlawful presence and leave the US, a 3-year or 10-year bar on re-entry applies.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I overstay my US visa before getting banned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "180 days or fewer: no automatic re-entry bar, but your visa is voided. 181 to 364 days: a 3-year bar applies when you leave. 365 days or more: a 10-year bar applies when you leave.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I find my I-94 expiry date?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check your I-94 record online at i94.cbp.dhs.gov. Look for the 'Admit Until Date'. This is different from the expiry date on your visa stamp — the I-94 date is what controls your legal stay.",
      },
    },
    {
      "@type": "Question",
      name: "Does the 3-year or 10-year ban apply while I'm still in the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The ban only activates when you leave the US and then try to re-enter. If you remain in the US, the ban hasn't triggered yet — but unlawful presence is still accumulating every day.",
      },
    },
    {
      "@type": "Question",
      name: "Can I fix a US visa overstay without leaving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sometimes. An immediate relative of a US citizen (a spouse, an unmarried child under 21, or a parent of a citizen aged 21 or over) who was inspected and admitted can usually apply for a green card without leaving the US. Because they never depart, the bars are not triggered. A timely filed extension before your I-94 expired also stops unlawful presence from accruing while it is pending. An immigration attorney can advise on your options.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my visa if I overstay even one day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your visa is automatically voided — even after one day. You cannot use that visa to re-enter the US. You would need to apply for a new visa at a US consulate in your home country.",
      },
    },
    {
      "@type": "Question",
      name: "My I-94 says D/S instead of a date. Does the calculator apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. D/S means duration of status, common for F-1 students and J-1 exchange visitors. There is no date to enter, and unlawful presence generally does not begin until USCIS makes a formal finding of a status violation or an immigration judge issues a decision. Speak to your school's designated official or an immigration attorney.",
      },
    },
    {
      "@type": "Question",
      name: "Does a pending I-539 extension application protect me from unlawful presence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you filed a timely, non-frivolous extension request before your I-94 expired, unlawful presence does not accrue while it is pending. If it is denied, unlawful presence starts the day after the denial, not from your original I-94 date.",
      },
    },
    {
      "@type": "Question",
      name: "Will an old overstay affect a future green card application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can. An overstay stays on your immigration history. If you left after more than 180 days of unlawful presence, a 3-year or 10-year bar applied, and a waiver may be needed to immigrate during it. Immediate relatives of US citizens who adjust status inside the US are treated differently, which is why individual advice matters.",
      },
    },
  ],
}

const trust = [
  { Icon: EyeOff, title: 'Private by design', text: 'Your date is calculated in your browser. Nothing is sent or stored.' },
  { Icon: Landmark, title: 'Based on the statute', text: 'Thresholds follow INA §212(a)(9)(B), the law behind the 3- and 10-year bars.' },
  { Icon: MessageSquareText, title: 'Plain English', text: 'No legal jargon. Every guide says what it means and what to do next.' },
]

const thresholds = [
  { range: '180 days or fewer', title: 'No automatic ban', text: 'Your visa is voided and future applications may be affected, but leaving now does not trigger a time bar.', bar: 'bg-safe', ink: 'text-safe-ink' },
  { range: '181 – 364 days', title: '3-year bar', text: 'Triggered when you leave the US. The 3 years run from your departure, not from when you overstayed.', bar: 'bg-warn', ink: 'text-warn-ink' },
  { range: '365 days or more', title: '10-year bar', text: 'Triggered when you leave. This is the longest automatic bar under US immigration law.', bar: 'bg-danger', ink: 'text-danger-ink' },
]

const steps = [
  { n: '1', title: 'Find your I-94 date', text: 'Look up your record at i94.cbp.dhs.gov and note the “Admit Until Date”.' },
  { n: '2', title: 'Enter it above', text: 'The calculator counts the days of unlawful presence since that date.' },
  { n: '3', title: 'Read your next steps', text: 'See which threshold applies and which guides match your situation.' },
]

export default function Home() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <section className="bg-gradient-to-b from-accent/70 via-accent/30 to-background">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3.5 py-1.5 text-sm font-medium text-accent-foreground">
                Free · No sign-up · Nothing stored
              </p>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl">
                US visa overstay calculator
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Enter your I-94 date to see how many days of unlawful presence you have, whether the 3-year or 10-year
                re-entry bar applies, and what to read next.
              </p>
            </div>
            <div className="mt-10">
              <OverstayCalculator />
            </div>
          </div>
        </section>

        <section aria-label="Why trust this tool" className="border-y border-border bg-card">
          <ul className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
            {trust.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-sans text-base font-semibold text-foreground">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 md:py-20" aria-labelledby="thresholds">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="thresholds" className="text-3xl font-semibold text-foreground md:text-4xl">The three overstay thresholds</h2>
            <p className="mt-3 text-muted-foreground">What happens depends on how many days of unlawful presence you have when you leave the US.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {thresholds.map((t) => (
              <article key={t.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className={`h-1.5 ${t.bar}`} />
                <div className="p-6">
                  <p className={`text-sm font-semibold uppercase tracking-wide ${t.ink}`}>{t.range}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-secondary/60 py-16 md:py-20" aria-labelledby="how">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="how" className="text-center text-3xl font-semibold text-foreground md:text-4xl">How it works</h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((st) => (
                <li key={st.n} className="rounded-2xl bg-card p-6 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{st.n}</span>
                  <h3 className="mt-4 font-sans text-lg font-semibold text-foreground">{st.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <AdUnit slot="2572172105" />

        <section id="guides" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20" aria-labelledby="guides-h">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="guides-h" className="flex items-center justify-center gap-3 text-3xl font-semibold text-foreground md:text-4xl">
              <BookOpen className="h-7 w-7 text-primary" aria-hidden /> Guides
            </h2>
            <p className="mt-3 text-muted-foreground">Plain-English explanations of the rules, your options and what happens next.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/${g.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <span className="font-sans text-lg font-semibold text-foreground group-hover:text-primary">{g.title}</span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{g.blurb}</span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border bg-card py-16 md:py-20" aria-labelledby="about-overstays">
          <div className="mx-auto max-w-3xl px-4">
            <h2 id="about-overstays" className="text-3xl font-semibold text-foreground md:text-4xl">Understanding US visa overstays</h2>
            <div className="article mt-6">
<p>
            Millions of people enter the United States every year on temporary visas — tourist visas,
            student visas, work visas, and visa waiver entries. Most leave on time. But circumstances
            change: medical emergencies happen, flights get missed, family situations become complicated.
            If your authorised stay ends and you are still in the US, you have overstayed — and the
            consequences depend almost entirely on how many days have passed.
            </p>

            <h3>The I-94 Is What Controls Your Stay</h3>
            <p>
            The single most important thing to understand about US immigration is the difference between
            your visa and your I-94. Your visa stamp gives you permission to travel to the US and request
            entry. Your I-94 Arrival/Departure Record — issued electronically when you pass through customs
            — sets the actual deadline for when you must leave. You can have a valid 10-year tourist visa
            and still be overstaying if your I-94 expired. The visa is irrelevant once you are inside
            the country; the I-94 date is what matters.
            </p>
            <p>
            You can check your current I-94 record online at i94.cbp.dhs.gov. Look for the field
            labelled &ldquo;Admit Until Date.&rdquo; If that date has passed and you are still in the US, unlawful
            presence is accumulating. Every day counts.
            </p>

            <h3>How the Re-Entry Bans Work</h3>
            <p>
            The US immigration system does not immediately punish overstayers while they remain inside
            the country. The penalties activate when you leave and try to return. This is an important
            distinction — but it is not a loophole. The clock is running whether you leave or not, and
            the consequences of an extended overstay compound over time.
            </p>
            <p>
            With 180 days or fewer of unlawful presence, no automatic re-entry bar triggers when you depart.
            Your visa is voided and future visa applications will be affected, but you are not
            automatically barred from returning. With more than 180 days and less than a year, a 3-year bar triggers the
            moment you leave US soil. At one year or more, a 10-year bar applies. These are hard
            thresholds — one day over each line moves you into the next category.
            </p>

            <h3>What This Calculator Does</h3>
            <p>
            This tool calculates your unlawful presence based on your I-94 expiry date and today&apos;s
            date. It tells you exactly which threshold you are in, how many days remain before you
            cross into a worse category, and what the consequences are if you leave now versus waiting.
            It also flags situations where standard rules may not apply — pending extension applications,
            TPS status, age exceptions, and asylum cases.
            </p>
            <p>
            This is a free informational tool. It does not store your data and does not require
            registration. If your situation is complex — especially if you are close to a threshold,
            have a pending application, or are considering adjustment of status — speak to a licensed
            US immigration attorney before making any decisions about travel or departure.
            </p>
              <p>
                <Link href="/about">How this calculator works and where the rules come from →</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 md:py-20" aria-labelledby="faq">
          <h2 id="faq" className="text-center text-3xl font-semibold text-foreground md:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {faqSchema.mainEntity.map((q) => (
              <details key={q.name} className="group p-5 open:bg-accent/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {q.name}
                  <Plus className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden />
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{q.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </section>

        <AdUnit slot="2572172105" />

        <section className="mx-auto mt-16 max-w-3xl px-4" aria-label="Disclaimer">
          <Callout tone="warning" title="This is not legal advice">
            This tool gives general information based on standard US immigration thresholds. Pending applications,
            asylum claims, age and TPS status can change how the rules apply to you. If your situation is complicated,
            speak to an immigration attorney.
          </Callout>
        </section>
      </main>
    </>
  )
}
