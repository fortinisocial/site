import '../styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
