import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { RowOne } from "@Screens/example/about/row-one";
import { RowTwo } from "@Screens/example/about/row-two";
import { Link } from "@Components/link";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className="bg-white shadow p-8">
                <RowOne />
              </div>
              <div className="bg-white shadow p-8">
                <div className='pt-16' />
                <RowTwo />
              </div>
              <div className="bg-white shadow p-8">
                <div className='pt-16' />
                <h3 className='text-center text-3xl mb-2 font-thin'>Useful link</h3>
                <div className='spd-xy-15 text-center'>
                  <Link route={"github-md"} className='btn btn-sm btn-blue font-bold'>
                    Github Markdown viewer
                  </Link>

                  <Link route={"ssr"} className='btn btn-sm btn-blue font-bold'>
                    Server side rendering
                  </Link>

                  <Link route={"no-ssr"} className='btn btn-sm btn-blue font-bold'>
                    Client side rendering
                  </Link>
                </div>

              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
