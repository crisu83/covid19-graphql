import DailyReportParser from '../dataSources/csse/DailyReportParser';
import { DailyReportRow } from '../dataSources/csse/types';
import countriesAndRegionsResolver from './countriesAndRegionsResolver';

export default {
  Query: {
    countriesAndRegions: countriesAndRegionsResolver,
  },
  CountryOrRegion: {
    name: (source: DailyReportRow) => DailyReportParser.parseCountryOrRegion(source),
    provinceOrState: (source: DailyReportRow) => DailyReportParser.parseProvinceOrState(source),
    location: (source: DailyReportRow) => DailyReportParser.parseLocation(source),
    cases: (source: DailyReportRow) => DailyReportParser.parseCases(source),
    lastUpdated: (source: DailyReportRow) => DailyReportParser.parseLastUpdated(source),
    fipsCode: (source: DailyReportRow) => DailyReportParser.parseFipsCode(source),
  },
};
