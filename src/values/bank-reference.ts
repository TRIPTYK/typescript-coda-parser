import { validateStringLength } from '../helpers.js';

export default class BankReference {
  private declare _value: string;
  constructor (_bankReference : string) {
    validateStringLength(_bankReference, 21, 'BankReference');

    this._value = _bankReference.trim();
  }

  public get value (): string {
    return this._value;
  }
}
