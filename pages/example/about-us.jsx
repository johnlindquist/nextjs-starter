import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
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
