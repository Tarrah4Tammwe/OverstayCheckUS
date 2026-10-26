import type { Metadata } from 'next'
import { Callout } from '@/components/callout'
import { PageShell } from '@/components/page-shell'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to reach OverstayCheck about corrections or feedback, and where to find real immigration legal help.',
  alternates: { canonical: `${site.domain}/contact` },
}

export default function ContactPage() {
  return (
    <PageShell title="Contact" lede="Corrections and feedback are welcome. For legal help with your own case, use the resources below.">
      <h2>Corrections and feedback</h2>
      {site.contactEmail ? (
        <p>
          Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We read every message about errors or
          unclear wording, and fix what is wrong.
        </p>
      ) : (
        <p>
          We are an independent project and read feedback about errors or unclear wording. We cannot respond to
          questions about individual cases.
        </p>
      )}
      <Callout tone="info" title="We cannot give legal advice">
        OverstayCheck is not a law firm. Please do not send documents or personal details about your case.
      </Callout>

      <h2>Get real legal help</h2>
      <ul>
        <li>
          <a href="https://www.ailalawyer.com/" target="_blank" rel="noopener noreferrer">AILA: Find an immigration lawyer</a>
          . The American Immigration Lawyers Association directory.
        </li>
        <li>
          <a href="https://www.lawhelp.org/" target="_blank" rel="noopener noreferrer">LawHelp.org</a>. Free and low-cost
          legal services by state.
        </li>
        <li>
          <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">USCIS</a>. Official forms and
          government guidance.
        </li>
      </ul>
      <p>
        Beware of &ldquo;notarios&rdquo; and unlicensed consultants. Only licensed attorneys and DOJ-accredited
        representatives can give immigration legal advice in the US.
      </p>
    </PageShell>
  )
}
