import InformationPart1Line from '../lines/information-part1-line.js';
import type Line from '../lines/line.js';
import BankReference from '../values/bank-reference.js';
import MessageOrStructuredMessage from '../values/message-or-structured-message.js';
import SequenceNumber from '../values/sequence-number.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import TransactionCode from '../values/transaction-code.js';
import type LineParser from './line-parser-interface.js';

export default class InformationPart1lineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 2) === '31';
  }

  parse (codaLine: string): Line {
    const transactionCode = new TransactionCode(codaLine.substring(31, 39));

    return new InformationPart1Line(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new BankReference(codaLine.substring(10, 31)),
      transactionCode,
      new MessageOrStructuredMessage(codaLine.substring(39, 113), transactionCode)
    )
  }
}
