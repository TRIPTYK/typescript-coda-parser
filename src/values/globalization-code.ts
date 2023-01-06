import { validateStringLength } from '../helpers.js';

export default class GlobalizationCode {
  private declare _value:number
  constructor (value:string) {
    validateStringLength(value, 1, 'GlobalizationCode');
    this._value = parseInt(value, 10);
  }

  get value ():number {
    return this._value;
  }
}
