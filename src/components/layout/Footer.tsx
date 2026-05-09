import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const serviceLinks = [
  { href: "/services/esg-reporting", label: "ESG & Sustainability Reporting" },
  { href: "/services/energy-carbon", label: "Energy & Carbon Management" },
  { href: "/services/chemical-wastewater", label: "Chemical & Wastewater Management" },
  { href: "/services/material-smart", label: "Sustainable Materials & Circularity" },
  { href: "/services/gender-smart", label: "Gender Equality & Inclusion" },
  { href: "/services/engineering-assessment", label: "Structural Engineering Assessment" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/academy", label: "SusNex Academy" },
  { href: "/blog", label: "SusNex Updates" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Career" },
  { href: "/contact", label: "Contacts" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/gdpr-compliance", label: "GDPR Compliance" },
];

const offices = [
  {
    label: "Headquarter",
    address: "4th Floor, Bank Asia Building, 30 Sonargaon Janapath Ave, Sector 11, Uttara, Dhaka 1230, Bangladesh",
  },
  {
    label: "USA Office",
    address: "484 McDonald Ave. Brooklyn, NY 11218, USA",
  },
  {
    label: "UK Office",
    address: "Unit 3A, 34-35 Hatton Garden, Holborn, London EC1N 8DX, UK",
  },
  {
    label: "Canada Office",
    address: "2624 Danforth Ave, Toronto, ON M4C 1L7, Canada",
  },
];

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-[var(--color-green)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="neo-surface border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="SusNex"
                width={168}
                height={168}
                className="h-[168px] w-[168px]"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Your partner in Sustainability. Helping organizations navigate
              ESG, energy management, and social responsibility.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com/company/susnex"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/susnex.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:ask@susnex.com"
                className="neo-icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <a
                href="tel:+8801713478512"
                className="neo-icon-btn flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-[var(--color-green)] hover:text-[var(--color-green)]"
                aria-label="Call"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
            </div>
          </div>

          <FooterLinkColumn title="Services" links={serviceLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />

          {/* Offices */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
              Offices
            </h4>
            <div className="mt-4 space-y-4">
              {offices.map((office) => (
                <div key={office.label}>
                  <p className="text-sm font-medium text-text-primary">{office.label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter + Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
              Newsletter
            </h4>
            <p className="mt-2 mb-3 text-xs text-text-secondary">
              Get sustainability insights delivered to your inbox.
            </p>
            <NewsletterForm />

            <div className="mt-8">
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
                Legal
              </h4>
              <ul className="mt-3 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-text-secondary transition-colors hover:text-[var(--color-green)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="text-xs text-text-secondary">
            <p>&copy; {new Date().getFullYear()} The Sustainability Nexus Ltd. All rights reserved.</p>
            <p className="mt-1">Trade License No.: TRAD/DNCC/001845/2022</p>
          </div>
          <p className="text-xs text-text-secondary">
            The Sustainability Nexus Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
