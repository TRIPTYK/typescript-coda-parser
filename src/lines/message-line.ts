import type Message from '../values/message.js';
import type SequenceNumber from '../values/sequence-number.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class MessageLine implements Line {
  constructor (
        private _sequenceNumber:SequenceNumber,
        private _sequenceNumberDetail:SequenceNumberDetail,
        private _message:Message
  ) {
  }

  get message (): Message { return this._message; }
  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }

  getLineType (): LineType {
    return LineType.Message;
  }
}
