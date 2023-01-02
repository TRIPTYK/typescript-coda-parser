import Helpers from '../helpers';

export default class PaperStatementSequenceNumber {
  declare public value:number;
  constructor (paperStatementSequenceNumber:string) {
    Helpers.validateStringLength(paperStatementSequenceNumber, 3, 'PaperStatementSequenceNumber')
    Helpers.validateStringDigitOnly(paperStatementSequenceNumber, 'PaperStatementSequenceNumber')
    const value = parseInt(paperStatementSequenceNumber);
    if (value < 0) throw new Error(`PaperStatementSequenceNumber ${paperStatementSequenceNumber} cannot be negative`)
    this.value = value;
  }
}
