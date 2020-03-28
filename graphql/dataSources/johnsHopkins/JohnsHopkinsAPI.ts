import { RESTDataSource } from 'apollo-datasource-rest';
import readCsvAsync from '../../utils/readCsvAsync';
import { DailyReportRow } from './types';

export default class JohnsHopkinsAPI extends RESTDataSource {
  baseURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master';

  getDailyReport = async (date: string): Promise<DailyReportRow[]> => {
    try {
      const data = await this.get(`csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv`);
      return await readCsvAsync(data);
    } catch (e) {
      throw new Error('Data not available.');
    }
  };
}
