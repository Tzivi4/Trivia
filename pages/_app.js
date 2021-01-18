import '../styles/globals.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Trivia</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
