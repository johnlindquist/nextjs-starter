import React from "react";

import { Component } from "@Components/framework";
import { Page, Section } from "reactjs-layout-slot";
import { ReadmeRenderSsr } from "@Screens/example/github-readme/readme-render-ssr";
import { httpGet } from "@Util/http";
import showdown from "showdown";
import { isBrowser } from "@Util/cmn";
import { inject, observer } from "mobx-react";
import { getQueryByName } from "@Util/query-param";

@inject("store") @observer
export default class GithubMdSsr extends Component {

  static async getInitialProps({ req }) {

    let markdownBody = "";
    let githubLink = "";

    // ssr
    if (!isBrowser) {
      githubLink = req.query["githubLink"] || "";

      const markdownRes = await httpGet({ url: githubLink });
      if (githubLink) {
        markdownBody = GithubMdSsr.converter.makeHtml(markdownRes.json.text);
      }
    }

    return { githubLink, markdownBody };
  }

  store = this.props.store;
  static converter = new showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });

  constructor(props) {
    super(props);
    this.store.githubLink = this.props.githubLink;
    this.store.markdownBody = this.props.markdownBody;
  }

  componentWillReceiveProps = async (props) => {
    const githubLink = getQueryByName("githubLink") || "";
    let markdownBody = "";
    if (githubLink) {
      const markdownRes = await httpGet({ url: githubLink });
      markdownBody = GithubMdSsr.converter.makeHtml(markdownRes.json.text);
    }
    this.store.githubLink = githubLink;
    this.store.markdownBody = markdownBody;
  };

  render() {
    return (
      <>
        <Page layout={"OneColumn"}>
          <Section slot="content">
            <ReadmeRenderSsr key={this.store.githubLink} />
          </Section>
        </Page>
      </>
    );
  }
}
