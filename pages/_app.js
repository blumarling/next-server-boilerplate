// pages/_app.js
import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { theme } from '@blucodes/components'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps }
  }

  render() {
    
    const {
      Component,
      pageProps,
    } = this.props

    return (
      <Container>
        <Head>
          <title>Ciaaao</title>
        </Head>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
