/* eslint-disable max-statements */
import { validateStringLength } from '../helpers';
import AccountDescription from './account-description';
import AccountName from './account-name';
import AccountNumber from './account-number';
import AccountNumberType from './account-number-type';
import Country from './country';
import Currency from './currency';

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
    const { accountIsIban, accountNumber, accountCurrency, accountCountry } = this.addAccountInfo(accountInfo, accountNameInfo)
    this._numberType = new AccountNumberType(accountNumberTypeString);
    this._name = new AccountName(accountNameInfo.substring(0, 26));
    this._description = new AccountDescription(accountNameInfo.substring(26, 35));
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
      accountCurrency = accountInfo.substring(13, 3);
      accountCountry = accountInfo.substring(17, 2)
    } else if (accountType === '1') {
      accountNumber = accountInfo.substring(0, 34);
      accountCurrency = accountInfo.substring(34, 3);
    } else if (accountType === '2') {
      accountIsIban = true;
      accountNumber = accountInfo.substring(0, 31);
      accountCurrency = accountInfo.substring(34, 3);
      accountCountry = 'BE';
    } else if (accountType === '3') {
      accountIsIban = true;
      accountNumber = accountInfo.substring(0, 34);
      accountCurrency = accountInfo.substring(34, 3);
    }
    return { accountIsIban, accountNumber, accountCurrency, accountCountry }
  }
}
