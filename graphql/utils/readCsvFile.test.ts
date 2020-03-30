import readCsvFile from './readCsvFile';

describe('readCsvFile', () => {
  it('reads CSV file', async () => {
    const data = await readCsvFile(`${process.cwd()}/data/csse/dailyReports/01-22-2020.csv`);
    expect(data.length).toBe(38);
  });
});

export default {};
