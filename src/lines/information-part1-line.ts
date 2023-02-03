import type BankReference from '../values/bank-reference.js';
import type MessageOrStructuredMessage from '../values/message-or-structured-message.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type SequenceNumber from '../values/sequence-number.js';
import type TransactionCode from '../values/transaction-code.js';
import { LineType } from './LineType.enum.js';
import type InformationOrTransactionLine from './information-or-transaction-line-interface.js';
import type Message from '../values/message.js';

export default class InformationPart1Line implements InformationOrTransactionLine {
  constructor (
    private _sequenceNumber:SequenceNumber,
    private _sequenceNumberDetail:SequenceNumberDetail,
    private _bankReference:BankReference,
    private _transactionCode:TransactionCode,
    private _messageOrStructuredMessage:MessageOrStructuredMessage
  ) {

  }

  get message ():Message { return this._messageOrStructuredMessage.message; }
  get bankReference (): BankReference { return this._bankReference; }
  get messageOrStructuredMessage (): MessageOrStructuredMessage { return this._messageOrStructuredMessage; }
  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get transactionCode (): TransactionCode { return this._transactionCode; }
  getLineType (): LineType {
    return LineType.InformationPart1;
  }
}
