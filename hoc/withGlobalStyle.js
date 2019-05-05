import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"
import { globalStyle } from "@blucodes/components"

const withGlobalStyle = EnhancedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      let props
      if (typeof EnhancedComponent.getInitialProps === "function") {
        props = await EnhancedComponent.getInitialProps(ctx)
      }
      return { ...props }
    }

    render() {
      const GlobalStyle = createGlobalStyle`
        ${globalStyle}
      `
      return (
        <React.Fragment>
          <GlobalStyle />
          <EnhancedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }

export default withGlobalStyle
