import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "GDPR Compliance",
  description:
    "How SusNex protects your data rights under the General Data Protection Regulation.",
  path: "/gdpr-compliance",
  noIndex: true,
});

export default function GdprCompliancePage() {
  return (
    <main>
      <PageHeader
        title="GDPR Compliance"
        description="Your rights and our responsibilities under the GDPR."
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Our Commitment
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              The Sustainability Nexus Ltd respects the privacy
              rights of individuals in the European Economic Area, the United
              Kingdom, and Switzerland. Where the General Data Protection
              Regulation (GDPR) applies, we process personal data in accordance
              with its principles of lawfulness, fairness, transparency, purpose
              limitation, data minimization, accuracy, storage limitation,
              integrity, and accountability.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Data We Process</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We may process personal data you provide through contact or inquiry
              forms on www.susnex.com; technical and usage data collected via
              analytics tools; and email addresses and preferences when you
              subscribe to our newsletter (e.g., through Brevo or similar
              services). The categories depend on how you interact with us.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Legal Basis</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We rely on appropriate legal bases under the GDPR, which may
              include: your{" "}
              <strong className="text-text-primary">consent</strong> (e.g.,
              marketing emails where required);{" "}
              <strong className="text-text-primary">legitimate interests</strong>{" "}
              (e.g., website security, analytics, and business development,
              balanced against your rights); and{" "}
              <strong className="text-text-primary">contractual necessity</strong>{" "}
              where processing is needed to perform a contract with you or take
              steps at your request before entering a contract.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Your Rights</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Where the GDPR applies, you may have the right to access your
              personal data; request rectification of inaccurate data; request
              erasure (&ldquo;right to be forgotten&rdquo;) in certain
              circumstances; request restriction of processing; receive a copy
              of your data in a portable format where applicable; and object to
              processing based on legitimate interests or for direct marketing.
              You may also lodge a complaint with a supervisory authority in
              your country.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Data Protection Officer
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              For GDPR-related inquiries, you may contact our designated point of
              contact at{" "}
              <Link
                href="mailto:ask@susnex.com"
                className="text-[var(--color-green)] hover:underline"
              >
                ask@susnex.com
              </Link>
              . We will respond within a reasonable timeframe and in line with
              applicable legal requirements.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              International Transfers
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              SusNex is headquartered in Bangladesh. If we transfer personal
              data from the EEA, UK, or Switzerland to countries not deemed
              adequate by relevant authorities, we implement appropriate
              safeguards such as standard contractual clauses or other mechanisms
              recognized under applicable law.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Data Breach Notification
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              In the event of a personal data breach that poses a risk to
              individuals&apos; rights and freedoms, we will assess the
              incident and, where required by the GDPR, notify the relevant
              supervisory authority and affected data subjects without undue
              delay.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Contact</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              The Sustainability Nexus Ltd, 4th Floor, Bank Asia
              Building, 30 Sonargaon Janapath Ave, Sector 11, Uttara, Dhaka 1230,
              Bangladesh. Email:{" "}
              <Link
                href="mailto:ask@susnex.com"
                className="text-[var(--color-green)] hover:underline"
              >
                ask@susnex.com
              </Link>
              . Website: www.susnex.com.
            </p>
          </section>
        </div>
        <p className="mt-12 text-sm text-text-secondary">
          Last updated: April 2026
        </p>
      </div>
    </main>
  );
}
