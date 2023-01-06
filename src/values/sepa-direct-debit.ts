import { getTrimmedData, validateStringMultipleLengths } from '../helpers.js';
import CodaDate from './coda-date.js';

export default class SepaDirectDebit {
  private declare _settlementDate: CodaDate;
  private declare _mandateReference: string;
  private declare _paidReason:number;
  private declare _scheme: number;
  private declare _type: number;
  private declare _creditorIndentificationCode : string;
  constructor (_value:string) {
    validateStringMultipleLengths(_value, [50, 70], 'SepaDirectDebit')
    this._settlementDate = new CodaDate(_value.substring(0, 6));
    this._type = parseInt(_value.substring(6, 7));
    this._scheme = parseInt(_value.substring(7, 8));
    this._paidReason = parseInt(_value.substring(8, 9));
    this._creditorIndentificationCode = getTrimmedData(_value, 9);
    this._mandateReference = getTrimmedData(_value, 44);
  }

  get creditorIndentificationCode (): string {
    return this._creditorIndentificationCode;
  }

  get type (): number {
    return this._type;
  }

  get settlementDate (): CodaDate {
    return this._settlementDate;
  }

  get scheme (): number {
    return this._scheme;
  }

  get paidReason (): number {
    return this._paidReason;
  }

  get mandateReference (): string {
    return this._mandateReference;
  }
}
