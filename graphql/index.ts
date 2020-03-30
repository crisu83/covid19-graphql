import { ApolloServer } from 'apollo-server-azure-functions';
import { readFileSync } from 'fs';
import CSSEDataSource from './dataSources/csse/CSSEDataSource';
import resolvers from './resolvers/index';

const typeDefs = readFileSync(`${process.cwd()}/graphql/schema.graphql`, 'utf8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    CSSE: new CSSEDataSource(),
  }),
});

export const graphqlHandler = server.createHandler();
