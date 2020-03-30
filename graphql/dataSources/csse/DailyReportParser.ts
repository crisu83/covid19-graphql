import { Cases, Location } from '../../.generated/types';
import { DailyReportColumn, DailyReportLegacyColumn, DailyReportRow } from './types';

class DailyReportParser {
  parseCountryOrRegion = (row: DailyReportRow): string => {
    return row[DailyReportColumn.CountryOrRegion] || row[DailyReportLegacyColumn.CountryOrRegion];
  };

  parseProvinceOrState = (row: DailyReportRow): string | null => {
    return row[DailyReportColumn.ProvinceOrState] || row[DailyReportLegacyColumn.ProvinceOrState] || null;
  };

  parseLocation = (row: DailyReportRow): Location | null => {
    return row[DailyReportColumn.Latitude] && row[DailyReportColumn.Longitude]
      ? {
          latitude: Number(row[DailyReportColumn.Latitude]),
          longitude: Number(row[DailyReportColumn.Longitude]),
        }
      : null;
  };

  parseCases = (row: DailyReportRow): Cases => ({
    confirmed: Number(row[DailyReportColumn.Confirmed]),
    deaths: Number(row[DailyReportColumn.Deaths]),
    recovered: Number(row[DailyReportColumn.Recovered]),
    active: row[DailyReportColumn.Active] ? Number(row[DailyReportColumn.Active]) : null,
  });

  parseLastUpdated = (row: DailyReportRow): string => {
    return row[DailyReportColumn.LastUpdated] || row[DailyReportLegacyColumn.LastUpdated];
  };

  parseFipsCode = (row: DailyReportRow): number | null => {
    return row[DailyReportColumn.FIPS] ? Number(row[DailyReportColumn.FIPS]) : null;
  };
}

export default new DailyReportParser();
