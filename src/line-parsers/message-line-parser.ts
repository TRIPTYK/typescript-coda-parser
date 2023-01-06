import type { Line } from '../lines/line.js';
import MessageLine from '../lines/message-line.js';
import Message from '../values/message.js';
import SequenceNumberDetail from '../values/sequence-number-detail.js';
import SequenceNumber from '../values/sequence-number.js';
import type LineParser from './line-parser-interface.js';

export default class MessageLineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 1) === '4';
  }

  parse (codaLine: string): Line {
    return new MessageLine(
      new SequenceNumber(codaLine.substring(2, 6)),
      new SequenceNumberDetail(codaLine.substring(6, 10)),
      new Message(codaLine.substring(32, 112)));
  }
}
