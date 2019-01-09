import React, { Component } from "react";
import { httpGet } from "@Util/http";
import { getWindowPathname, goToUrl } from "@Util/url";
import { getQueryByName } from "@Util/query-param";

export class ReadmeRenderNpm extends Component {
  state = { markdownBody: "", githubLink: getQueryByName("githubLink") || "" };
  converter = null;

  loadJs = async (callback) => {
    // lazy loading, webpack will bundle it separately
    import("showdown").then(callback);
  };

  loadJsCallback = async showdown => {
    const url = getQueryByName("githubLink");
    if (!url) {
      return;
    }
    this.converter = new showdown.Converter({ tasklists: true, simpleLineBreaks: true, ghMentions: true, openLinksInNewWindow: true, emoji: true });
    const { json: { text } } = await httpGet({ url });
    const markdownBody = this.converter.makeHtml(text);
    this.setState({ markdownBody });
  };

  componentDidMount = async () => {
    this.loadJs(this.loadJsCallback);
  };

  handleSubmit = async () => {
    event.preventDefault();
    goToUrl({ path: getWindowPathname(), queryParams: { githubLink: this.state.githubLink }, opt: { shallow: true } });
  };

  handleChange = event => {
    const { id: stateKey, value: stateVal } = event.target;
    this.setState({ [stateKey]: stateVal });
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
