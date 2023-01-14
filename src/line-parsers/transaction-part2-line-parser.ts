import type Line from '../lines/line.js';
import TransactionPart2Line from '../lines/transaction-part2-line.js';
import Bic from '../values/bic.js';
import CategoryPurpose from '../values/category-purpose.js';
import ClientReference from '../values/client-reference.js';
import IsoReasonReturnCode from '../values/iso-reason-return-code.js';
import Message from '../values/message.js';
import Purpose from '../values/purpose.js';
import SequenceNumber from '../values/sequence-number.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import type LineParser from './line-parser-interface.js';
import TransactionCodeType from '../values/transaction-code-type.js';

export default class TransactionPart2LineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 2) === '22';
  }

  parse (codaLine: string): Line {
    return new TransactionPart2Line(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new Message(codaLine.substring(10, 63)),
      new ClientReference(codaLine.substring(63, 98)),
      new Bic(codaLine.substring(98, 109)),
      new TransactionCodeType(codaLine.substring(112, 113)),
      new IsoReasonReturnCode(codaLine.substring(113, 117)),
      new CategoryPurpose(codaLine.substring(117, 121)),
      new Purpose(codaLine.substring(121, 125))
    )
  }
}
