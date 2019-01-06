import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { getWindowPathname, goToUrl } from "@Util/url";

@inject("store") @observer

export class ReadmeRenderSsr extends Component {
  store = this.props.store;
  state = { githubLink: this.store.githubLink };

  handleChange = (event) => {
    const stateKey = event.target.getAttribute("id");
    const val = event.target.value;
    const st = {};
    st[stateKey] = val;
    this.setState(st);
  };

  handleSubmit = async () => {
    event.preventDefault();
    this.store.githubLink = this.state.githubLink;
    goToUrl({ path: getWindowPathname(), queryParams: { githubLink: this.state.githubLink }, opt: { shallow: false } });
  };

  render() {
    return (
      <>
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
            <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.store.markdownBody }} />
          </div>
        </div>

      </>
    );
  }
}
