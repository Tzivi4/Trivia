import '../styles/globals.css'
import Head from 'next/head'
import AppState from '../context/appState'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppState>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Trivia</title>
      </Head>
      <Component {...pageProps} />
    </AppState>
  )
}

export default MyApp
