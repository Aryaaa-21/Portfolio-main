// Google Analytics 4.
// Set VITE_GA_MEASUREMENT_ID (looks like "G-XXXXXXXXXX") in the environment to switch it on.
// Without it, nothing is loaded and every call below is a no-op.
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let started = false;

export function initAnalytics() {
  if (started || !MEASUREMENT_ID || typeof window === 'undefined') return;
  started = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // Page views are sent by hand on each route change (the site uses hash routes,
  // which GA would otherwise see as a single page).
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });
}

export function trackPageView(path) {
  if (!started) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name, params = {}) {
  if (!started) return;
  window.gtag('event', name, params);
}
