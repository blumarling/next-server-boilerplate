const path = require("path")

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
      "styled-components": path.resolve(
        __dirname,
        "node_modules",
        "styled-components"
      ),
      "react": path.resolve(
        __dirname,
        "node_modules",
        "react"
      ),
      "react-dom": path.resolve(
        __dirname,
        "node_modules",
        "react-dom"
      )
    }
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}