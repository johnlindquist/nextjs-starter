import React, { Component } from "react";

import { echo } from "@Util/echo";
import { httpGet } from "@Util/http";
import { getWindowPathname, goToUrl } from "@Util/url";
import { getQueryByName } from "@Util/query-param";

export class ReadmeRenderRemoteJs extends Component {
  handleSubmit = async () => {
    event.preventDefault();
    goToUrl({ path: getWindowPathname(), queryParams: { githubLink: this.state.githubLink }, opt: { shallow: true } });
  };

  state = { markdownBody: "", githubLink: getQueryByName("githubLink") || "" };
  converter = null;

  handleChange = (event) => {
    const stateKey = event.target.getAttribute("id");
    const val = event.target.value;
    const st = {};
    st[stateKey] = val;
    this.setState(st);
  };


  /***
   * @link https://raw.githubusercontent.com/meabed/logstash-testing-e2e/master/README.md
   * @return {string}
   */
  getShowdownScriptSrc = () => "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js";

  componentDidMount = async () => {
    // no-ssr
    this.requireJs(this.getShowdownScriptSrc(), () => {
      echo("Remote script loaded");
      this.converter = new window.showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });
      this.convertHtml();
    });
  };

  requireJs = (url, callback) => {
    if (typeof window.showdown !== "undefined") {
      echo("JS already loaded");
      callback();
      return;
    }

    let e = document.createElement("script");
    e.src = url;
    e.type = "text/javascript";
    e.addEventListener("load", callback);
    document.getElementsByTagName("head")[0].appendChild(e);
  };

  convertHtml = async () => {
    const url = this.state.githubLink;

    if (!url) {
      return;
    }

    const rs = await httpGet({ url: url });
    const markdownBody = this.converter.makeHtml(rs.json.text);
    this.setState({ markdownBody: markdownBody });
  };

  render() {
    return (
      <>
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
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.markdownBody }} />
      </>
    );
  }
}
