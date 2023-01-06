import { validateStringLength } from '../helpers.js';

export default class RelatedReference {
  constructor (private _value:string) {
    validateStringLength(_value, 16, 'RelatedReference')
    this._value = _value.trim();
  }

  get value () {
    return this._value;
  }
}
