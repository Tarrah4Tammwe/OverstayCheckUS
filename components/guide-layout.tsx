import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { guides, site } from "@/lib/site"

export function GuideLayout({
  slug,
  title,
  description,
  children,
}: {
  slug?: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  const idx = guides.findIndex((g) => g.slug === slug)
  const related = (idx >= 0
    ? [1, 2, 3].map((n) => guides[(idx + n) % guides.length])
    : guides.slice(0, 3))

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
          { "@type": "ListItem", position: 2, name: title, item: slug ? `${site.domain}/${slug}` : site.domain },
        ],
      },
      {
        "@type": "Article",
        headline: title,
        description,
        dateModified: "2026-05-16",
        publisher: { "@type": "Organization", name: site.name, url: site.domain },
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="border-b border-border bg-gradient-to-b from-accent/60 to-background">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-8">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground hover:underline">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <Link href="/#guides" className="hover:text-foreground hover:underline">Guides</Link>
          </nav>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Independent guide · Updated {site.updated} · General information, not legal advice
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <article className="article">{children}</article>

        <section className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-foreground">Check your own dates</h2>
          <p className="mt-2 text-muted-foreground">
            Enter your expiry date and see which threshold applies to you today. Free, private, takes ten seconds.
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open the calculator <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </section>

        <section className="mt-12" aria-labelledby="related">
          <h2 id="related" className="text-xl font-semibold text-foreground">Keep reading</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/${g.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary">{g.title}</span>
                  <span className="mt-1 text-sm text-muted-foreground">{g.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 rounded-xl bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Not legal advice.</strong> Immigration rules change and individual
          circumstances matter. If you are close to a deadline, have a pending application, or are unsure what applies
          to you, speak to a licensed immigration attorney before you act.
        </p>
      </div>
    </main>
  )
}
