import React from 'react';

import { Component } from '@Components/framework';
import { Page } from '@Lib/layout/Page';
import { Section } from '@Lib/layout/Section';

class Home extends Component {
  static async getInitialProps({ pathname, req }) {
    const { appConfig } = req || window.__NEXT_DATA__.props;

    return { appConfig, pathname };
  }

  render() {
    return (
      <>
        <Page layout={ 'OneColumn' }>
          <Section slot="content">
            <div className=''>
              Welcome
            </div>
          </Section>
        </Page>
      </>
    );
  }
}

export default Home;
