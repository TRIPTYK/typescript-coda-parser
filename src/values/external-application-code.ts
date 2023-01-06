import { validateStringLength } from '../helpers.js';

export default class ExternalApplicationCode {
  constructor (private _value:string) {
    validateStringLength(_value, 5, 'ExternalApplicationCode')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
