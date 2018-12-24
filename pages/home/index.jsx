import React from 'react';

import { Component } from '@Components/framework';
import { Page } from '@Lib/layout/Page';
import { Section } from '@Lib/layout/Section';

class Home extends Component {
  render() {
    return (
      <>
        <Page layout={ 'OneColumn' }>
          <Section slot="content">
            <div className=''>
              Welcome Home
            </div>
          </Section>
        </Page>
      </>
    );
  }
}

export default Home;
