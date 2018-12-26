import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";

class Home extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
          </Section>
        </Page>
      </>
    );
  }
}

export default Home;
