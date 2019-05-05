// server.js
const next = require('next')
const routes = require('./routes')
// const compression = require('compression')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const axios = require('axios')
const { parse } = require('url')
const LRUCache = require('lru-cache')
const redirects = require('./redirects')
const apolloServer = require('./apolloServer')

require('dotenv').config()

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port = parseInt(process.env.PORT || 3000, 10)


app.prepare().then(() => {
  const server = express()

  server.use(redirects)
  apolloServer.applyMiddleware({ app:server });

  // const ssrCache = new LRUCache({
  //   max: 100,
  //   maxAge: 1000 * 60 * 60, // 1hour
  // })

  // const typeCache = new LRUCache({
  //   max: 100,
  //   maxAge: 1000 * 60 * 60,
  // })

  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    )
    next()
  })

  const options = {
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
  }

  server.get('/robots.txt', (req, res) =>
    res
      .status(200)
      .sendFile(path.join(__dirname, 'static', 'robots.txt'), options),
  )


  // server.post('/flush-cache', (req, res) => {
  //   const {redirectUrl} = req.query

  //   try {
  //     ssrCache.reset()
  //     typeCache.reset()

  //     if (redirectUrl) {
  //       res.status(200)
  //       res.redirect(redirectUrl)
  //     } else {
  //       res.status(200)
  //       res.end(`
  //         Who you gonna call? Cache busters!
  //       `)
  //     }
  //   } catch (err) {
  //     res.status(500)
  //     res.end(err)
  //   }
  // })

  server.use(handler).listen(port, () => {

  })
})
