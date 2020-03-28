import { ApolloServer } from 'apollo-server-azure-functions'
import { readFileSync } from 'fs'

const typeDefs = readFileSync(`${process.cwd()}/graphql/schema.graphql`, 'utf8')

const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL!',
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

export const graphqlHandler = server.createHandler()
