import { validateStringDigitOnly, validateStringLength } from '../helpers.js';

export default class TransactionCodeFamily {
  constructor (private _value:string) {
    validateStringLength(_value, 2, 'TransactionCodeFamily');
    validateStringDigitOnly(_value, 'TransactionCodeFamily');
    this._value = _value;
  }

  get value ():string {
    return this._value;
  }
}
