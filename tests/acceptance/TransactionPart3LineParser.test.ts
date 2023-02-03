import TransactionPart3LineParser from '../../src/line-parsers/transaction-part3-line-parser';
import type TransactionPart3Line from '../../src/lines/transaction-part3-line';

test('TransactionPart3LineParserTest', () => {
  const parser = new TransactionPart3LineParser();
  const sample = '2300010000BE54805480215856                  EURBVBA.BAKKER PIET                         MESSAGE                              0 1';
  expect(parser.canAcceptString(sample)).toStrictEqual(true);
  const parsedLineValue : TransactionPart3Line = parser.parse(sample)as TransactionPart3Line;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(1);
  expect(parsedLineValue.sequenceNumberDetail.value).toStrictEqual(0);
  expect(parsedLineValue.otherAccountNumberAndCurrency.value).toStrictEqual('BE54805480215856                  EUR');
  expect(parsedLineValue.otherAccountName.value).toStrictEqual('BVBA.BAKKER PIET');
  expect(parsedLineValue.message.value).toStrictEqual('MESSAGE');
})
