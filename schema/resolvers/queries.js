const prisma  = require('@blucodes/prisma-server')

module.exports = {
  users: async (root, args, context) => await prisma.users(),
}
