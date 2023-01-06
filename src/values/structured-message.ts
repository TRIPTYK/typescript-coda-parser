import { validateStringMultipleLengths } from '../helpers.js';
import SepaDirectDebit from './sepa-direct-debit.js';
import type TransactionCode from './transaction-code.js';

export default class StructuredMessage {
  private declare _structuredMessageType: string;
  private declare _structuredMessageFull: string;
  private declare _sepaDirectDebit: SepaDirectDebit;
  constructor (private _value:string, transactionCode:TransactionCode) {
    validateStringMultipleLengths(_value, [53, 73], 'StructuredMessage');
    this._structuredMessageFull = _value.substring(3);
    this._structuredMessageType = _value.substring(0, 3);
    if (this._structuredMessageType === '101' || this._structuredMessageType === '102') {
      this._value = this._structuredMessageFull.substring(0, 12);
    } else if (this._structuredMessageType === '105' && this._structuredMessageFull.length >= 57) {
      this._value = this._structuredMessageFull.substring(45, 57);
    } else if (this._structuredMessageType === '127' && transactionCode.family.value === '05') {
      this._sepaDirectDebit = new SepaDirectDebit(this._structuredMessageFull);
    }
  }

  get structuredMessage (): string {
    return this._structuredMessageFull;
  }

  get structuredMessageType (): string {
    return this._structuredMessageType;
  }

  get sepaDirectDebit (): SepaDirectDebit {
    return this._sepaDirectDebit;
  }

  get value (): string {
    return this._value;
  }
}
