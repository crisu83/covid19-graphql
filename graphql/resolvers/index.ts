import CSSEDailyReportParser from '../dataSources/csse/CSSEDailyReportParser';
import { DailyReportRow } from '../dataSources/csse/types';
import countriesAndRegionsResolver from './countriesAndRegionsResolver';

export default {
  Query: {
    countriesAndRegions: countriesAndRegionsResolver,
  },
  CountryOrRegion: {
    name: (source: DailyReportRow) => CSSEDailyReportParser.parseCountryOrRegion(source),
    provinceOrState: (source: DailyReportRow) => CSSEDailyReportParser.parseProvinceOrState(source),
    location: (source: DailyReportRow) => CSSEDailyReportParser.parseLocation(source),
    cases: (source: DailyReportRow) => CSSEDailyReportParser.parseCases(source),
    lastUpdated: (source: DailyReportRow) => CSSEDailyReportParser.parseLastUpdated(source),
    fipsCode: (source: DailyReportRow) => CSSEDailyReportParser.parseFipsCode(source),
  },
};
