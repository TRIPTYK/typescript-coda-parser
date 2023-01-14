import IdentificationLine from '../lines/identification-line.js';
import type Line from '../lines/line.js';
import AccountName from '../values/account-name.js';
import ApplicationCode from '../values/application-code.js';
import BankIdentificationNumber from '../values/bank-identification-number.js';
import Bic from '../values/bic.js';
import CodaDate from '../values/coda-date.js';
import CompanyIdentificationNumber from '../values/company-identification-number.js';
import ExternalApplicationCode from '../values/external-application-code.js';
import FileReference from '../values/file-reference.js';
import RelatedReference from '../values/related-reference.js';
import TransactionReference from '../values/transaction-reference.js';
import VersionCode from '../values/verscion-code.js';
import type LineParser from './line-parser-interface.js';

export default class IdentificationLineParser implements LineParser {
  canAcceptString (codaLine: string): boolean {
    return codaLine.length === 128 && codaLine.substring(0, 1) === '0';
  }

  parse (codaLine: string): Line {
    return new IdentificationLine(
      new CodaDate(codaLine.substring(5, 11)),
      new BankIdentificationNumber(codaLine.substring(11, 14)),
      codaLine.substring(16, 17) === 'D',
      new ApplicationCode(codaLine.substring(14, 16)),
      new FileReference(codaLine.substring(24, 34)),
      new AccountName(codaLine.substring(34, 60)),
      new Bic(codaLine.substring(60, 71)),
      new CompanyIdentificationNumber(codaLine.substring(71, 82)),
      new ExternalApplicationCode(codaLine.substring(83, 88)),
      new TransactionReference(codaLine.substring(88, 104)),
      new RelatedReference(codaLine.substring(104, 120)),
      new VersionCode(codaLine.substring(127, 128))
    );
  }
}
