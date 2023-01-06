import InitialStateLine from '../lines/initial-state-line.js';
import Account from '../values/account.js';
import Amount from '../values/amount.js';
import CodaDate from '../values/coda-date.js';
import PaperStatementSequenceNumber from '../values/paper-statement-sequence-number.js';
import StatementSequenceNumber from '../values/statement-sequence-number.js';
import type LineParser from './line-parser-interface.js';

export default class InitialStateLineParser implements LineParser {
  canAcceptString (codaLine:string) {
    return codaLine.length === 128 && codaLine.substring(0, 1) === '1';
  }

  parse (codaLine:string) {
    return new InitialStateLine(
      new PaperStatementSequenceNumber(codaLine.substring(125, 128)),
      new StatementSequenceNumber(codaLine.substring(2, 5)),
      new Account(codaLine.substring(1, 2), codaLine.substring(5, 42), codaLine.substring(64, 125)),
      new Amount(codaLine.substring(42, 58), true),
      new CodaDate(codaLine.substring(58, 64))
    );
  }
}
