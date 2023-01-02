export default class Country {
  constructor (public _countryCode : string) {

  }

  get countryCode () {
    return this._countryCode;
  }
}
