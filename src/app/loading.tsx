import { LogoLoader } from "@/components/ui/LogoLoader";

/**
 * Root-level loading UI — automatically rendered as a React Suspense
 * fallback by Next.js while the page being navigated to is still
 * fetching/streaming. The branded LogoLoader gives the navigation a
 * polished feel even when prefetch hasn't completed (e.g. cold link
 * clicks, slow networks, large server-component data dependencies).
 *
 * Co-pilots cleanly with `<PageTransition>` in the root layout: the
 * loading screen shows during the route's Suspense window, then the
 * incoming page itself fades up via PageTransition once it's ready.
 */
export default function RootLoading() {
  return (
    <LogoLoader
      size={104}
      label="Loading…"
      fullScreen
    />
  );
}
