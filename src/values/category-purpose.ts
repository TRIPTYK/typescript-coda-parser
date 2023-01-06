import { validateStringLength } from '../helpers.js';

export default class CategoryPurpose {
  constructor (private _value:string) {
    validateStringLength(_value, 4, 'CategoryPurpose')
    this._value = _value.trim();
  }

  get value ():string {
    return this._value;
  }
}
