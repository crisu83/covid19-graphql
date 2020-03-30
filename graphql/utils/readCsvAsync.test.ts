import { readFileSync } from 'fs';
import { DailyReportColumn, DailyReportLegacyColumn, DailyReportRow } from '../dataSources/johnsHopkins/types';
import readCsvAsync from './readCsvAsync';

describe('readCsvAsync utility', () => {
  it('reads legacy CSV data', async () => {
    const csv = readFileSync(`${process.cwd()}/data/csse/dailyReports/01-22-2020.csv`, 'utf8');
    const data = await readCsvAsync<DailyReportRow>(csv);
    expect(data.length).toBe(38);
    const firstRow = data.slice(0, 1)[0];
    // Anhui,Mainland China,1/22/2020 17:00,1,,
    expect(firstRow[DailyReportLegacyColumn.ProvinceOrState]).toBe('Anhui');
    expect(firstRow[DailyReportLegacyColumn.CountryOrRegion]).toBe('Mainland China');
    expect(firstRow[DailyReportLegacyColumn.LastUpdated]).toBe('1/22/2020 17:00');
    expect(firstRow[DailyReportColumn.Confirmed]).toBe('1');
    expect(firstRow[DailyReportColumn.Deaths]).toBe('');
    expect(firstRow[DailyReportColumn.Recovered]).toBe('');
    const lastRow = data.slice(-1)[0];
    // ,South Korea,1/22/2020 17:00,1,,
    expect(lastRow[DailyReportLegacyColumn.ProvinceOrState]).toBe('');
    expect(lastRow[DailyReportLegacyColumn.CountryOrRegion]).toBe('South Korea');
    expect(lastRow[DailyReportLegacyColumn.LastUpdated]).toBe('1/22/2020 17:00');
    expect(lastRow[DailyReportColumn.Confirmed]).toBe('1');
    expect(lastRow[DailyReportColumn.Deaths]).toBe('');
    expect(lastRow[DailyReportColumn.Recovered]).toBe('');
  });
});

export default {};
