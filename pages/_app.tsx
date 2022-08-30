import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '@components/Navbar/Navbar'

import '../styles/globals.scss'
import styles from '../styles/App.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A PWA made to prove my React skills and made with NextJS to be secure, serverless and cheap to deploy 🙂"
        />
        <meta name="keywords" content="react, nextjs, pwa, serverless, test, cypress, jest, ci" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#282a36" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />

        <title>React Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className={styles.container}>
        <Navbar />

        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <p>
            Developed by <a href="http://github.com/euaaron">Aaron Carneiro</a>.
          </p>
        </footer>
      </div>
    </>
  )
}

export default MyApp
