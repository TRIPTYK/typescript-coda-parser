import type BankReference from '../values/bank-reference.js';
import type MessageOrStructuredMessage from '../values/message-or-structured-message.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type SequenceNumber from '../values/sequence-number.js';
import type TransactionCode from '../values/transaction-code.js';
import type { Line } from './line.js';
import { LineType } from './LineType.enum.js';

export default class InformationPart1Line implements Line {
  constructor (
    private _sequenceNumber:SequenceNumber,
    private _sequenceNumberDetail:SequenceNumberDetail,
    private _bankReference:BankReference,
    private _transactionCode:TransactionCode,
    private _messageOrStructuredMessage:MessageOrStructuredMessage
  ) {}

  get bankReference (): BankReference { return this._bankReference; }
  get messageOrStructuredMessage (): MessageOrStructuredMessage { return this._messageOrStructuredMessage; }
  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get transactionCode (): TransactionCode { return this._transactionCode; }
  getLineType (): LineType {
    return LineType.InformationPart1;
  }
}
