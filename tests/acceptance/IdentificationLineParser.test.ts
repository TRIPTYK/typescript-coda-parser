/* eslint-disable max-statements */
import IdentificationLineParser from '../../src/line-parsers/identification-line-parser';
import type IdentificationLine from '../../src/lines/identification-line';

test('Acceptance IdentificationLineParserTest', () => {
  const parser = new IdentificationLineParser();
  const sampleLineToParse = '0000018011520105        0938409934CODELICIOUS               GEBABEBB   09029308273 00001          984309          834080       2';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : IdentificationLine = parser.parse(sampleLineToParse) as IdentificationLine;
  expect(new Date('2015-01-18')).toStrictEqual(parsedLineValue.creationDate.value);
  expect('201').toStrictEqual(parsedLineValue.bankIdentificationNumber.value);
  expect('05').toStrictEqual(parsedLineValue.applicationCode.value);
  expect(false).toStrictEqual(parsedLineValue.isDuplicate);
  expect('0938409934').toStrictEqual(parsedLineValue.fileReference.value);
  expect('CODELICIOUS').toStrictEqual(parsedLineValue.accountName.value);
  expect('GEBABEBB').toStrictEqual(parsedLineValue.accountBic.value);
  expect('09029308273').toStrictEqual(parsedLineValue.accountCompanyIdentificationNumber.value);
  expect('00001').toStrictEqual(parsedLineValue.externalApplicationCode.value);
  expect('984309').toStrictEqual(parsedLineValue.transactionReference.value);
  expect('834080').toStrictEqual(parsedLineValue.relatedReference.value);
  expect('2').toStrictEqual(parsedLineValue.versionCode.value);
})
