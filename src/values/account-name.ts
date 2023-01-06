import { validateStringMultipleLengths } from '../helpers.js';

export default class AccountName {
  constructor (public _value:string) {
    validateStringMultipleLengths(_value, [26, 35], 'AccountName');
    this._value = this._value.trim();
  }

  get value () {
    return this._value;
  }
}
