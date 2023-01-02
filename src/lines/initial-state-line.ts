import type Account from '../values/account.js';
import type Amount from '../values/amount.js';
import type CodaDate from '../values/coda-date.js';
import type PaperStatementSequenceNumber from '../values/paper-statement-sequence-number.js';
import type StatementSequenceNumber from '../values/statement-sequence-number.js';
import type { Line } from './line.js';
import { LineType } from './LineType.enum.js';

export default class InitialStateLine implements Line {
  constructor (
    public _paperStatementSquenceNumber :PaperStatementSequenceNumber,
    public _statementSequenceNumber : StatementSequenceNumber,
    public _account : Account,
    public _balance:Amount,
    public _date:CodaDate
  ) {

  }

  get account () {
    return this._account;
  }

  get balance () {
    return this._balance;
  }

  get date () {
    return this._date;
  }

  get paperStatementSquenceNumber () {
    return this._paperStatementSquenceNumber;
  }

  get statementSequenceNumber () {
    return this._statementSequenceNumber
  }

  getLineType (): LineType {
    return LineType.InitialState;
  }
}
