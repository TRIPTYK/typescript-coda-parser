import type AccountName from '../values/account-name.js';
import type ApplicationCode from '../values/application-code.js';
import type BankIdentificationNumber from '../values/bank-identification-number.js';
import type Bic from '../values/bic.js';
import type CodaDate from '../values/coda-date.js';
import type CompanyIdentificationNumber from '../values/company-identification-number.js';
import type ExternalApplicationCode from '../values/external-application-code.js';
import type FileReference from '../values/file-reference.js';
import type RelatedReference from '../values/related-reference.js';
import type TransactionReference from '../values/transaction-reference.js';
import type VersionCode from '../values/verscion-code.js';
import type Line from './line.js';
import { LineType } from './LineType.enum.js';

export default class IdentificationLine implements Line {
  public constructor (
    private _creationDate:CodaDate,
    private _bankIdentificationNumber:BankIdentificationNumber,
    private _isDuplicate:boolean,
    private _applicationCode:ApplicationCode,
    private _fileReference:FileReference,
    private _accountName:AccountName,
    private _accountBic:Bic,
    private _accountCompanyIdentificationNumber:CompanyIdentificationNumber,
    private _externalApplicationCode:ExternalApplicationCode,
    private _transactionReference:TransactionReference,
    private _relatedReference:RelatedReference,
    private _versionCode:VersionCode

  ) {

  }

  public get creationDate (): CodaDate {
    return this._creationDate;
  }

  public get isDuplicate (): boolean {
    return this._isDuplicate;
  }

  public get applicationCode (): ApplicationCode {
    return this._applicationCode;
  }

  public get fileReference (): FileReference {
    return this._fileReference;
  }

  public get accountName (): AccountName {
    return this._accountName;
  }

  public get accountBic (): Bic {
    return this._accountBic;
  }

  public get accountCompanyIdentificationNumber (): CompanyIdentificationNumber {
    return this._accountCompanyIdentificationNumber;
  }

  public get externalApplicationCode (): ExternalApplicationCode {
    return this._externalApplicationCode;
  }

  public get transactionReference (): TransactionReference {
    return this._transactionReference;
  }

  public get relatedReference (): RelatedReference {
    return this._relatedReference;
  }

  public get versionCode (): VersionCode {
    return this._versionCode;
  }

  public get bankIdentificationNumber (): BankIdentificationNumber {
    return this._bankIdentificationNumber;
  }

  public getLineType (): LineType {
    return LineType.Identification;
  }
}
