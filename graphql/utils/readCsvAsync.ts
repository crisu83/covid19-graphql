import { parse } from '@fast-csv/parse';
import getStream from 'get-stream';

export default async function readCsvAsync<TData extends {}>(data: string): Promise<TData[]> {
  const stream = parse({ headers: true });
  stream.write(data);
  stream.end();
  return await getStream.array(stream);
}
