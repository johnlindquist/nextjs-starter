import React from 'react';

import { Component } from '@Components/framework';
import { Page } from 'react-layout-slot';
import { Section } from 'react-layout-slot';

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
