import { readFile } from 'fs/promises'
import parseLines from './coda-line-parser.js';
import type Line from './lines/line.js';
import { LineType } from './lines/LineType.enum.js';
import StatementParser from './statement-parsers/statement-parser.js';

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
}

export async function parseLinesToStatements (codaLines:string[]) {
  const lines:Line[] = await parseLines(codaLines);
  return convertLinesToStatements(lines);
}

export async function bufferToCodaLines (fileBuffer: Buffer) {
  return fileBuffer.toString().split(/\r?\n/).filter(line => line !== '' || line !== null);
}

export async function fileToCodaLines (codaFile:string) {
  return bufferToCodaLines(await readFile(codaFile));
}

export async function parseCodaBuffer (buffer : Buffer) {
  return parseLinesToStatements(await bufferToCodaLines(buffer))
}

export default async function parseCodafile (filePath : string) {
  return parseLinesToStatements(await fileToCodaLines(filePath))
}
