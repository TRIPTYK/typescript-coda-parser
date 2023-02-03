import type Amount from '../values/amount.js';
import type BankReference from '../values/bank-reference.js';
import type CodaDate from '../values/coda-date.js';
import type GlobalizationCode from '../values/globalization-code.js';
import type MessageOrStructuredMessage from '../values/message-or-structured-message.js';
import type Message from '../values/message.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type SequenceNumber from '../values/sequence-number.js';
import type StatementSequenceNumber from '../values/statement-sequence-number.js';
import type TransactionCode from '../values/transaction-code.js';
import type InformationOrTransactionLine from './information-or-transaction-line-interface.js';
import { LineType } from './LineType.enum.js';

export default class TransactionPart1Line implements InformationOrTransactionLine {
  constructor (
        private _sequenceNumber: SequenceNumber,
        private _sequenceNumberDetail: SequenceNumberDetail,
        private _bankReference:BankReference,
        private _amount:Amount,
        private _valueDate:CodaDate,
        private _transactionCode:TransactionCode,
        private _messageOrStructuredMessage:MessageOrStructuredMessage,
        private _transactionDate:CodaDate,
        private _statementSequenceNumber:StatementSequenceNumber,
        private _globalisationCode:GlobalizationCode
  ) {
  }

  get message ():Message { return this._messageOrStructuredMessage.message; }
  get amount (): Amount { return this._amount; }
  get bankReference (): BankReference { return this._bankReference; }
  get globalisationCode (): GlobalizationCode { return this._globalisationCode; }
  get messageOrStructuredMessage (): MessageOrStructuredMessage { return this._messageOrStructuredMessage; }
  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get statementSequenceNumber (): StatementSequenceNumber { return this._statementSequenceNumber; }
  get transactionCode (): TransactionCode { return this._transactionCode; }
  get transactionDate (): CodaDate { return this._transactionDate; }
  get valueDate (): CodaDate { return this._valueDate; }

  getLineType (): LineType {
    return LineType.TransactionPart1;
  }
}
