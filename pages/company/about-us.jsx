import React from 'react';

import { Component } from '@Components/framework';
import { Page } from '@Lib/layout/Page';
import { Section } from '@Lib/layout/Section';

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Page layout={ 'OneColumn' }>
          <Section slot="content">
            <div className=''>
              About US
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
