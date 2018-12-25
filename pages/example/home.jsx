import React from 'react';

import { Component } from '@Components/framework';
import { Page, Section } from 'react-layout-slot';
import { RowHero } from '@Screens/home/row-hero';
import { RowTwo } from '@Screens/home/row-two';
import { RowThree } from '@Screens/home/row-three';
import { RowFour } from '../../src/Screens/home/row-four';

class Home extends Component {
  render() {
    return (
      <>
        <Page layout={ 'OneColumn' }>
          <Section slot="content">
            <RowHero/>
            <RowTwo/>
            <RowThree/>
            <RowFour/>
          </Section>
        </Page>
      </>
    );
  }
}

export default Home;
