import { QueryCountriesAndRegionsArgs, Resolver } from '../.generated/types';
import { DailyReportRow } from '../dataSources/csse/types';
import { ApolloContext } from '../types';

const countriesAndRegionsResolver: Resolver<
  Promise<DailyReportRow[]>,
  null,
  ApolloContext,
  QueryCountriesAndRegionsArgs
> = (_source, { date }, { dataSources }) => {
  return dataSources.CSSE.getDailyReport(date);
};

export default countriesAndRegionsResolver;
