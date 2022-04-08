import "tailwindcss/tailwind.css";
import "swiper/swiper-bundle.min.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Garima Malik" />
        <meta name="apple-mobile-web-app-title" content="Garima Malik" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/icons/icon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/icons/icon-512x512.png"
        />
        <meta name="apple-mobile-web-app-status-bar" content="#fcd5ce" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fcd5ce" />

        {/* Essential META Tags */}

        <meta property="og:title" content="Artist Portfolio" />
        <meta
          property="og:description"
          content="A awesome artist portfolio website."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/wecloud/image/upload/v1625824185/artist-portfolio/twitter_card-100_innx4h.jpg"
        />
        <meta
          property="og:url"
          content="https://artist-portfolio.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Non-Essential, But Recommended */}

        <meta property="og:site_name" content="Artist Portfolio" />
        <meta name="twitter:image:alt" content="Artist Portfolio" />

        {/* Non-Essential, But Required for Analytics */}

        <meta name="twitter:site" content="@satvikvirmani" />
      </Head>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}
export default MyApp;
