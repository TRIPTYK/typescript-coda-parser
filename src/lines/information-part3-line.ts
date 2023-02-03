import type Message from '../values/message.js';
import type SequenceNumber from '../values/sequence-number.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import { LineType } from './LineType.enum.js';
import type InformationOrTransactionLine from './information-or-transaction-line-interface.js';

export default class InformationPart3Line implements InformationOrTransactionLine {
  constructor (
        private _sequenceNumber: SequenceNumber,
        private _sequenceNumberDetail:SequenceNumberDetail,
        private _message :Message
  ) {
  }

  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get message (): Message { return this._message; }
  getLineType (): LineType {
    return LineType.InformationPart3;
  }
}
