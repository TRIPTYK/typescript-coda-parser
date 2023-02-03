import type Account from '../values/account.js';
import type Amount from '../values/amount.js';
import type CodaDate from '../values/coda-date.js';
import type PaperStatementSequenceNumber from '../values/paper-statement-sequence-number.js';
import type StatementSequenceNumber from '../values/statement-sequence-number.js';
import type Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class InitialStateLine implements Line {
  public constructor (
    private _paperStatementSquenceNumber :PaperStatementSequenceNumber,
    private _statementSequenceNumber : StatementSequenceNumber,
    private _account : Account,
    private _balance:Amount,
    private _date:CodaDate
  ) {
  }

  public get account () {
    return this._account;
  }

  public get balance () {
    return this._balance;
  }

  public get date () {
    return this._date;
  }

  public get paperStatementSquenceNumber () {
    return this._paperStatementSquenceNumber;
  }

  public get statementSequenceNumber () {
    return this._statementSequenceNumber
  }

  getLineType (): LineType {
    return LineType.InitialState;
  }
}
