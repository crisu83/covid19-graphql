export enum DailyReportColumn {
  ProvinceOrState = 'Province_State',
  CountryOrRegion = 'Country_Region',
  LastUpdated = 'Last_Update',
  Latitude = 'Lat',
  Longitude = 'Long_',
  Confirmed = 'Confirmed',
  Deaths = 'Deaths',
  Recovered = 'Recovered',
  Active = 'Active',
  FIPS = 'FIPS',
}

export enum DailyReportLegacyColumn {
  ProvinceOrState = 'Province/State',
  CountryOrRegion = 'Country/Region',
  LastUpdated = 'Last Update',
}

export interface DailyReportRow {
  Province_State: DailyReportColumn.ProvinceOrState;
  Country_Region: DailyReportColumn.CountryOrRegion;
  Last_Update: DailyReportColumn.LastUpdated;
  Lat: DailyReportColumn.Latitude;
  Long_: DailyReportColumn.Longitude;
  Confirmed: DailyReportColumn.Confirmed;
  Deaths: DailyReportColumn.Deaths;
  Recovered: DailyReportColumn.Recovered;
  Active: DailyReportColumn.Active;
  FIPS: DailyReportColumn.FIPS;
  'Province/State': DailyReportLegacyColumn.ProvinceOrState;
  'Country/Region': DailyReportLegacyColumn.CountryOrRegion;
  'Last Update': DailyReportLegacyColumn.LastUpdated;
}
