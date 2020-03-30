import { readFileSync } from 'fs';
import readCsvAsync from './readCsvAsync';

export default async function readCsvFile<TData extends {}>(filePath: string) {
  const csv = readFileSync(filePath, 'utf8');
  return await readCsvAsync<TData>(csv);
}
