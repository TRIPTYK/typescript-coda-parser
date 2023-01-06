import { validateStringDigitOnly, validateStringLength } from '../helpers.js';

export default class PaperStatementSequenceNumber {
  declare public value:number;
  constructor (paperStatementSequenceNumber:string) {
    validateStringLength(paperStatementSequenceNumber, 3, 'PaperStatementSequenceNumber')
    validateStringDigitOnly(paperStatementSequenceNumber, 'PaperStatementSequenceNumber')
    const value = parseInt(paperStatementSequenceNumber);
    if (value < 0) throw new Error(`PaperStatementSequenceNumber ${paperStatementSequenceNumber} cannot be negative`)
    this.value = value;
  }
}
