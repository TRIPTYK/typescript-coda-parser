import type Bic from '../values/bic.js';
import type CategoryPurpose from '../values/category-purpose.js';
import type ClientReference from '../values/client-reference.js';
import type IsoReasonReturnCode from '../values/iso-reason-return-code.js';
import type Message from '../values/message.js';
import type Purpose from '../values/purpose.js';
import type SequenceNumber from '../values/sequence-number.js';
import type SequenceNumberDetail from '../values/sequence-number-detail.js';
import type TransactionCodeType from '../values/transaction-code-type.js';
import Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class TransactionPart2Line extends Line {
  constructor (
    private _sequenceNumber:SequenceNumber,
    private _sequenceNumberDetail:SequenceNumberDetail,
    private _message:Message,
    private _clientReference:ClientReference,
    private _otherAccountBic:Bic,
    private _transactionType:TransactionCodeType,
    private _isoReasonReturnCode:IsoReasonReturnCode,
    private _categoryPurpose:CategoryPurpose,
    private _purpose:Purpose
  ) {
    super()
  }

  get categoryPurpose (): CategoryPurpose { return this._categoryPurpose; }
  get clientReference (): ClientReference { return this._clientReference; }
  get isoReasonReturnCode (): IsoReasonReturnCode { return this._isoReasonReturnCode; }
  get message (): Message { return this._message; }
  get sequenceNumber (): SequenceNumber { return this._sequenceNumber; }
  get sequenceNumberDetail (): SequenceNumberDetail { return this._sequenceNumberDetail; }
  get otherAccountBic (): Bic { return this._otherAccountBic; }
  get transactionType (): TransactionCodeType { return this._transactionType; }
  get purpose (): Purpose { return this._purpose; }
  getLineType (): LineType {
    return LineType.TransactionPart2;
  }
}
