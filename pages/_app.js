import NextApp, { Container } from 'next/app';
import React, { Fragment } from 'react';

import '@styles/default.scss';
import './global.scss';
import { OneColumnLayout } from '@Layout/one-column-layout';
import { storeLastPageUrl } from '@Util/url';
import { Provider as MobxProvider } from 'mobx-react';
import { withMobxStore } from '@Lib/with-mobx.store';
import { trackPageView } from '@Util/ga';
import { router } from '@app/routes';
import { Head } from '@Components/html/Head';
import { Provider as LayoutProvider } from '@Lib/layout/Provider';

const layouts = {
  OneColumn: OneColumnLayout,
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
    const { appConfig, appUser, ssDate } = req || window.__NEXT_DATA__.props;

    return { pageProps, appConfig, appUser, ssDate };
  }

  // GA page view
  async componentDidMount() {
    // fire GA
    router.Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  render() {
    const { Component, pageProps, mobxStore } = this.props;

    return (
      <Container>
        <MobxProvider store={ mobxStore }>
          <LayoutProvider layouts={ layouts }>
            <Fragment>
              <Head/>
              <Component { ...pageProps } />
            </Fragment>
          </LayoutProvider>
        </MobxProvider>
      </Container>
    );
  }
}

export default withMobxStore(App);
