import type { Line } from '../lines/line.js';
import Message from '../values/message.js';
import SequenceNumber from '../values/sequence-number.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import type LineParser from './line-parser-interface.js';
import InformationPart3Line from '../lines/information-part3-line.js';

export default class InformationPart3LineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 2) === '33';
  }

  parse (codaLine: string): Line {
    return new InformationPart3Line(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new Message(codaLine.substring(10, 90))
    )
  }
}
