export default class Currency {
  constructor (public _currencyCode:string) {

  }

  get currencyCode () {
    return this._currencyCode;
  }
}
