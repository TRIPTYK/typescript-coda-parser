import type SepaDirectDebit from '../values/sepa-direct-debit.js';
import type AccountOtherParty from './account-other-party.js';

export default class Transaction {
  constructor (
      private _account: AccountOtherParty,
      private _statementSequence: number,
      private _transactionSequence: number,
        private _transactionDate: Date,
        private _valueDate: Date,
        private _amount: number,
        private _message: string,
        private _structuredMessage: string,
        private _sepaDirectDebit: SepaDirectDebit | null
  ) {}

  get account (): AccountOtherParty { return this._account; }
  get amount (): number { return this._amount; }
  get message (): string { return this._message; }
  get sepaDirectDebit (): SepaDirectDebit | null { return this._sepaDirectDebit; }
  get statementSequence (): number { return this._statementSequence; }
  get structuredMessage (): string { return this._structuredMessage; }
  get transactionDate (): Date { return this._transactionDate; }
  get transactionSequence (): number { return this._transactionSequence; }
  get valueDate (): Date { return this._valueDate; }
}
