import { validateStringLength } from '../helpers.js';

export default class FileReference {
  constructor (private _value:string) {
    validateStringLength(_value, 10, 'FileReference')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
