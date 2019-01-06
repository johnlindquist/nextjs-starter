import React, { Component } from "react";
import Error from "next/error";

export default class ErrorPage extends Component {
  static async getInitialProps() {
    return { statusCode: 404 };
  }

  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />;
    }

    return (
      <div>
        Error page
      </div>
    );
  }
}
