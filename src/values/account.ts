/* eslint-disable max-statements */
import { validateStringLength } from '../helpers.js';
import AccountDescription from './account-description.js';
import AccountName from './account-name.js';
import AccountNumber from './account-number.js';
import AccountNumberType from './account-number-type.js';
import Country from './country.js';
import Currency from './currency.js';

export default class Account {
  public declare _numberType:AccountNumberType;
  public declare _name:AccountName;
  public declare _description : AccountDescription;
  public declare _accountNumber : AccountNumber;
  public declare _currency : Currency;
  public declare _country : Country;

  constructor (accountNumberTypeString:string, accountInfo:string, accountNameInfo:string) {
    validateStringLength(accountInfo, 37, 'Account');
    validateStringLength(accountNameInfo, 61, 'AccountNameInfo');
    const { accountIsIban, accountNumber, accountCurrency, accountCountry } = this.addAccountInfo(accountInfo, accountNumberTypeString)
    this._numberType = new AccountNumberType(accountNumberTypeString);
    this._name = new AccountName(accountNameInfo.substring(0, 26));
    this._description = new AccountDescription(accountNameInfo.substring(26, 61));
    this._accountNumber = new AccountNumber(accountNumber, accountIsIban);
    this._currency = new Currency(accountCurrency);
    this._country = new Country(accountCountry);
  }

  get country ():Country {
    return this._country;
  }

  get currency ():Currency {
    return this._currency;
  }

  get description ():AccountDescription {
    return this._description;
  }

  get name ():AccountName {
    return this._name;
  }

  get accountNumber () : AccountNumber {
    return this._accountNumber;
  }

  get accountNumberType ():AccountNumberType {
    return this._numberType;
  }

  addAccountInfo (accountInfo:string, accountType:string) {
    let accountIsIban = false;
    let accountNumber = '';
    let accountCurrency = '';
    let accountCountry = '';
    if (accountType === '0') {
      accountNumber = accountInfo.substring(0, 12);
      accountCurrency = accountInfo.substring(13, 16);
      accountCountry = accountInfo.substring(17, 19)
    } else if (accountType === '1') {
      accountNumber = accountInfo.substring(0, 34);
      accountCurrency = accountInfo.substring(34, 37);
    } else if (accountType === '2') {
      accountIsIban = true;
      accountNumber = accountInfo.substring(0, 31);
      accountCurrency = accountInfo.substring(34, 37);
      accountCountry = 'BE';
    } else if (accountType === '3') {
      accountIsIban = true;
      accountNumber = accountInfo.substring(0, 34);
      accountCurrency = accountInfo.substring(34, 37);
    }
    return { accountIsIban, accountNumber, accountCurrency, accountCountry }
  }
}
