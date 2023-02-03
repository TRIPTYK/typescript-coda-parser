import { validateStringDigitOnly, validateStringLength } from '../helpers.js';

export default class Amount {
  public declare _value:number
  constructor (public amountAsString:string, public includeSign = false) {
    validateStringDigitOnly(amountAsString, 'Amount');
    let negative = 1;
    if (includeSign) {
      validateStringLength(amountAsString, 16, 'Amount');
      negative = amountAsString.substring(0, 1) === '1' ? -1 : 1;
      amountAsString = amountAsString.substring(1);
    } else {
      validateStringLength(amountAsString, 15, 'Amount');
    }
    this._value = parseFloat(amountAsString) * negative / 1000;
  }

  get value () {
    return this._value;
  }
}
