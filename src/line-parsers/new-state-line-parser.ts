import type Line from '../lines/line.js';
import NewStateLine from '../lines/new-state-line.js';
import AccountFull from '../values/account-full.js';
import Amount from '../values/amount.js';
import CodaDate from '../values/coda-date.js';
import StatementSequenceNumber from '../values/statement-sequence-number.js';
import type LineParser from './line-parser-interface.js';

export default class NewStateLineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 1) === '8';
  }

  parse (codaLine: string): Line {
    return new NewStateLine(
      new StatementSequenceNumber(codaLine.substring(1, 4)),
      new AccountFull(codaLine.substring(4, 41)),
      new Amount(codaLine.substring(41, 57), true),
      new CodaDate(codaLine.substring(57, 63))
    )
  }
}
