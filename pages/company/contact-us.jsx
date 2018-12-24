import React from 'react';

import { Component } from '@Components/framework';
import { Page } from '@Lib/layout/Page';
import { Section } from '@Lib/layout/Section';

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Page layout={ 'OneColumn' }>
          <Section slot="content">
            <div className=''>
              Contact US
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
