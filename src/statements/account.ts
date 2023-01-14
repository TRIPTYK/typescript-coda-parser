export default class Account {
  constructor (
    private _name:string,
    private _bic:string,
    private _companyIdentifier:string,
    private _number:string,
    private _currencyCode:string,
    private _countryCode:string
  ) {

  }

  get bic () { return this._bic };
  get name () { return this._name };
  get companyIdentifier () { return this._companyIdentifier };
  get number () { return this._number };
  get currencyCode () { return this._currencyCode };
  get countryCode () { return this._countryCode };
}
