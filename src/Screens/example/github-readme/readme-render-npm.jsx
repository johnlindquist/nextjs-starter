import React, { Component } from "react";
import { httpGet } from "@Util/http";
import { getParameterByName, getWindowPathname, goToUrl } from "../../../Util/url";

export class ReadmeRenderNpm extends Component {
  handleSubmit = async () => {
    event.preventDefault();
    goToUrl({ path: getWindowPathname(), queryParams: { github_link: this.state.github_link }, opt: { shallow: true } });
  };

  state = { markdownBody: "", github_link: "" };
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
    const url = getParameterByName("github_link") || "";
    this.setState({ github_link: url });
    this.convertHtml();
  };

  convertHtml = async () => {
    // lazy loading trick
    import("showdown").then(async (showdown) => {
      this.convertor = new showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });

      const url = getParameterByName("github_link");
      if (!url) {
        return;
      }

      const rs = await httpGet({ url: url });
      const markDownBody = this.convertor.makeHtml(rs.json.text);
      this.setState({ markdownBody: markDownBody });
    });
  };

  render() {
    return (
      <>
        <div className='w-full mx-auto md:w-3/5'>
          <form onSubmit={this.handleSubmit}>
            <div className='mb-4'>
              <label className='uppercase block mb-1' htmlFor="email">
                Github readme url
              </label>
              <input className='form-input w-4/5 inline-block' placeholder={"meabed/logstash-testing-e2e/master/README.md"} type="text" id="github_link" onChange={this.handleChange} required={true} value={this.state.github_link} />
              <button className="btn btn-blue font-bold w-1/5 inline-block" type="submit">Display</button>
            </div>
          </form>
        </div>
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.markdownBody }} />
      </>
    );
  }
}
