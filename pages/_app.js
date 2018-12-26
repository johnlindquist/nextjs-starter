import NextApp, { Container } from "next/app";
import React, { Fragment } from "react";

import "@styles/default.scss";
import "./global.scss";
import { OneColumnLayout } from "@Layout/one-column-layout";
import { storeLastPageUrl } from "@Util/url";
import { trackPageView } from "@Util/ga";
import { router } from "@app/routes";
import { Head } from "@Components/html/Head";
import { Provider as LayoutProvider } from "reactjs-layout-slot";

const layouts = {
  OneColumn: OneColumnLayout
};

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    // store last visited to no track google analytics twice.
    storeLastPageUrl();

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { req } = ctx;
    const { appConfig, appUser } = req || window.__NEXT_DATA__.props;

    return { pageProps, appConfig, appUser };
  }

  // GA page view
  async componentDidMount() {
    // fire GA
    router.Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <LayoutProvider layouts={layouts}>
          <Fragment>
            <Head />
            <Component {...pageProps} />
          </Fragment>
        </LayoutProvider>
      </Container>
    );
  }
}

export default App;
