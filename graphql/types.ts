import CSSEDataSource from './dataSources/csse/CSSEDataSource';

export interface ApolloContext {
  dataSources: {
    CSSE: CSSEDataSource;
  };
}
