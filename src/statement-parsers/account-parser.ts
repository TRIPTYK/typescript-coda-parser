import { getFirstLineOfType } from '../helpers.js';
import IdentificationLine from '../lines/identification-line.js';
import InitialStateLine from '../lines/initial-state-line.js';
import type Line from '../lines/line.js';
import Account from '../statements/account.js';

export default class AccountParser {
  parse (lines:Line[]) {
    const identificationLine = getFirstLineOfType(lines, IdentificationLine);
    const initialStateLine = getFirstLineOfType(lines, InitialStateLine);
    return new Account(
      identificationLine?.accountName.value || '',
      identificationLine?.accountBic.value || '',
      identificationLine?.accountCompanyIdentificationNumber.value || '',
      initialStateLine?.account.accountNumber.value || '',
      initialStateLine?.account.currency.currencyCode || '',
      initialStateLine?.account.country.countryCode || ''
    )
  }
}
