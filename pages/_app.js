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
import { withMobxStore } from "@Lib/with-mobx.store";
import { Provider as MobxProvider } from "mobx-react";

const layouts = {
  OneColumn: OneColumnLayout
};

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { req } = ctx;
    const { appConfig, appData, appUser } = req || window.__NEXT_DATA__.props;

    return { pageProps, appData, appConfig, appUser };
  }

  componentDidMount = async () => {
    // initial rendering
    // store last visited to no track google analytics twice.
    storeLastPageUrl();
    router.Router.onRouteChangeComplete = url => {
      // on state or route change
      // fire GA
      // GA page view
      trackPageView(url);
      // store last visited to no track google analytics twice.
      storeLastPageUrl();
    };
  };


  render() {
    const { Component, pageProps, mobxStore } = this.props;

    return (
      <Container>
        <MobxProvider store={mobxStore}>
          <LayoutProvider layouts={layouts}>
            <Fragment>
              <Head />
              <Component {...pageProps} />
            </Fragment>
          </LayoutProvider>
        </MobxProvider>
      </Container>
    );
  }
}

export default withMobxStore(App);
