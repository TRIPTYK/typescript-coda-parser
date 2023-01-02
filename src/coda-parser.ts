import { readFile } from 'fs/promises'
import parseLines from './coda-line-parser.js';

export default async function parseCodafile (filePath : string) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return (parse(await fileToCodaLines(filePath)))
}

function parse (codaLines:string[]) {
  return parseLines(codaLines)
}

async function fileToCodaLines (codaFile:string) {
  return await (await readFile(codaFile, { encoding: 'utf-8' })).split(/\r?\n/).filter(line => line !== '' || line !== null);
}
