import { validateStringLength } from '../helpers.js';

export default class ApplicationCode {
  constructor (private _value:string) {
    validateStringLength(_value, 2, 'ApplicationCode');
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
