import { formatDateString, validateStringDigitOnly, validateStringLength } from '../helpers'

export default class CodaDate {
  public declare _value:Date
  constructor (public _dateString:string) {
    validateStringLength(this._dateString, 6, 'Date');
    validateStringDigitOnly(this._dateString, 'Date');
    this._value = new Date(formatDateString(this._dateString))
  }

  get value () {
    return this._value;
  }
}
