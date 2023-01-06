import { validateStringLength } from '../helpers.js';

export default class ClientReference {
  constructor (private _value:string) {
    validateStringLength(_value, 35, 'ClientReference')
    this._value = _value;
  }

  get value ():string {
    return this._value;
  }
}
