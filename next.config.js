module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
    localeDetection: false,
    domains: [
      {
        domain: 'fortini.org',
        defaultLocale: 'en',
      },
      {
        domain: 'fortini.org.br',
        defaultLocale: 'pt-br',
      },
    ],
  },
};
