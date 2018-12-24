const nextRoutes = require('next-routes');

const routesAll = [
  { name: 'home', pattern: '/', page: 'home/index' },
  { name: 'contact-us', pattern: '/contact-us', page: 'company/contact-us' },
  { name: 'about-us', pattern: '/about-us', page: 'company/about-us' },

  { name: 'page', pattern: '/page/:slug', page: 'dynamic/index' },
];

const router = nextRoutes();
routesAll.map(r => {
  r.pattern = `${ r.pattern }`;
  // r.page += ;
  router.add(r);
});

export const getRequestHandler = (nextApp) => router.getRequestHandler(nextApp);
export { router };
