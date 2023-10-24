import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andrew Hale</title>
        <meta name="description" content="Andrew Z Hale's personal website." />
        <link rel="icon" href="/azh.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
