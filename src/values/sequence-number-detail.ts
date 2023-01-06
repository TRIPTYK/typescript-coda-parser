import { validateStringLength, validateStringDigitOnly } from '../helpers.js';

export default class SequenceNumberDetail {
  private declare _value: number;
  constructor (_sequenceNumberDetail : string) {
    validateStringLength(_sequenceNumberDetail, 4, 'SequenceNumberDetail');
    validateStringDigitOnly(_sequenceNumberDetail, 'SequenceNumberDetail');
    const value = parseInt(_sequenceNumberDetail);
    if (value < 0) {
      throw new Error('SequenceNumberDetail must be positive');
    }
    this._value = value;
  }

  public get value (): number {
    return this._value;
  }
}
