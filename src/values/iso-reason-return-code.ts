import { validateStringLength } from '../helpers.js';

export default class IsoReasonReturnCode {
  constructor (private _value:string) {
    validateStringLength(_value, 4, 'IsoReasonReturnCode')
    this._value = _value.trim();
  }

  get value ():string {
    return this._value;
  }
}
