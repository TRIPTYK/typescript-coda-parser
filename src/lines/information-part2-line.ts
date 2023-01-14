import type Message from '../values/message.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type SequenceNumber from '../values/sequence-number.js';
import Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class InformationPart2Line extends Line {
  constructor (
        private _sequenceNumber: SequenceNumber,
        private _sequenceNumberDetail:SequenceNumberDetail,
        private _message :Message
  ) {
    super()
  }

  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get message (): Message { return this._message; }
  getLineType (): LineType {
    return LineType.InformationPart2;
  }
}
