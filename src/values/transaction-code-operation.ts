import { validateStringLength } from '../helpers.js';

export default class TransactionCodeOperation {
  constructor (private _value:string) {
    validateStringLength(_value, 2, 'TransactionCodeOperation');
    this._value = _value;
  }

  get value (): string {
    return this._value;
  }
}
