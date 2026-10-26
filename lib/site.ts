export const site = {
  name: "OverstayCheck",
  region: "US",
  regionLabel: "United States",
  domain: "https://overstaycheck.com",
  // Month the guide content was last revised.
  updated: "October 2026",
  // Set this to a monitored inbox. The contact page and footer show it only when set.
  contactEmail: "",
  otherSite: {
    label: "UK site",
    regionLabel: "United Kingdom",
    url: "https://www.overstaycheck.co.uk",
  },
  exploreTitle: "Guides",
  explore: [] as { label: string; href: string }[],
  disclaimerAuthority: "USCIS, DHS, CBP or any government agency",
  officialLinks: [
    { label: "Check your I-94 (CBP)", href: "https://i94.cbp.dhs.gov" },
    { label: "USCIS", href: "https://www.uscis.gov" },
    { label: "Find an immigration lawyer (AILA)", href: "https://www.ailalawyer.com" },
    { label: "Free and low-cost legal help", href: "https://www.lawhelp.org" },
  ],
}

export type Guide = { slug: string; title: string; blurb: string }

export const guides: Guide[] = [
  { slug: "what-is-i94", title: "What is an I-94?", blurb: "The difference between your visa and your I-94, and where to find your Admit Until Date." },
  { slug: "unlawful-presence", title: "Unlawful presence vs. overstay", blurb: "The legal difference, and why it matters for future applications." },
  { slug: "i539-extension", title: "I-539 extension application", blurb: "How to ask for more time before your I-94 expires, step by step." },
  { slug: "tps-status-overstay", title: "TPS status and overstay", blurb: "How Temporary Protected Status changes the rules, and what to do when it ends." },
  { slug: "appeal-reentry-ban", title: "Appealing a re-entry ban", blurb: "Waivers through family sponsorship or extreme hardship." },
  { slug: "travel-with-reentry-ban", title: "Travel with a re-entry ban", blurb: "Where you can go, work and live while a ban is in effect." },
  { slug: "airport-immigration-check", title: "Airport immigration check", blurb: "What to expect at the border and what CBP may ask about your history." },
  { slug: "uscis-overstay-records", title: "USCIS overstay records", blurb: "How to check what the government has on file about your stay." },
  { slug: "denied-entry-rights", title: "Denied entry at the border", blurb: "Your rights when CBP refuses you entry, and what to do next." },
]

site.explore = guides.slice(0, 6).map((g) => ({ label: g.title, href: `/${g.slug}` }))

export const siteLinks = [
  { label: "Calculator", href: "/" },
  { label: "Guides", href: "/#guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]
