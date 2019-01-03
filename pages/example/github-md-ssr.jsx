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

  static async getInitialProps({ req }) {

    let markdownBody = "";
    let github_link = "";

    // ssr
    if (!isBrowser) {
      github_link = req.query["github_link"] || "";

      const markdownRes = await httpGet({ url: github_link });
      if (github_link) {
        markdownBody = GithubMdSsr.converter.makeHtml(markdownRes.json.text);
      }
    }

    return { github_link: github_link, markdownBody };
  }

  static converter = new showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });

  state = { markdownBody: this.props.markdownBody, github_link: this.props.github_link };

  componentWillReceiveProps = async (props) => {
    const github_link = getQueryByName("github_link") || "";
    let markdownBody = "";
    if (github_link) {
      const markdownRes = await httpGet({ url: github_link });
      markdownBody = GithubMdSsr.converter.makeHtml(markdownRes.json.text);
    }
    this.setState({ github_link: github_link, markdownBody: markdownBody });

  };

  handleChange = (event) => {
    const stateKey = event.target.getAttribute("id");
    const val = event.target.value;
    const st = {};
    st[stateKey] = val;
    this.setState(st);
  };

  handleSubmit = async () => {
    event.preventDefault();
    goToUrl({ path: getWindowPathname(), queryParams: { github_link: this.state.github_link }, opt: { shallow: false } });
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
                      <input className='form-input w-4/5 inline-block' placeholder={"meabed/logstash-testing-e2e/master/README.md"} type="text" id="github_link" onChange={this.handleChange} required={true} value={this.state.github_link} />
                      <button className="btn btn-blue font-bold w-1/5 inline-block" type="submit">Display</button>
                    </div>
                    {this.state.github_link}

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
