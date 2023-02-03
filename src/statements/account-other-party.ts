export default class AccountOtherParty {
  constructor (
        private _bic: string,
        private _number: string,
        private _name: string,
        private _currency: string
  ) {

  }

  get bic (): string { return this._bic };
  get number (): string { return this._number };
  get name (): string { return this._name };
  get currency (): string { return this._currency };
}
