import Document, { Main, NextScript } from "next/document"
import React from "react"

import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const { req } = ctx
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    // const userAgent = req ? req.headers["user-agent"] : navigator.userAgent
    // const ua = checkUserAgent(userAgent)
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
      // ua,
    }
  }

  render() {
    return (
      <html>
        <body>
          {this.props.styles}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
