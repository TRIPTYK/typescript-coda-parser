import TransactionPart2LineParser from '../../src/line-parsers/transaction-part2-line-parser';
import type TransactionPart2Line from '../../src/lines/transaction-part2-line';

test('TransactionPart2LineParserTest', () => {
  const parser = new TransactionPart2LineParser()
  const sampleLineToParse = '2200010000  ANOTHER MESSAGE                                           54875                       GEBCEEBB                   1 0';
  const parsedLineValue : TransactionPart2Line = parser.parse(sampleLineToParse) as TransactionPart2Line;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(1);
  expect(parsedLineValue.sequenceNumberDetail.value).toStrictEqual(0);
  expect(parsedLineValue.message.value).toStrictEqual('ANOTHER MESSAGE');
  expect(parsedLineValue.otherAccountBic.value).toStrictEqual('GEBCEEBB');
  expect(parsedLineValue.categoryPurpose.value).toStrictEqual('');
  expect(parsedLineValue.purpose.value).toStrictEqual('');
})
