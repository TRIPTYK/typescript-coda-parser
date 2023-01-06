import { validateStringLength } from '../helpers.js';

export default class Bic {
  constructor (private _value:string) {
    validateStringLength(_value, 11, 'Bic')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
