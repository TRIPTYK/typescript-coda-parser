import type Amount from '../values/amount.js';
import type Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class EndSummaryLine implements Line {
  constructor (private _debitAmount:Amount, private _creditAmount:Amount) {

  }

  get debitAmount (): Amount { return this._debitAmount; }
  get creditAmount (): Amount { return this._creditAmount; }

  getLineType (): LineType {
    return LineType.EndSummary;
  }
}
