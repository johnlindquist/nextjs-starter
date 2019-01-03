import React, { Component } from "react";
import { PropTypes } from "@Components/framework";

export class ReadmeRenderSsr extends Component {

  static propTypes = {
    markdownBody: PropTypes.string
  };

  render() {
    return (
      <>
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.props.markdownBody }} />
      </>
    );
  }
}
