import { echo } from './echo';

export const trackPageView = (url, gaId) => {
  let lastPageUrl = sessionStorage.getItem('last_page_url');
  if (lastPageUrl === url) {
    echo('no trackPageView as url has not changed');
    return;
  }
  echo(url);
  try {
    if (gaId) {
      echo('config', gaId);
      window.gtag('config', gaId, {
        page_location: url
      });
    } else {
      window.gtag('event', 'page_view', {
        page_location: url
      });
    }
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
};

