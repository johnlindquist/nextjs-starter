import React from "react";
import NextHead from "next/head";
import NextSeo from "next-seo";
import { Favicons } from "./Favicons";
import SEO from "@Util/seo.config";
import { Component, PropTypes } from "../framework";

export class Head extends Component {
  constructor(props) {
    super(props);

    // title template
    SEO.templateTitle = "%s | WEBSITE.COM";

    // title for pages
    SEO.title = "WEBSTIE_TITLE";
    SEO.openGraph.url = "https://website.com";
    SEO.openGraph.title = SEO.title;
    SEO.noindex = this.props.noindex;
    // todo add the rest of tags etc..
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
    noindex: PropTypes.bool
  };

  render() {
    return (
      <>
        <NextHead>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <Favicons />
        </NextHead>
        <NextSeo config={{ ...SEO }} />
      </>
    );

  }
}

