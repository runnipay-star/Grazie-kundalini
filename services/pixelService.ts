
/**
 * Facebook Pixel Integration for Kundalini Ka
 * ID: 839154938743008
 */

export const initFacebookPixel = (pixelId: string) => {
  if (typeof window === 'undefined') return;

  // Use type assertion to window as any to allow access to non-standard properties like 'fbq'
  const win = window as any;

  if (win.fbq) return;

  // Cast the function assignment to any so that 'n' inherits the any type, 
  // allowing custom properties like 'loaded', 'version', and 'queue' to be added.
  const n = (win.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  }) as any;
  
  if (!win._fbq) win._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  
  const t = document.createElement('script');
  t.async = !0;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(t, s);

  win.fbq('init', pixelId);
  win.fbq('track', 'PageView');
};

export const trackLeadEvent = () => {
  const win = window as any;
  if (win.fbq) {
    win.fbq('track', 'Contact');
    console.log('FB Pixel: Contact event tracked');
  }
};
