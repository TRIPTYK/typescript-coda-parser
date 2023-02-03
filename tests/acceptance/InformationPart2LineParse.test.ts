/* eslint-disable max-statements */

import InformationPart2LineParser from '../../src/line-parsers/information-part2-line-parser';
import type InformationPart2Line from '../../src/lines/information-part2-line';

test('Acceptance InformationPart2LineParserTest', () => {
  const parser = new InformationPart2LineParser()
  const sampleLineToParse = '3200010001MAIN STREET 928                    5480 SOME CITY                                                                  0 0';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : InformationPart2Line = parser.parse(sampleLineToParse) as InformationPart2Line;
  expect(1).toStrictEqual(parsedLineValue.sequenceNumber.value);
  expect(1).toStrictEqual(parsedLineValue.sequenceNumberDetail.value);
  expect('MAIN STREET 928                    5480 SOME CITY').toStrictEqual(parsedLineValue.message.value);
})
