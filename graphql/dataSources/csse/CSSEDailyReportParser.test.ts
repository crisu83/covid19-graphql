import readCsvFile from '../../utils/readCsvFile';
import CSSEDailyReportParser from './CSSEDailyReportParser';
import { DailyReportRow } from './types';

const DAILY_REPORT_PATH = `${process.cwd()}/data/csse/dailyReports`;

describe('CSSECSSEDailyReportParser', () => {
  it('parses daily report', async () => {
    const data = await readCsvFile<DailyReportRow>(`${DAILY_REPORT_PATH}/03-22-2020.csv`);
    expect(data.length).toBe(3417);
    const firstRow = data.slice(0, 1)[0];
    // 36061,New York City,New York,US,3/22/20 23:45,40.7672726,-73.97152637,9654,63,0,0,"New York City, New York, US"
    expect(CSSEDailyReportParser.parseCountryOrRegion(firstRow)).toBe('US');
    expect(CSSEDailyReportParser.parseProvinceOrState(firstRow)).toBe('New York');
    expect(CSSEDailyReportParser.parseLocation(firstRow)).toMatchObject({
      latitude: 40.7672726,
      longitude: -73.97152637,
    });
    expect(CSSEDailyReportParser.parseCases(firstRow)).toMatchObject({
      active: 0,
      confirmed: 9654,
      deaths: 63,
      recovered: 0,
    });
    expect(CSSEDailyReportParser.parseLastUpdated(firstRow)).toBe('3/22/20 23:45');
    expect(CSSEDailyReportParser.parseFipsCode(firstRow)).toBe(36061);
  });
  it('parses legacy daily report', async () => {
    const data = await readCsvFile<DailyReportRow>(`${DAILY_REPORT_PATH}/01-22-2020.csv`);
    expect(data.length).toBe(38);
    const firstRow = data.slice(0, 1)[0];
    // Anhui,Mainland China,1/22/2020 17:00,1,,
    expect(CSSEDailyReportParser.parseCountryOrRegion(firstRow)).toBe('Mainland China');
    expect(CSSEDailyReportParser.parseProvinceOrState(firstRow)).toBe('Anhui');
    expect(CSSEDailyReportParser.parseLocation(firstRow)).toBe(null);
    expect(CSSEDailyReportParser.parseCases(firstRow)).toMatchObject({
      active: null,
      confirmed: 1,
      deaths: 0,
      recovered: 0,
    });
    expect(CSSEDailyReportParser.parseLastUpdated(firstRow)).toBe('1/22/2020 17:00');
    expect(CSSEDailyReportParser.parseFipsCode(firstRow)).toBe(null);
  });
});

export default {};
