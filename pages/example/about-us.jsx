import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { RowOne } from "@Screens/example/about/row-one";
import { RowTwo } from "@Screens/example/about/row-two";
import { DemoLinks } from "@Components/example/about/demo-links";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className='pt-16' />
              <DemoLinks />
              <div className="bg-white shadow p-8">
                <RowOne />
              </div>
              <div className="bg-white shadow p-8">
                <div className='pt-16' />
                <RowTwo />
              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
