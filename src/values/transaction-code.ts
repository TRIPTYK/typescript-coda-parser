import { validateStringDigitOnly, validateStringLength } from '../helpers.js';
import TransactionCodeCategory from './transaction-code-category.js';
import TransactionCodeOperation from './transaction-code-operation.js';
import TransactionCodeType from './transaction-code-type.js';
import TransactionCodeFamily from './transition-code-family.js';

export default class TransactionCode {
  private declare _type: TransactionCodeType;
  private declare _family: TransactionCodeFamily;
  private declare _operation: TransactionCodeOperation;
  private declare _category:TransactionCodeCategory
  constructor (_transactionCode:string) {
    validateStringLength(_transactionCode, 8, 'TransactionCode');
    validateStringDigitOnly(_transactionCode, 'TransactionCode');
    this._type = new TransactionCodeType(_transactionCode.substring(0, 1));
    this._family = new TransactionCodeFamily(_transactionCode.substring(1, 3));
    this._operation = new TransactionCodeOperation(_transactionCode.substring(3, 5));
    this._category = new TransactionCodeCategory(_transactionCode.substring(5, 8));
  }

  public get type (): TransactionCodeType { return this._type; }
  public get family (): TransactionCodeFamily { return this._family; }
  public get operation (): TransactionCodeOperation { return this._operation; }
  public get category (): TransactionCodeCategory { return this._category; }
}
