/* eslint-disable max-statements */

import InformationPart3LineParser from '../../src/line-parsers/information-part3-line-parser';
import type InformationPart3Line from '../../src/lines/information-part3-line';

test('Acceptance InformationPart3LineParserTest', () => {
  const parser = new InformationPart3LineParser()
  const sampleLineToParse = '3300010001SOME INFORMATION ABOUT THIS TRANSACTION                                                                            0 0';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : InformationPart3Line = parser.parse(sampleLineToParse) as InformationPart3Line;
  expect(1).toStrictEqual(parsedLineValue.sequenceNumber.value);
  expect(1).toStrictEqual(parsedLineValue.sequenceNumberDetail.value);
  expect('SOME INFORMATION ABOUT THIS TRANSACTION').toStrictEqual(parsedLineValue.message.value);
})
