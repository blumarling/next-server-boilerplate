const {makeExecutableSchema} = require ('graphql-tools')
const {importSchema} = require('graphql-import')

const resolvers = require('./resolvers/index')
const typeDefs = importSchema('./schema/schema.graphql')

// schema
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
})
