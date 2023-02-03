import MessageLineParser from '../../src/line-parsers/message-line-parser';
import type MessageLine from '../../src/lines/message-line';

test('Acceptance MessageLineParserTest', () => {
  const parser = new MessageLineParser()
  const sampleLineToParse = '4 00010005                      THIS IS A PUBLIC MESSAGE                                                                       0';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : MessageLine = parser.parse(sampleLineToParse) as MessageLine;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(1);
  expect(parsedLineValue.sequenceNumberDetail.value).toStrictEqual(5);
  expect(parsedLineValue.message.value).toStrictEqual('THIS IS A PUBLIC MESSAGE');
})
