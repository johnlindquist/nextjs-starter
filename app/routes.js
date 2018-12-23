const nextRoutes = require('next-routes');

const routesAll = [
  { name: 'home', pattern: '/', page: 'home' },

  { name: 'login', pattern: '/login', page: 'passport/auth-local-login' },
  { name: 'signup', pattern: '/signup', page: 'passport/auth-local-signup' },
  { name: 'forgot-password', pattern: '/forgot-password', page: 'passport/auth-forgot-password' },
  { name: 'reset-password', pattern: '/reset-password', page: 'passport/auth-reset-password' },

  { name: 'auth-github-callback', pattern: '/auth/github/callback', page: 'passport/auth-github-callback' },
  { name: 'auth-twitter-callback', pattern: '/auth/twitter/callback', page: 'passport/auth-twitter-callback' },
  { name: 'auth-google-callback', pattern: '/auth/google/callback', page: 'passport/auth-google-callback' },
  // { name: 'auth-facebook-callback', pattern: '/auth/facebook/callback', page: 'passport/auth-facebook-callback' }, todo
  // { name: 'auth-linkedin-callback', pattern: '/auth/linkedin/callback', page: 'passport/auth-linkedin-callback' }, todo

  { name: 'privacy-policy', pattern: '/privacy-policy', page: 'company/privacy-policy' },
  { name: 'terms-of-service', pattern: '/terms-of-service', page: 'company/terms-of-service' },
  { name: 'contact-us', pattern: '/contact-us', page: 'company/contact-us' },
  { name: 'about-us', pattern: '/about-us', page: 'company/about-us' },
  { name: 'faq', pattern: '/faq', page: 'company/faq' },

  { name: 'directory', pattern: '/directory', page: 'community/directory' },
  { name: 'jobs', pattern: '/jobs', page: 'community/jobs' },
  { name: 'events', pattern: '/events', page: 'community/events' },
  { name: 'blog', pattern: '/blog', page: 'community/blog' },
  { name: 'sponsors', pattern: '/sponsors', page: 'community/sponsors' },
  { name: 'newsletter-subscribe', pattern: '/subscribe-to-our-newsletter', page: 'community/newsletter-subscribe' },
  { name: 'meetup-page', pattern: '/meetup-:slug', page: 'community/meetup-page' },
  { name: 'newsletter-page', pattern: '/newsletter-:slug', page: 'community/newsletter-page' },

  { name: 'article', pattern: '/article/:slug', page: 'article/index' },

  // todo change names?
  { name: 'user-account-about', pattern: '/@:slug/about', page: 'user-account/about' },
  { name: 'user-account-resume', pattern: '/@:slug/resume', page: 'user-account/resume' },
  { name: 'user-account-contact', pattern: '/@:slug/contact', page: 'user-account/contact' },
  { name: 'user-account-projects', pattern: '/@:slug/projects', page: 'user-account/project' },
  { name: 'user-account-articles', pattern: '/@:slug/articles', page: 'user-account/article' },
  { name: 'user-account-settings', pattern: '/user/settings', page: 'user-account/settings' },
  { name: 'user-account-panel', pattern: '/user/account', page: 'user-account/user-panel' },
  { name: 'user-public-page', pattern: '/@:username', page: 'user-account/public-page' },

  { name: 'page', pattern: '/page/:slug', page: 'dynamic/index' },
];

const router = nextRoutes();
// add language from client side window
if (typeof window !== 'undefined') {
  const lang = '';
  routesAll.map(r => {
    r.pattern = `${ lang }${ r.pattern }`;
    // r.page += '/index';
    router.add(r);
  });
} else {
  // add language from server side cookie
  const lang = '';
  routesAll.map(r => {
    r.pattern = `${ lang }${ r.pattern }`;
    // r.page += ;
    router.add(r);
  });
}

export const getRequestHandler = (nextApp) => router.getRequestHandler(nextApp);
export { router };
