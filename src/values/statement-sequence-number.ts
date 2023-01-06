import { validateStringDigitOnly, validateStringLength } from '../helpers.js';

export default class StatementSequenceNumber {
  public declare value:number;
  constructor (value:string) {
    validateStringLength(value, 3, 'StatementSequenceNumber');
    validateStringDigitOnly(value, 'StatementSequenceNumber');
    this.value = parseInt(value);
  }
}
