import { validateStringLength } from '../helpers.js';

export default class AccountFull {
  constructor (private _value:string) {
    validateStringLength(_value, 37, 'AccountFull');
    this._value = _value.trim();
  }

  get value ():string {
    return this._value;
  }
}
