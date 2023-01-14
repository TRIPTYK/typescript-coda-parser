import InformationPart2Line from '../lines/information-part2-line.js';
import type Line from '../lines/line.js';
import Message from '../values/message.js';
import SequenceNumber from '../values/sequence-number.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import type LineParser from './line-parser-interface.js';

export default class InformationPart2LineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 2) === '32';
  }

  parse (codaLine: string): Line {
    return new InformationPart2Line(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new Message(codaLine.substring(10, 105))
    )
  }
}
