import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { RowHero } from "@Screens/example/home/row-hero";
import { RowTwo } from "@Screens/example/home/row-two";
import { RowThree } from "@Screens/example/home/row-three";
import { RowFour } from "@Screens/example/home/row-four";
import { Link } from "../../src/Components/link";

class Home extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <RowHero />
            <div className="bg-white shadow p-8">
              <h3 className='text-center text-3xl mb-2 font-thin'>Example Demo links</h3>
              <div className='spd-xy-15 flex-wrap flex justify-center'>
                <Link route={"github-md-js"} className='btn btn-sm btn-blue font-bold'>
                  Github Markdown viewer ( remote js )
                </Link>
                <Link route={"github-md-npm"} className='btn btn-sm btn-blue font-bold'>
                  Github Markdown viewer ( npm )
                </Link>
                <Link route={"github-md-ssr"} className='btn btn-sm btn-blue font-bold'>
                  Github Markdown viewer ( ssr )
                </Link>
              </div>
            </div>
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
