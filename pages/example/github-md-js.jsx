import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { ReadmeRenderRemoteJs } from "@Screens/example/github-readme/readme-render-remote-js";

export default class GithubMdJs extends Component {
  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className="bg-white shadow p-8">
                <h2 className='text-center text-xl mb-3 uppercase font-thin'>Github Markdown Viewer</h2>
                <ReadmeRenderRemoteJs key={Math.random()} />
              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
