import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { RowHero } from "@Screens/example/home/row-hero";
import { RowTwo } from "@Screens/example/home/row-two";
import { RowThree } from "@Screens/example/home/row-three";
import { RowFour } from "@Screens/example/home/row-four";
import { DemoLinks } from "@Components/example/about/demo-links";

class Home extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <RowHero />
            <DemoLinks />
            <RowTwo />
            <RowThree />
            <RowFour />
          </Section>
        </Page>
      </>
    );
  }
}

export default Home;
