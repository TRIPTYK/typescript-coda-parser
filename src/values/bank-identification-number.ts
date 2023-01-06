import { validateStringLength } from '../helpers.js';

export default class BankIdentificationNumber {
  constructor (private _value:string) {
    validateStringLength(_value, 3, 'BankIdentificationNumber')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
