/* eslint-disable max-statements */
import InformationPart1lineParser from '../../src/line-parsers/information-part1-line-parser';
import type InformationPart1Line from '../../src/lines/information-part1-line';

test('Acceptance InformationPart1LineParserTest', () => {
  const parser = new InformationPart1lineParser();
  const sampleLineToParse = '31000100010007500005482        004800001001BVBA.BAKKER PIET                                                                  1 0';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : InformationPart1Line = parser.parse(sampleLineToParse) as InformationPart1Line;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(1);
  expect(1).toStrictEqual(parsedLineValue.sequenceNumberDetail.value);
  expect('0007500005482').toStrictEqual(parsedLineValue.bankReference.value);
  expect('0').toStrictEqual(parsedLineValue.transactionCode.type.value);
  expect('04').toStrictEqual(parsedLineValue.transactionCode.family.value);
  expect('80').toStrictEqual(parsedLineValue.transactionCode.operation.value);
  expect('000').toStrictEqual(parsedLineValue.transactionCode.category.value);
  expect(parsedLineValue.messageOrStructuredMessage.message).toBeUndefined();
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage).not.toBeUndefined();
  expect('001').toStrictEqual(parsedLineValue.messageOrStructuredMessage.structuredMessage.structuredMessageType);
  expect('BVBA.BAKKER PIET                                                      ').toStrictEqual(parsedLineValue.messageOrStructuredMessage.structuredMessage.structuredMessage);
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.value).toBe('');
})

test('Acceptance InformationPart1LineParserTest witn accent', () => {
  const parser = new InformationPart1lineParser();
  const sampleLineToParse = '31000100073403076534383000143  335370000ekeningING Plus BE12 3215 1548 2121 EUR Compte à vue BE25 3215 2158 2315             0 1';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : InformationPart1Line = parser.parse(sampleLineToParse) as InformationPart1Line;
  expect(1).toStrictEqual(parsedLineValue.sequenceNumber.value);
  expect('ekeningING Plus BE12 3215 1548 2121 EUR Compte à vue BE25 3215 2158 2315').toStrictEqual(parsedLineValue.messageOrStructuredMessage.message?.value);
});
