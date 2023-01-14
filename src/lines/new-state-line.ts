import type AccountFull from '../values/account-full.js';
import type Amount from '../values/amount.js';
import type CodaDate from '../values/coda-date.js';
import type StatementSequenceNumber from '../values/statement-sequence-number.js';
import Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class NewStateLine extends Line {
  constructor (
    private _statementSequenceNumber:StatementSequenceNumber,
    private _accountFull:AccountFull,
    private _balance:Amount,
    private _date:CodaDate) {
    super()
  }

  get statementSequenceNumber (): StatementSequenceNumber { return this._statementSequenceNumber; }
  get accountFull (): AccountFull { return this._accountFull; }
  get balance (): Amount { return this._balance; }
  get date (): CodaDate { return this._date; }

  getLineType (): LineType {
    return LineType.NewState;
  }
}
