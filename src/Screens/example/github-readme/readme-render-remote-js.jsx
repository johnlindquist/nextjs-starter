import React, { Component } from "react";

import { echo } from "@Util/echo";
import { httpGet } from "@Util/http";

export class ReadmeRenderRemoteJs extends Component {
  handleSubmit = async () => {
    event.preventDefault();
  };

  state = { markdownBody: "" };
  convertor = null;

  handleChange = (event) => {
    const stateKey = event.target.getAttribute("id");
    const val = event.target.value;
    const st = {};
    st[stateKey] = val;
    this.setState(st);
  };


  componentDidMount = async () => {
    // no-ssr
    this.requireJs(this.getShowdownScriptSrc(), () => {
      echo("Loaded");
      this.convertor = new window.showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });
      this.convertHtml();
    });
  };

  requireJs = (url, callback) => {
    let e = document.createElement("script");
    e.src = url;
    e.type = "text/javascript";
    e.addEventListener("load", callback);
    document.getElementsByTagName("head")[0].appendChild(e);
  };

  convertHtml = async () => {
    const rs = await httpGet({ url: "https://raw.githubusercontent.com/meabed/logstash-testing-e2e/master/README.md" });

    const markDownBody = this.convertor.makeHtml(rs.json.text);
    this.setState({ markdownBody: markDownBody });
  };

  /**
   * SSR render example
   *
   * @link https://raw.githubusercontent.com/meabed/logstash-testing-e2e/master/README.md
   * @return {string}
   */
  getShowdownScriptSrc = () => "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js";

  render() {
    return (
      <>
        <div className='w-full mx-auto md:w-3/5'>
          <form onSubmit={this.handleSubmit}>
            <div className='mb-4'>
              <label className='uppercase block mb-1' htmlFor="email">
                Github readme url
              </label>
              <input className='form-input w-4/5 inline-block' placeholder={"meabed/logstash-testing-e2e/master/README.md"} type="text" id="github_link" onChange={this.handleChange} required={true} />
              <button className="btn btn-blue font-bold w-1/5 inline-block" type="submit">Display</button>
            </div>
          </form>
        </div>
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.markdownBody }} />
      </>
    );
  }
}
