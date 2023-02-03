/* eslint-disable max-statements */
import InitialStateLineParser from '../../src/line-parsers/initial-state-line-parser';
import type InitialStateLine from '../../src/lines/initial-state-line';

test('Acceptance InitialStateLineParserTest AccountIsIbanIsSetCorrectly', () => {
  const parser = new InitialStateLineParser()
  const sampleLineToParse = '13155001548226815 EUR0BE                  0000000004004100241214CODELICIOUS               PROFESSIONAL ACCOUNT               255';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : InitialStateLine = parser.parse(sampleLineToParse) as InitialStateLine;
  expect(parsedLineValue.account.accountNumber.isIbanNumber).toBe(true);
})
test('Acceptance InitialStateLineParserTest', () => {
  const parser = new InitialStateLineParser()
  const sampleLineToParse = '10155001548226815 EUR0BE                  0000000004004100241214CODELICIOUS               PROFESSIONAL ACCOUNT               255';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : InitialStateLine = parser.parse(sampleLineToParse) as InitialStateLine;
  expect('0').toStrictEqual(parsedLineValue.account.accountNumberType.value);
  expect(155).toStrictEqual(parsedLineValue.statementSequenceNumber.value);
  expect('001548226815').toStrictEqual(parsedLineValue.account.accountNumber.value);
  expect('EUR').toStrictEqual(parsedLineValue.account.currency.currencyCode);
  expect('BE').toStrictEqual(parsedLineValue.account.country.countryCode);
  expect(false).toStrictEqual(parsedLineValue.account.accountNumber.isIbanNumber);
  expect(4004.100).toStrictEqual(parsedLineValue.balance.value);
  expect(new Date('2014-12-24')).toStrictEqual(parsedLineValue.date.value);
  expect('CODELICIOUS').toStrictEqual(parsedLineValue.account.name.value);
  expect('PROFESSIONAL ACCOUNT').toStrictEqual(parsedLineValue.account.description.value);
  expect(255).toStrictEqual(parsedLineValue.paperStatementSquenceNumber.value);
})
