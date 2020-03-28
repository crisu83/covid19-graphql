import { ApolloServer } from 'apollo-server-azure-functions';
import { readFileSync } from 'fs';
import JohnsHopkinsAPI from './dataSources/johnsHopkins/JohnsHopkinsAPI';
import resolvers from './resolvers/index';

const typeDefs = readFileSync(`${process.cwd()}/graphql/schema.graphql`, 'utf8');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    johnsHopkinsAPI: new JohnsHopkinsAPI(),
  }),
});

export const graphqlHandler = server.createHandler();
