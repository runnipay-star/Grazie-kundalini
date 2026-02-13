
/**
 * Facebook Pixel Integration for Kundalini Ka
 */

export const initFacebookPixels = (pixelIds: string[]) => {
  if (typeof window === 'undefined') return;

  const win = window as any;

  if (!win.fbq) {
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
  }

  pixelIds.forEach(id => {
    win.fbq('init', id);
    console.log(`FB Pixel: Initialized ${id}`);
  });
  
  win.fbq('track', 'PageView');
};

export const trackLeadEvent = () => {
  const win = window as any;
  if (win.fbq) {
    win.fbq('track', 'Contact');
    console.log('FB Pixel: Contact event tracked on all initialized pixels');
  }
};
