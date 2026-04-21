import Link from "next/link";

import { pageSeo } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata = pageSeo({
  title: "Privacy Policy",
  description:
    "How The Sustainability Nexus Ltd collects, uses, and protects your personal data.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and safeguard your information."
      />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Information We Collect
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              The Sustainability Nexus Ltd (&ldquo;SusNex,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              may collect personal information that you voluntarily provide when
              you contact us, subscribe to our newsletter, register for events,
              or use forms on www.susnex.com—such as your name, email address,
              organization, and message content. We also receive certain
              automatic data when you browse our website, including IP address,
              browser type, device information, and pages visited, which helps us
              understand how our site is used and improve performance.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              How We Use Your Information
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              We use the information we collect to deliver and improve our
              sustainability, ESG, and environmental management services; to
              respond to inquiries and communicate with you about your requests;
              and to analyze usage patterns so we can enhance our website,
              content, and user experience. We do not sell your personal data.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Data Storage &amp; Security
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Personal data may be stored in secure systems, including databases
              such as PostgreSQL where applicable. We implement appropriate
              technical and organizational measures, including encryption where
              suitable and strict access controls, to protect your information
              against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">
              Third-Party Services
            </h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Our website may use third-party services that process data on our
              behalf, including Google Analytics for aggregated traffic insights,
              Google reCAPTCHA to reduce spam and abuse, and Brevo (or similar
              providers) for newsletter and email communications. These
              providers are bound by their own privacy policies and contractual
              obligations. We encourage you to review their policies for details
              on how they handle data.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Your Rights</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Depending on applicable law, you may have the right to access the
              personal data we hold about you, request correction of inaccurate
              data, request deletion where legally permitted, and request data
              portability in a structured format. To exercise these rights,
              please contact us at{" "}
              <Link
                href="mailto:ask@susnex.com"
                className="text-[var(--color-green)] hover:underline"
              >
                ask@susnex.com
              </Link>
              .
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Data Retention</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              Form submissions and related correspondence are generally retained
              for up to three (3) years unless a longer period is required for
              legal, contractual, or legitimate business purposes. Newsletter
              subscription data is kept until you unsubscribe or we discontinue
              the service, after which we delete or anonymize it in line with
              our retention practices.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold">Contact Us</h2>
            <p className="mt-3 leading-relaxed text-text-secondary">
              The Sustainability Nexus Ltd is headquartered at 4th
              Floor, Bank Asia Building, 30 Sonargaon Janapath Ave, Sector 11,
              Uttara, Dhaka 1230, Bangladesh. For privacy-related questions,
              email{" "}
              <Link
                href="mailto:ask@susnex.com"
                className="text-[var(--color-green)] hover:underline"
              >
                ask@susnex.com
              </Link>{" "}
              or visit www.susnex.com.
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
