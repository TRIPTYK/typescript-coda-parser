/* eslint-disable max-statements */
import { filterLinesOfTypes, getFirstLineOfType } from '../helpers.js';
import InformationPart1Line from '../lines/information-part1-line.js';
import type InformationPart2Line from '../lines/information-part2-line.js';
import type InformationPart3Line from '../lines/information-part3-line.js';
import type Line from '../lines/line.js';
import { LineType } from '../lines/LineType.enum.js';
import TransactionPart1Line from '../lines/transaction-part1-line.js';
import TransactionPart2Line from '../lines/transaction-part2-line.js';
import type TransactionPart3Line from '../lines/transaction-part3-line.js';
import Transaction from '../statements/transaction.js';
import type SepaDirectDebit from '../values/sepa-direct-debit';
import AccountOtherPartyParser from './account-other-party-parser.js';

export default class TransactionParser {
  parse (lines:Line[]) {
    const transactionPart1Line = getFirstLineOfType(lines, TransactionPart1Line);
    let transactionDate = new Date();
    let valueDate = new Date();
    let amount = 0;
    let sepaDirectDebit: SepaDirectDebit | null = null;
    let statementSquence = 0;
    let transactionSequence = 0;
    if (transactionPart1Line != null) {
      valueDate = transactionPart1Line.valueDate.value;
      transactionDate = transactionPart1Line.transactionDate.value;
      amount = transactionPart1Line.amount.value;
      statementSquence = transactionPart1Line.statementSequenceNumber.value;
      transactionSequence = transactionPart1Line.sequenceNumber.value;
      if (transactionPart1Line.messageOrStructuredMessage.structuredMessage != null) {
        sepaDirectDebit = transactionPart1Line.messageOrStructuredMessage.structuredMessage.sepaDirectDebit;
      }
    }
    const informationPart1Line = getFirstLineOfType(lines, InformationPart1Line);
    let structuredMessage = '';
    if (transactionPart1Line && transactionPart1Line.messageOrStructuredMessage.structuredMessage !== undefined && transactionPart1Line.messageOrStructuredMessage.structuredMessage.value !== null &&
            transactionPart1Line.messageOrStructuredMessage.structuredMessage.value !== '') {
      structuredMessage = transactionPart1Line?.messageOrStructuredMessage.structuredMessage.value;
    } else if (informationPart1Line && informationPart1Line.messageOrStructuredMessage.structuredMessage.value !== null &&
            informationPart1Line.messageOrStructuredMessage.structuredMessage.value !== '') {
      structuredMessage = informationPart1Line.messageOrStructuredMessage.structuredMessage.value;
    }
    const linesWithAccountInfo = filterLinesOfTypes(lines, [LineType.TransactionPart2, LineType.TransactionPart3]);
    const accountOtherPartyParser = new AccountOtherPartyParser();
    const account = accountOtherPartyParser.parse(linesWithAccountInfo);
    const message = this.constructMessage(lines);
    return new Transaction(
      account,
      statementSquence,
      transactionSequence,
      transactionDate,
      valueDate,
      amount,
      message,
      structuredMessage,
      sepaDirectDebit)
  }

  constructMessage (lines:Line[]) {
    const transactionLines = filterLinesOfTypes(lines, [LineType.TransactionPart1, LineType.TransactionPart2, LineType.TransactionPart3]);

    let message = transactionLines.reduce((prev, line) => {
      let m = null;
      switch (line.getLineType()) {
        case LineType.TransactionPart1:
          m = (line as TransactionPart1Line).messageOrStructuredMessage.message.value;
          break;
        case LineType.TransactionPart2:
          m = (line as TransactionPart2Line).message.value;
          break;
        case LineType.TransactionPart3:
          m = (line as TransactionPart3Line).message.value;
          break;
        default: throw new Error('Unknown line type');
      }
      return prev + (m !== undefined ? m : '');
    }, '');
    if (message === '' || message === undefined) {
      const transactionLine = getFirstLineOfType(lines, TransactionPart2Line);

      if (transactionLine != null && transactionLine.clientReference !== null) {
        message = transactionLine.clientReference.value;
      }
      const informationLines = filterLinesOfTypes(lines, [LineType.InformationPart1, LineType.InformationPart2, LineType.InformationPart3]);
      if (message !== null && message !== '') {
        message += ' ';
      }
      message += informationLines.reduce((prev, line) => {
        let m = null;
        switch (line.getLineType()) {
          case LineType.InformationPart1:
            m = (line as InformationPart1Line).messageOrStructuredMessage.message;
            break;
          case LineType.InformationPart2:
            m = (line as InformationPart2Line).message.value;
            break;
          case LineType.InformationPart3:
            m = (line as InformationPart3Line).message.value;
            break;
        }
        return prev + (m != null ? m : '');
      }, '');
    }
    return message.trim();
  }
}
