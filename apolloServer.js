const { ApolloServer } = require('apollo-server-express')

module.exports = new ApolloServer({
  schema: require('./schema'),
  formatError(err) {
    return {
      message: err.message,
      code: err.code || err.originalError ? err.originalError.code : 500,   // <--
    }
  },
  context: async ({req, connection}) => {
    try {
      // const decodedUser = await decryptToken(req.headers.token)
      // // se trovo l'utente lo passo nei resolver sotto il context
      // return decodedUser
    } catch (e) {
      // throw new AuthErrorLogOut()
    }
  }
})