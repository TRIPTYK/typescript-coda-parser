import EndSummaryLineParser from '../../src/line-parsers/end-summary-line-parser';

test('Acceptance EndSmmmaryLineParserTest', () => {
  const parser = new EndSummaryLineParser();
  const sampleLineToParse = '9               000015000000016837520000000003967220                                                                           1';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue = parser.parse(sampleLineToParse);
  expect(parsedLineValue.debitAmount.value).toStrictEqual(16837.52);
  expect(parsedLineValue.creditAmount.value).toStrictEqual(3967.22);
})
