const nextRoutes = require("next-routes");

const routesAll = [
  // routes for the started example
  // todo replace in production
  { name: "home", pattern: "/", page: "example/home" },
  { name: "contact-us", pattern: "/example/contact-us", page: "example/contact-us" },
  { name: "about-us", pattern: "/example/about-us", page: "example/about-us" },
  { name: "ssr", pattern: "/example/ssr", page: "example/ssr" },
  { name: "no-ssr", pattern: "/example/no-ssr", page: "example/no-ssr" },
  { name: "github-md", pattern: "/example/github-md", page: "example/github-md" }
];

const router = nextRoutes();
routesAll.map(r => {
  r.pattern = `${r.pattern}`;
  router.add(r);
});

export const getRequestHandler = (nextApp) => router.getRequestHandler(nextApp);
export { router };
