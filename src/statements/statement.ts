import type Account from './account.js';
import type Transaction from './transaction.js';

export default class Statement {
  constructor (
    private _date:Date,
    private _account:Account,
    private _initialBalance:number,
    private _newBalance:number,
    private _informationalMessage:string,
    private _transactions:Transaction[]) {
  }

  get date ():Date { return this._date }
  get account ():Account { return this._account }
  get initialBalance ():number { return this._initialBalance }
  get newBalance ():number { return this._newBalance }
  get informationalMessage ():string { return this._informationalMessage }
  get transactions ():Transaction[] { return this._transactions }
}
