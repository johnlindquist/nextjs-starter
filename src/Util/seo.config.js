const SEO = {
  title: 'WEBSTIE_TITLE',
  titleTemplate: `%s | WEBSITE.COM`,
  description: 'WEBSTIE_DESCRIPTION',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://website.com/',
    title: 'WEBSTIE_TITLE | WEBSITE.COM',
    description: 'WEBSTIE_DESCRIPTION',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: 'https://website.com/static/img/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'WEBSTIE_TITLE | WEBSITE.COM',
      },
      {
        url: 'https://website.com/static/img/og-image-02.jpg',
        width: 800,
        height: 600,
        alt: 'WEBSTIE_TITLE | WEBSITE.COM',
      }
    ],
    site_name: 'WEBSTIE_TITLE | WEBSITE.COM',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default SEO;
