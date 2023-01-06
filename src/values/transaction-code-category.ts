import { validateStringLength } from '../helpers.js';

export default class TransactionCodeCategory {
  constructor (private _value:string) {
    validateStringLength(_value, 3, 'TransactionCodeCategory')
    this._value = _value;
  }

  get value ():string {
    return this._value;
  }
}
