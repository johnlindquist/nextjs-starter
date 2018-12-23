
<img src="https://github.com/me-io/nextjs-starter/blob/master/banner.jpg" alt="Performance oriented Next.js application boilerplate with Mobx, Express.js and Sass." align="center" />

<br/>
<div align="center" >Performance oriented Next.js application boilerplate with Redux, Typescript, Express.js and Sass.</div>
<br/>

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/flexdinesh/react-redux-boilerplate">
    <img src="https://david-dm.org/me-io/nextjs-starter.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/me-io/nextjs-starter#info=devDependencies"> 
    <img src="https://david-dm.org/me-io/nextjs-starter/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/me-io/nextjs-starter">
    <img src="https://travis-ci.org/me-io/nextjs-starter.svg?branch=master" alt="Build Status" />
  </a>
</div>

<br/>
<div align="center">
  <sub>Created by <a href="https://www.me.io">me.io</a></sub>
</div>



## About


Next.js is a minimalistic React framework that runs in the browser and the server. It offers developers an easy way to get started, and as it uses React.js for templating it is also a straightforward way for developers with React experience to get productive fast.

The advantages of this approach is to be able to create Rich User experiences in a uniform way, without compromising Search Engine Optimisation (SEO) factors that are key to good ranking on Google and other search engines. 

This boilerplate make it easier to get started with a well-structured Next.js and Mobx application.

By the end of setup, you'll have a Next.js project and features which is specified at the below.

<br/>

## Features


This nextjs starter app includes the latest powerful tools.

* **Next.js** - Minimalistic framework for server-rendered React applications.
* **Express.js**- Handles server-side rendering and integrated with Express.js.
* **Tailwind css** - .
* **mobx** - State management.
* **PAW ~99% Lighthouse** - .
* **Dynamic routing - next-routes** - .
* **SEO - next-seo** - .
* **Image optimization - next-optimized-images** - .
* **Babel** - ES6 The compiler for next generation JavaScript.
* **Babel Plugins** - . 
* **Sass/Scss/Jsx/ fontawesome 5** - .
* **Favicon Generator** - .
* **Google Analytics** - .
* **dotenv .config** - Expose environment variables to the runtime config of Next.js
* **Webpack server bundle** - .
* **Postcss - Purgecss / Nanocss** - .
* **Jest test** - .
* **Enzyme test** - .
* **Eslint** - .
* **Docker production ready image build** - .
* **Heroku** - .
* **Now.sh** - .
* **Bundler Analyzer** - Visualize size of webpack output files with an interactive zoomable treemap.

The starter app will come in multiple flavors
* **Default** - branch master
* **With Redux** - branch redux-master
* **Mobx With JWT Auth / Passport JS** - branch master-jwt
* **Redux With JWT Auth / Passport JS** - branch redux-master-jwt
* **With themes** - branch master-theme
* **With i18n react-intl** - branch master-react-intl


<br/>

*Here are a few highlights to look out for in this boilerplate*

<dl>
  
  <dd>The boilerplate includes tsconfig.json which contains a list of your input files as well as all your compilation settings.<dd>

  >One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

 
  <dd>Includes babel-plugin-module-resolver <dd>

  >A Babel plugin to add a new resolver for your modules when compiling your code using Babel. This plugin allows you to add new "root" directories that contain your modules. It also allows you to setup a custom alias for directories, specific files, or even other npm modules.

  
  <dd>Includes next-runtime-dotenv <dd>

  >Normally, .env isn’t available in the browsers (only Node.js), but our boilerplate uses npm package for make it available.

</dl>

<br/>

## Getting Started


1. Clone the repository and install the dependencies:

```
git clone https://github.com/me-io/nextjs-starter.git
```


2. To create a new app, go to the choosen app directory on the CLI then run one of the following methods:

**npm**

```sh
npm install
```
**yarn**

```sh
yarn install
```

3. Once the installation is done, you can run the following command:

 ```
 npm run start:dev
 ```
 <br/>

Then open http://localhost:3000/ to see your app.

<br/>

 ***At this point, your project layout should look like this:***
 
 <br/>

```
.
├── app
│  ├── proxy.js
│  ├── routes.js
│  └── server.js
├── next.config.js
├── pages
│  ├── _app.tsx
│  ├── _document.tsx
│  ├── home
│  │  ├── index.scss
│  │  └── index.tsx
│  └── index.ts
├── src
│  ├── Actions
│  │  ├── HomeActions.ts
│  │  └── index.ts
│  ├── Components
│  │  ├── Heading
│  │  │  ├── index.tsx
│  │  │  └── style.scss
│  │  └── index.ts
│  ├── Definations
│  │  ├── ActionConsts.ts
│  │  └── index.ts
│  ├── Interfaces
│  │  ├── Components
│  │  │  └── Heading.d.ts
│  │  ├── index.ts
│  │  └── Pages
│  │     ├── App.d.ts
│  │     └── Home.d.ts
│  └── Redux
│     ├── Reducers
│     │  ├── home.ts
│     │  └── index.ts
│     └── store.ts
├── tsconfig.json
└── tslint.json

```

## Contribution

- Report issues
- Open pull request with improvements
- Spread the word
- Reach out with any feedback [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/meabed.svg?style=social&label=Follow%20%40meabed)](https://twitter.com/meabed)

## License

<img src="https://img.shields.io/badge/license-GNU-brightgreen.svg?style=flat-square" alt="MIT">
