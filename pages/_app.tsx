import Head from 'next/head';
import { AppProps } from 'next/app';
import 'modules/styles/reset.css';

export default function App(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta property="og:url" content="https://ut0n.dev" />
        <meta property="og:title" content="Ut0n" />
        <meta property="og:description" content="Ut0n's Portfolio." />
        <meta property="og:image" content="https://ut0n.dev/ogp.png" />
        <meta property="og:site_name" content="Ut0n's Portfolio" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
