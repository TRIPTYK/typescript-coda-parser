/* eslint-disable max-statements */
import { getFirstLineOfType } from '../helpers.js';
import type Line from '../lines/line.js';
import TransactionPart2Line from '../lines/transaction-part2-line.js';
import TransactionPart3Line from '../lines/transaction-part3-line.js';
import AccountOtherParty from '../statements/account-other-party.js';

export default class AccountOtherPartyParser {
  parse (lines:Line[]) {
    const transactionPart2LIne = getFirstLineOfType(lines, TransactionPart2Line);
    const transactionPart3LIne = getFirstLineOfType(lines, TransactionPart3Line);

    let bic = '';
    if (transactionPart2LIne != null) {
      bic = transactionPart2LIne.otherAccountBic.value;
    }
    let number = '';
    let name = '';
    let currency = '';
    if (transactionPart3LIne != null) {
      number = transactionPart3LIne.otherAccountNumberAndCurrency.value;
      name = transactionPart3LIne.otherAccountName.value;
      if (number) {
        const lastSpace = number.lastIndexOf(' ');
        if (lastSpace !== -1) {
          currency = number.substring(lastSpace).trim();
          number = number.substring(0, lastSpace).trim();
        }
      }
    }
    return new AccountOtherParty(bic, number, name, currency);
  }
}
