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
        <meta property="og:image" content="/azhale_preview.png" />
        <link rel="icon" href="/azh2.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
