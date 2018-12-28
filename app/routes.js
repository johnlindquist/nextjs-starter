const nextRoutes = require("next-routes");

const routesAll = [
  // routes for the started example
  // todo replace in production
  { name: "home", pattern: "/", page: "example/home" },
  { name: "contact-us", pattern: "/example/contact-us", page: "example/contact-us" },
  { name: "about-us", pattern: "/example/about-us", page: "example/about-us" },
  { name: "ssr", pattern: "/example/ssr", page: "example/ssr" },
  { name: "no-ssr", pattern: "/example/no-ssr", page: "example/no-ssr" },
  { name: "github-md-js", pattern: "/example/github-md-js", page: "example/github-md-js" },
  { name: "github-md-no-ssr", pattern: "/example/github-md-no-ssr", page: "example/github-md-no-ssr" },
  { name: "github-md-ssr", pattern: "/example/github-md-ssr", page: "example/github-md-ssr" }
];

const router = nextRoutes();
routesAll.map(r => {
  r.pattern = `${r.pattern}`;
  router.add(r);
});

export const getRequestHandler = (nextApp) => router.getRequestHandler(nextApp);
export { router };
