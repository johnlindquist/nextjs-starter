const SEO = {
  title: 'A Developer first and open-source community by developers',
  titleTemplate: `%s | ME.IO`,
  description: 'An online community of software engineers, web developers, full-stack developers, ui developers and ui/ux designers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://me.io/',
    title: 'A Developer first and open-source community by developers | ME.IO',
    description: 'An online community of software engineers, web developers, full-stack developers, ui developers and ui/ux designers',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: 'https://me.io/static/img/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'A Developer first and open-source community by developers | ME.IO',
      },
      {
        url: 'https://me.io/static/img/og-image-02.jpg',
        width: 800,
        height: 600,
        alt: 'A Developer first and open-source community by developers | ME.IO',
      }
    ],
    site_name: 'A Developer first and open-source community by developers | ME.IO',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default SEO;
