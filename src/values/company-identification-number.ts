import { validateStringLength } from '../helpers.js';

export default class CompanyIdentificationNumber {
  constructor (private _value:string) {
    validateStringLength(_value, 11, 'CompanyIdentificationNumber')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
