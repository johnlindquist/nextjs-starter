import nextRoutes from "next-routes";

const routesCollection = [
  // routes for the started example
  // todo replace in production
  { name: "home", pattern: "/", page: "example/home" },
  { name: "contact-us", pattern: "/example/contact-us", page: "example/contact-us" },
  { name: "about-us", pattern: "/example/about-us", page: "example/about-us" },
  { name: "github-md-js", pattern: "/example/github-md-js", page: "example/github-md-js" },
  { name: "github-md-npm", pattern: "/example/github-md-npm", page: "example/github-md-npm" },
  { name: "github-md-ssr", pattern: "/example/github-md-ssr", page: "example/github-md-ssr" }
];

const router = nextRoutes();
routesCollection.map(r => {
  r.pattern = `${r.pattern}`;
  router.add(r);
});

export const getRequestHandler = (nextApp) => router.getRequestHandler(nextApp);
// named export ES6 enhanced object literal
export { router };
