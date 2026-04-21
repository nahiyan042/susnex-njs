"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/services/esg-reporting", label: "ESG & Sustainability Reporting" },
  { href: "/services/energy-carbon", label: "Energy & Carbon Management" },
  { href: "/services/chemical-wastewater", label: "Chemical & Wastewater Management" },
  { href: "/services/material-smart", label: "Sustainable Materials & Circularity" },
  { href: "/services/gender-smart", label: "Gender Equality & Social Inclusion (GESI)" },
  { href: "/services/engineering-assessment", label: "Structural Engineering Assessment" },
  { href: "/services/speak-for-change", label: "amfori Speak for Change" },
  { href: "/services/dpp-espr", label: "DPP & ESPR Readiness" },
];

const academyLinks = [
  { href: "/academy/gri-certified-training", label: "GRI Certified Training" },
  { href: "/academy/sustainability-reporting-gri-masterclass", label: "GRI Masterclass (9-Day)" },
  { href: "/academy/rmg-textile-training", label: "RMG & Textile Sustainability" },
  { href: "/academy/etp-training", label: "ETP Operation & Performance" },
  { href: "/academy/energy-audit-essentials", label: "Energy Audit Essentials" },
  { href: "/academy/slcp-supplier-readiness", label: "SLCP Supplier Readiness" },
  { href: "/academy/gesi-practice", label: "GESI in Practice" },
  { href: "/academy/grievance-mechanism-bd-labour-law", label: "Grievance Mechanism (BD Labour Law)" },
  { href: "/academy/iso-ims-9001-14001-45001", label: "ISO IMS 9001, 14001 & 45001" },
  { href: "/academy/sedex-smeta-readiness", label: "SEDEX/SMETA Readiness" },
  { href: "/academy/bsci-implementation", label: "BSCI Implementation" },
  { href: "/academy/higg-fem-4", label: "Higg FEM 4.0" },
  { href: "/academy/step-oekotex", label: "STeP by OEKO-TEX" },
  { href: "/academy/ghg-reduction-sbti", label: "GHG Reduction (SBTi)" },
  { href: "/academy/sbti-practitioner", label: "SBTi Practitioner" },
  { href: "/academy/detailed-engineering-assessment", label: "Engineering Assessment" },
  { href: "/academy/sheba-lean-productivity", label: "Sheba Lean Productivity" },
  { href: "/academy", label: "View All Programs" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/services", label: "Services", children: serviceLinks },
  { href: "/academy", label: "Academy", children: academyLinks },
  { href: "/blog", label: "SusNex Updates" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/careers", label: "Career" },
  { href: "/contact", label: "Contacts" },
];

function DesktopDropdown({
  children,
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  children: { href: string; label: string }[];
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-1/2 z-50 mt-1 -translate-x-1/2 rounded-xl border border-border bg-bg-primary/95 p-2 shadow-xl backdrop-blur-xl"
          style={{ minWidth: children.length > 10 ? "480px" : "240px" }}
        >
          <div className={children.length > 10 ? "grid max-h-[70vh] grid-cols-2 gap-x-1 overflow-y-auto" : ""}>
            {children.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-secondary hover:text-[var(--color-green)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-bg-primary/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-28 max-w-[1400px] items-center justify-between px-6 lg:h-30">
          {/* Logo */}
          <motion.div
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="SusNex"
                width={104}
                height={104}
                className="h-[104px] w-[104px]"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={() => item.children && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition-colors",
                    isActive(item.href)
                      ? "text-[var(--color-green)]"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute right-3 bottom-0 left-3 h-0.5 rounded-full bg-[var(--color-green)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
                {item.children && (
                  <DesktopDropdown
                    open={openDropdown === item.label}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children}
                  </DesktopDropdown>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <ThemeToggle />
            <a
              href="https://outlook.office.com/bookwithme/user/f31275c2625b48398f3a12669261c514@susnex.com?anonymous&ep=plink"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-green)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
            >
              Schedule a Meeting
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 xl:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex w-6 flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-full rounded-full bg-text-primary transition-all duration-300",
                    mobileOpen && "translate-y-2 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full rounded-full bg-text-primary transition-all duration-300",
                    mobileOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full rounded-full bg-text-primary transition-all duration-300",
                    mobileOpen && "-translate-y-2 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-bg-primary/98 pt-32 backdrop-blur-xl xl:hidden"
          >
            <nav className="flex flex-col items-center gap-1 px-6 pb-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="w-full max-w-sm"
                >
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpandedMobile(expandedMobile === item.label ? null : item.label)
                        }
                        className={cn(
                          "flex w-full items-center justify-center gap-2 px-6 py-3 text-center text-xl font-semibold transition-colors",
                          isActive(item.href)
                            ? "text-[var(--color-green)]"
                            : "text-text-primary hover:text-[var(--color-green)]"
                        )}
                      >
                        {item.label}
                        <svg
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expandedMobile === item.label && "rotate-180"
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expandedMobile === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col items-center gap-1 pb-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="px-6 py-2 text-base text-text-secondary transition-colors hover:text-[var(--color-green)]"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-6 py-3 text-center text-xl font-semibold transition-colors",
                        isActive(item.href)
                          ? "text-[var(--color-green)]"
                          : "text-text-primary hover:text-[var(--color-green)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ delay: navItems.length * 0.04, duration: 0.3 }}
                className="mt-6"
              >
                <a
                  href="https://outlook.office.com/bookwithme/user/f31275c2625b48398f3a12669261c514@susnex.com?anonymous&ep=plink"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-[var(--color-green)] px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-[var(--color-green-dark)]"
                >
                  Schedule a Meeting
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
