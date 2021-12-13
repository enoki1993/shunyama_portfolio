import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import tw, { GlobalStyles, css } from 'twin.macro'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Vannamei&lsquo;s Portfolio</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <GlobalStyles />
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </>
)

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-image: url('/img/bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default MyApp
