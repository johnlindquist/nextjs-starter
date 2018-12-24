import React from 'react';

import { Component } from '@Components/framework';
import { Page, Section } from 'reactjs-layout-slot';
import { RowHero } from '../../src/Screens/home/row-hero';

class Home extends Component {
  render() {
    return (
      <>
        <Page layout={ 'OneColumn' }>
          <Section slot="content">
            <RowHero/>

            <div className=''>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}

export default Home;
