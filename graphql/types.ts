import JohnsHopkinsAPI from './dataSources/johnsHopkins/JohnsHopkinsAPI';

export interface ApolloContext {
  dataSources: {
    johnsHopkinsAPI: JohnsHopkinsAPI;
  };
}
