import { QueryCountriesAndRegionsArgs, Resolver } from '../.generated/types';
import { DailyReportRow } from '../dataSources/johnsHopkins/types';
import { ApolloContext } from '../types';

const countriesAndRegionsResolver: Resolver<
  Promise<DailyReportRow[]>,
  null,
  ApolloContext,
  QueryCountriesAndRegionsArgs
> = (_source, { date }, { dataSources }) => {
  return dataSources.johnsHopkinsAPI.getDailyReport(date);
};

export default countriesAndRegionsResolver;
