import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

const config = {
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    opts: {
      headers: {
        Authorization: `Bearer ${process.env.PRISMA_TOKEN}`,
      },
    },
    cache: new InMemoryCache()
  })
}

export default withData(config)
