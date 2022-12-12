import '../styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content="We are Fortini, a brazilian non-profit civil society organization that promotes access to comprehensive education, sports, and culture for students of public schools in the Metropolitan Region of Belo Horizonte, Minas Gerais, Brazil."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Fortini Investimento Social" />
        <meta
          property="og:image"
          content="https://fortini.org/images/fortini.png"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S2RL7YMX85"
        strategy="afterInteractive"
      ></Script>
      <Script id="analytics" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-S2RL7YMX85');
            `}
      </Script>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
