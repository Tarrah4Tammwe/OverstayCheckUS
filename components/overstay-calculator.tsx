"use client"

import { useState } from "react"
import Link from "next/link"
import { AlertTriangle, ArrowRight, CalendarDays, CheckCircle2, ShieldAlert, XCircle } from "lucide-react"

type Tier = "valid" | "safe" | "warning" | "danger"

interface Result {
  daysOverstayed: number
  daysRemaining: number
  tier: Tier
  label: string
  headline: string
  detail: string
  next: { days: number; label: string } | null
  progress: number
  steps: { href: string; label: string }[]
}

// "YYYY-MM-DD" from <input type="date"> must be read as a local date. new Date("2026-01-01")
// parses as UTC midnight, which is the previous evening in the US and shifts every result by a day.
function parseLocalDate(value: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!m) return null
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  return isNaN(d.getTime()) ? null : d
}

function daysBetween(from: Date, to: Date) {
  const a = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate())
  const b = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate())
  return Math.round((b - a) / 86_400_000)
}

function calculate(expiry: Date): Result {
  const diff = daysBetween(expiry, new Date())

  if (diff <= 0) {
    const remaining = -diff
    return {
      daysOverstayed: 0,
      daysRemaining: remaining,
      tier: "valid",
      label: remaining === 0 ? "Expires today" : "Within authorized stay",
      headline:
        remaining === 0
          ? "Your authorized stay ends today."
          : `You have ${remaining} day${remaining === 1 ? "" : "s"} left on your I-94.`,
      detail:
        remaining === 0
          ? "Unlawful presence starts accruing tomorrow unless you leave or have a timely extension pending."
          : "You are not accruing unlawful presence. If you need more time, a timely Form I-539 extension filed before this date protects you while it is pending.",
      next: null,
      progress: 0,
      steps: [
        { href: "/i539-extension", label: "How to file an I-539 extension" },
        { href: "/what-is-i94", label: "Where to find your I-94 date" },
      ],
    }
  }

  // The statute says "more than 180 days" (3-year bar) and "one year or more" (10-year bar).
  if (diff <= 180) {
    return {
      daysOverstayed: diff,
      daysRemaining: 0,
      tier: "safe",
      label: "No re-entry ban yet",
      headline: `${diff} day${diff === 1 ? "" : "s"} of unlawful presence.`,
      detail:
        "No automatic re-entry bar applies if you leave now. Your visa is voided and future applications can still be affected. The 3-year range starts once you pass 180 days.",
      next: { days: 181 - diff, label: "the 3-year bar range" },
      progress: (diff / 181) * 100,
      steps: [
        { href: "/unlawful-presence", label: "Unlawful presence vs. overstay" },
        { href: "/i539-extension", label: "Late extensions and exceptions" },
        { href: "/tps-status-overstay", label: "Check whether TPS or another status applies" },
      ],
    }
  }

  if (diff < 365) {
    return {
      daysOverstayed: diff,
      daysRemaining: 0,
      tier: "warning",
      label: "3-year ban range",
      headline: `${diff} days of unlawful presence.`,
      detail:
        "If you leave the US now, a 3-year bar on re-entry is triggered when you depart. The bar starts on departure, not when the overstay began. At 365 days it becomes a 10-year bar.",
      next: { days: 365 - diff, label: "the 10-year bar range" },
      progress: ((diff - 181) / 184) * 100,
      steps: [
        { href: "/appeal-reentry-ban", label: "Waivers and ways to appeal a ban" },
        { href: "/travel-with-reentry-ban", label: "Life and travel under a ban" },
        { href: "/unlawful-presence", label: "How unlawful presence is counted" },
      ],
    }
  }

  return {
    daysOverstayed: diff,
    daysRemaining: 0,
    tier: "danger",
    label: "10-year ban range",
    headline: `${diff} days of unlawful presence, over a year.`,
    detail:
      "If you leave the US now, a 10-year bar on re-entry is triggered when you depart. This is the longest automatic bar. Waivers exist for some people with qualifying family, so speak to an immigration attorney before making travel decisions.",
    next: null,
    progress: 100,
    steps: [
      { href: "/appeal-reentry-ban", label: "Waivers and ways to appeal a ban" },
      { href: "/travel-with-reentry-ban", label: "Life and travel under a ban" },
      { href: "/denied-entry-rights", label: "Your rights if you are denied entry" },
    ],
  }
}

const styles: Record<
  Tier,
  { card: string; badge: string; bar: string; Icon: typeof CheckCircle2; iconColor: string }
> = {
  valid: { card: "border-safe/40 bg-safe-soft", badge: "bg-safe text-white", bar: "bg-safe", Icon: CheckCircle2, iconColor: "text-safe" },
  safe: { card: "border-warn/50 bg-warn-soft", badge: "bg-warn-ink text-white", bar: "bg-warn", Icon: AlertTriangle, iconColor: "text-warn-ink" },
  warning: { card: "border-warn/60 bg-warn-soft", badge: "bg-warn-ink text-white", bar: "bg-warn", Icon: ShieldAlert, iconColor: "text-warn-ink" },
  danger: { card: "border-danger/40 bg-danger-soft", badge: "bg-danger text-white", bar: "bg-danger", Icon: XCircle, iconColor: "text-danger" },
}

export function OverstayCalculator() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<Result | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const date = parseLocalDate(value)
    if (date) setResult(calculate(date))
  }

  const reset = () => {
    setValue("")
    setResult(null)
  }

  const s = result ? styles[result.tier] : null

  return (
    <div className="mx-auto w-full max-w-2xl">
      <form
        onSubmit={submit}
        className="rounded-2xl border border-border bg-card p-6 shadow-[0_8px_30px_-12px_rgb(30_40_90/0.25)] md:p-8"
      >
        <label htmlFor="i94-date" className="block text-base font-semibold text-foreground">
          What is your I-94 &ldquo;Admit Until&rdquo; date?
        </label>
        <p className="mt-1 text-sm text-muted-foreground">
          Find it at{" "}
          <a
            href="https://i94.cbp.dhs.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2"
          >
            i94.cbp.dhs.gov
          </a>
          . Use this date, not the expiry on your visa stamp. If your I-94 says <strong>D/S</strong> (common for F-1 and
          J-1), there is no date to enter and{' '}
          <Link href="/what-is-i94#ds" className="font-medium text-primary underline underline-offset-2">
            different rules apply
          </Link>
          .
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <CalendarDays
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="i94-date"
              type="date"
              required
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                setResult(null)
              }}
              className="h-12 w-full rounded-lg border border-input bg-background pl-11 pr-3 text-base text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <button
            type="submit"
            disabled={!value}
            className="h-12 rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check my status
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Calculated in your browser. Your date is never sent anywhere or stored.
        </p>
      </form>

      {result && s && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500" role="status" aria-live="polite">
          <section className={`rounded-2xl border p-6 md:p-8 ${s.card}`}>
            <div className="flex items-start gap-4">
              <s.Icon className={`mt-1 h-8 w-8 shrink-0 ${s.iconColor}`} aria-hidden />
              <div className="min-w-0">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${s.badge}`}>
                  {result.label}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground md:text-3xl">
                  {result.headline}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/80">{result.detail}</p>
              </div>
            </div>

            {result.tier !== "valid" && (
              <div className="mt-6">
                <div className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="font-medium text-foreground">
                    {result.next
                      ? `${result.next.days} day${result.next.days === 1 ? "" : "s"} until ${result.next.label}`
                      : "Maximum automatic bar reached"}
                  </span>
                  <span className="tabular-nums text-muted-foreground">{result.daysOverstayed} days counted</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-black/10">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${s.bar}`}
                    style={{ width: `${Math.min(Math.max(result.progress, 3), 100)}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                  <span>Day 1</span>
                  <span>181 · 3-year</span>
                  <span>365 · 10-year</span>
                </div>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-sans text-base font-semibold text-foreground">What to read next</h3>
            <ul className="mt-3 divide-y divide-border">
              {result.steps.map((step) => (
                <li key={step.href}>
                  <Link
                    href={step.href}
                    className="group flex items-center justify-between gap-3 py-3 text-foreground hover:text-primary"
                  >
                    <span className="font-medium">{step.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <p className="text-center text-sm text-muted-foreground">
            This is general information, not legal advice. Pending applications, TPS, asylum and age exceptions can change the result.{" "}
            <button type="button" onClick={reset} className="font-medium text-primary underline underline-offset-2">
              Check another date
            </button>
          </p>
        </div>
      )}
    </div>
  )
}
