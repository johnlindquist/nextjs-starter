import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { ReadmeRenderSsr } from "@Screens/example/github-readme/readme-render-ssr";
import { httpGet } from "@Util/http";
import showdown from "showdown";
import { getWindowPathname, goToUrl } from "@Util/url";
import { isBrowser } from "@Util/cmn";
import { getQueryByName } from "@Util/query-param";

export default class GithubMdSsr extends Component {

  static converter = new showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });
  state = { markdownBody: this.props.markdownBody, githubLink: this.props.githubLink };

  // ES6 destruct nested object
  static async getInitialProps({ req: { query: { githubLink } } = { query: {} } }) {
    if (isBrowser) {
      return { githubLink: "", markdownBody: "" };
    }
    // server side rendering
    let markdownBody = "";
    if (githubLink) {
      const { json: { text } } = await httpGet({ url: githubLink });
      markdownBody = GithubMdSsr.converter.makeHtml(text);
    }
    return { githubLink, markdownBody };
  }

  componentDidUpdate = async (prevProps, prevState) => {
    // if component updates coming from input changes do nothing
    if (this.state.fromChangeHandle === true) {
      return;
    }
    // get githubLink from url query
    const githubLink = getQueryByName("githubLink");
    // if state if different from url or submit button clicked
    if (githubLink !== prevState.githubLink || this.state.doUpdate === true) {
      let markdownBody = "";
      if (githubLink) {
        const { json: { text } } = await httpGet({ url: githubLink });
        markdownBody = GithubMdSsr.converter.makeHtml(text);
      }
      this.setState({ githubLink, markdownBody, doUpdate: false });
    }
  };

  // ES6
  handleChange = event => {
    const { id: stateKey, value: stateVal } = event.target;
    this.setState({ [stateKey]: stateVal, fromChangeHandle: true });
  };

  handleSubmit = async () => {
    event.preventDefault();
    this.setState({ doUpdate: true, fromChangeHandle: false });
    goToUrl({ path: getWindowPathname(), queryParams: { githubLink: this.state.githubLink }, opt: { shallow: false } });
  };

  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <div className='w-full max-w-2xl mx-auto'>
              <div className="bg-white shadow p-8">
                <h2 className='text-center text-xl mb-3 uppercase font-thin'>Github Markdown Viewer</h2>
                <div className='w-full mx-auto'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='mb-4'>
                      <label className='uppercase block mb-1' htmlFor="email">
                        Github readme url
                      </label>
                      <input className='form-input w-4/5 inline-block' placeholder={"meabed/logstash-testing-e2e/master/README.md"} type="text" id="githubLink" onChange={this.handleChange} required={true} value={this.state.githubLink} />
                      <button className="btn btn-blue font-bold w-1/5 inline-block" type="submit">Display</button>
                    </div>
                  </form>
                </div>
                <ReadmeRenderSsr key={Math.random()} markdownBody={this.state.markdownBody} />
              </div>
            </div>
          </Section>
        </Page>
      </>
    );
  }
}
