// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { Body } from "@Components/html/Body";

export default class MyDocument extends Document {
  static async getInitialProps(context) {

    const props = await super.getInitialProps(context);

    const { req: { appConfig } } = context;

    return {
      ...props,
      gaId: appConfig && appConfig.gaId ? appConfig.gaId : ""
    };
  }

  // Function will be called below to inject
  // script contents onto page
  getGoogleTags = (id) => {
    if (!id) {
      return ["", { __html: "" }];
    } else {
      return [
        `https://www.googletagmanager.com/gtag/js?id=${id}`,
        {
          __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${id}');`
        }
      ];

    }
  };
  locale = "en";

  render() {

    return (
      <html lang={this.locale}>
      <Head />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
      <script async src={this.getGoogleTags(`${this.props.gaId}`)[0]} />
      <script dangerouslySetInnerHTML={this.getGoogleTags(`${this.props.gaId}`)[1]} />
      <Body>
      <Main />
      <NextScript />
      </Body>
      </html>
    );
  }

}
