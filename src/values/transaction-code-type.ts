import { validateStringLength } from '../helpers.js';

export default class TransactionCodeType {
  constructor (private _value:string) {
    validateStringLength(_value, 1, 'TransactionCodeType');

    this._value = _value;
  }

  get value (): string {
    return this._value;
  }
}
