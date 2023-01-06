import { validateStringLength } from '../helpers.js';

export default class TransactionReference {
  constructor (private _value:string) {
    validateStringLength(_value, 16, 'TransactionReference')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
