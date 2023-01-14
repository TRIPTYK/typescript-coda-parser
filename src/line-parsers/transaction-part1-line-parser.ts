import type Line from '../lines/line.js';
import TransactionPart1Line from '../lines/transaction-part1-line.js';
import BankReference from '../values/bank-reference.js';
import SequenceNumber from '../values/sequence-number.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import type LineParser from './line-parser-interface.js';
import Amount from '../values/amount.js';
import CodaDate from '../values/coda-date.js';
import TransactionCode from '../values/transaction-code.js';
import MessageOrStructuredMessage from '../values/message-or-structured-message.js';
import StatementSequenceNumber from '../values/statement-sequence-number.js';
import GlobalizationCode from '../values/globalization-code.js';

export default class TransactionPart1LineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 2) === '21';
  }

  parse (codaLine: string): Line {
    const transactionCode = new TransactionCode(codaLine.substring(53, 61))
    return new TransactionPart1Line(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new BankReference(codaLine.substring(10, 31)),
      new Amount(codaLine.substring(31, 32) + codaLine.substring(32, 47), true),
      new CodaDate(codaLine.substring(47, 53)),
      transactionCode,
      new MessageOrStructuredMessage(codaLine.substring(61, 115), transactionCode),
      new CodaDate(codaLine.substring(115, 121)),
      new StatementSequenceNumber(codaLine.substring(121, 124)),
      new GlobalizationCode(codaLine.substring(124, 125))
    )
  }
}
