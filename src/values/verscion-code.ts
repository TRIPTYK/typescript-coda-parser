import { validateStringLength } from '../helpers.js';

export default class VersionCode {
  constructor (private _value:string) {
    validateStringLength(_value, 1, 'VersionCode');
  }

  get value () {
    return this._value;
  }
}
