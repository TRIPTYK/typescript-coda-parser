import Helpers from '../helpers';

export default class StatementSequenceNumber {
  public declare value:number;
  constructor (value:string) {
    Helpers.validateStringLength(value, 3, 'StatementSequenceNumber');
    Helpers.validateStringDigitOnly(value, 'StatementSequenceNumber');
    this.value = parseInt(value);
  }
}
