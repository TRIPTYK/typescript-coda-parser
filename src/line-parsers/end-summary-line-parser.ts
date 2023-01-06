import EndSummaryLine from '../lines/end-summary-line.js';
import Amount from '../values/amount.js';
import type LineParser from './line-parser-interface.js';

export default class EndSummaryLineParser implements LineParser {
  canAcceptString (codaLine:string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 1) === '9';
  }

  parse (codaLine:string): EndSummaryLine {
    return new EndSummaryLine(
      new Amount(codaLine.substring(22, 37)),
      new Amount(codaLine.substring(37, 52))
    );
  }
}
