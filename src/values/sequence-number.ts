import { validateStringDigitOnly, validateStringLength } from '../helpers.js';

export default class SequenceNumber {
  private declare _value: number;
  constructor (_sequenceNumber : string) {
    validateStringLength(_sequenceNumber, 4, 'SequenceNumber');
    validateStringDigitOnly(_sequenceNumber, 'SequenceNumber');
    const value = parseInt(_sequenceNumber, 10);
    if (value < 0) {
      throw new Error('SequenceNumber must be positive');
    }
    this._value = value;
  }

  public get value (): number {
    return this._value;
  }
}
