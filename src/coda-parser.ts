import { readFile } from 'fs/promises'
import parseLines from './coda-line-parser.js';
import type Line from './lines/line.js';
import { LineType } from './lines/LineType.enum.js';
import StatementParser from './statement-parsers/statement-parser.js';

export default async function parseCodafile (filePath : string) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return (parse(await fileToCodaLines(filePath)))
}

async function groupTransactionPerStatement (lines:Line[]) {
  let idx = -1;
  const statements:Map<number, Line[]> = new Map<number, Line[]>();
  lines.forEach((line) => {
    if (statements.size === 0 || line.getLineType() === LineType.Identification) {
      idx += 1;
      statements.set(idx, [line]);
    }
    statements.get(idx)?.push(line);
  });
  return statements;
}
async function convertLinesToStatements (lines:Line[]) {
  const linesGroupedPerStatement = await groupTransactionPerStatement(lines);

  const parser = new StatementParser()
  return Array.from(linesGroupedPerStatement.values()).map(lines => {
    return parser.parse(lines);
  })

  // for (const key of linesGroupedPerStatement.keys()) {
  //   console.log(key); // Lokesh Raj John
  // }
}
async function parse (codaLines:string[]) {
  const lines:Line[] = await parseLines(codaLines);
  return convertLinesToStatements(lines);
}

async function fileToCodaLines (codaFile:string) {
  return (await readFile(codaFile, { encoding: 'utf-8' })).split(/\r?\n/).filter(line => line !== '' || line !== null);
}
