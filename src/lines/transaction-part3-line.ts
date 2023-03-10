import { LineType } from './LineType.enum.js';
import type SequenceNumber from '../values/sequence-number.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type AccountFull from '../values/account-full.js';
import type AccountName from '../values/account-name.js';
import type Message from '../values/message.js';
import type InformationOrTransactionLine from './information-or-transaction-line-interface.js';

export default class TransactionPart3Line implements InformationOrTransactionLine {
  constructor (
    private _sequenceNumber:SequenceNumber,
    private _sequenceNumberDetail:SequenceNumberDetail,
    private _otherAccountNumberAndCurrency:AccountFull,
    private _otherAccountName:AccountName,
    private _message:Message
  ) {
  }

  get message (): Message { return this._message; }
  get otherAccountName (): AccountName { return this._otherAccountName; }
  get otherAccountNumberAndCurrency (): AccountFull { return this._otherAccountNumberAndCurrency; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  getLineType (): LineType {
    return LineType.TransactionPart3;
  }
}
