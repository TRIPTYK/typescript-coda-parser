import { validateStringLength } from '../helpers';

export default class AccountDescription {
  constructor (public _value: string) {
    validateStringLength(this._value, 35, 'AccountDescription');
    this._value = this._value.trim();
  }

  get value () {
    return this._value;
  }
}
