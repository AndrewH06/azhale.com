import Head from "next/head";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
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

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
