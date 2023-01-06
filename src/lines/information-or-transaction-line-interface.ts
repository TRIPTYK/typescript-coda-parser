import type Message from '../values/message.js';
import type SequenceNumber from '../values/sequence-number.js';
import type { Line } from './line.js';

export default interface InformationOrTransactionLine extends Line {
  get message(): Message,
  get sequenceNumber(): SequenceNumber,
}
