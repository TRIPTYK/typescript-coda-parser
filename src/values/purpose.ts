import { validateStringLength } from '../helpers.js';

export default class Purpose {
  constructor (private _value:string) {
    validateStringLength(_value, 4, 'Purpose')
    this._value = _value.trim();
  }

  get value ():string {
    return this._value;
  }
}
