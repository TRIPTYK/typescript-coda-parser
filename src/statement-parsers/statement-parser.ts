/* eslint-disable max-statements */
import { filterLinesOfTypes, getFirstLineOfType } from '../helpers.js';
import IdentificationLine from '../lines/identification-line.js';
import type InformationOrTransactionLine from '../lines/information-or-transaction-line-interface.js';
import InitialStateLine from '../lines/initial-state-line.js';
import type Line from '../lines/line.js';
import { LineType } from '../lines/LineType.enum.js';
import MessageLine from '../lines/message-line.js';
import NewStateLine from '../lines/new-state-line.js';
import Statement from '../statements/statement.js';
import AccountParser from './account-parser.js';
import MessageParser from './message-parser.js';
import TransactionParser from './transaction-parser.js';

export default class StatementParser {
  parse (lines:Line[]) {
    let date = new Date();
    const identificationLine:IdentificationLine | undefined = getFirstLineOfType(lines, IdentificationLine);
    if (identificationLine !== undefined) date = identificationLine.creationDate.value;
    let initialBalance = 0;
    const initialStateLine = getFirstLineOfType(lines, InitialStateLine);
    if (initialStateLine != null) initialBalance = initialStateLine.balance.value;
    let newBalance = 0;
    const newStateLine = getFirstLineOfType(lines, NewStateLine);
    if (newStateLine != null) newBalance = newStateLine.balance.value;

    const messageParser = new MessageParser();
    const informationalMessage = messageParser.parse(lines.filter(line => line.constructor === MessageLine) as MessageLine[]);
    const accountParser = new AccountParser();
    const account = accountParser.parse(filterLinesOfTypes(lines, [LineType.Identification, LineType.InitialState]));

    const transactionLines = this.groupTransactions(filterLinesOfTypes(lines, [LineType.InformationPart1, LineType.InformationPart2, LineType.InformationPart3, LineType.TransactionPart1, LineType.TransactionPart2, LineType.TransactionPart3]) as InformationOrTransactionLine[]);
    const transactionParser = new TransactionParser();
    const transactions = Array.from(transactionLines).map(transaction => transactionParser.parse(transaction));

    return new Statement(
      date,
      account,
      initialBalance,
      newBalance,
      informationalMessage,
      transactions
    )
  }

  groupTransactions (lines:InformationOrTransactionLine[]) {
    let idx = -1;
    let sequenceNumber = -1;
    const transactions:Map<number, InformationOrTransactionLine[]> = new Map<number, InformationOrTransactionLine[]>();

    lines.forEach((line) => {
      if (transactions.size === 0 || sequenceNumber !== line.sequenceNumber.value) {
        sequenceNumber = line.sequenceNumber.value;
        idx += 1;
        transactions.set(idx, [line]);
      } else {
        transactions.get(idx)?.push(line);
      }
    });
    return transactions.values();
  }
}
