export default class AccountNumber {
  constructor (public _value:string, public _isIbanNumber:boolean) {

  }

  get value () {
    return this._value;
  }

  get isIbanNumber () {
    return this._isIbanNumber
  }
}
