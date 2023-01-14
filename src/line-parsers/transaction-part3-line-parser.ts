import type Line from '../lines/line.js';
import TransactionPart3Line from '../lines/transaction-part3-line.js';
import AccountFull from '../values/account-full.js';
import AccountName from '../values/account-name.js';
import Message from '../values/message.js';
import SequenceNumber from '../values/sequence-number.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import type LineParser from './line-parser-interface.js';

export default class TransactionPart3LineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 2) === '23';
  }

  parse (codaLine: string): Line {
    return new TransactionPart3Line(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new AccountFull(codaLine.substring(10, 47)),
      new AccountName(codaLine.substring(47, 82)),
      new Message(codaLine.substring(82, 125))
    );
  }
}
