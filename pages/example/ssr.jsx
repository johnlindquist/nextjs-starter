import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";

export default class Ssr extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className="bg-white shadow p-8">
                <h2 className='text-center text-xl mb-3 uppercase font-thin'>Server side rendering test</h2>
              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
