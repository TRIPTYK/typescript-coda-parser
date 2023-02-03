/* eslint-disable max-statements */
import TransactionPart1LineParser from '../../src/line-parsers/transaction-part1-line-parser';
import type TransactionPart1Line from '../../src/lines/transaction-part1-line';

test('Acceptance TransactionPart1LineParserTest', () => {
  const parser = new TransactionPart1LineParser()
  const sampleLineToParse = '21000100000001200002835        0000000001767820251214001120000112/4554/46812   813                                 25121421401 0';
  expect(parser.canAcceptString(sampleLineToParse)).toBe(true);
  const parsedLineValue : TransactionPart1Line = parser.parse(sampleLineToParse) as TransactionPart1Line;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(1);
  expect(parsedLineValue.sequenceNumberDetail.value).toStrictEqual(0);
  expect(parsedLineValue.bankReference.value).toStrictEqual('0001200002835');
  expect(parsedLineValue.amount.value).toStrictEqual(1767.82);
  expect(parsedLineValue.valueDate.value).toStrictEqual(new Date('2014-12-25'));
  expect(parsedLineValue.transactionCode.type.value).toStrictEqual('0');
  expect(parsedLineValue.transactionCode.family.value).toStrictEqual('01');
  expect(parsedLineValue.transactionCode.operation.value).toStrictEqual('12');
  expect(parsedLineValue.transactionCode.category.value).toStrictEqual('000');
  expect(parsedLineValue.messageOrStructuredMessage.message.value).toStrictEqual('112/4554/46812   813');
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage).toBeUndefined();
  expect(parsedLineValue.transactionDate.value).toStrictEqual(new Date('2014-12-25'));
  expect(parsedLineValue.statementSequenceNumber.value).toStrictEqual(214);
  expect(parsedLineValue.globalisationCode.value).toStrictEqual(0);
})
test('Acceptance TransactionPart1LineParserTest with structured message', () => {
  const parser = new TransactionPart1LineParser()
  const sampleLineToParse = '21000100000001200002835        0000000002767820251214001120001101112455446812  813                                 25121421401 0'
  const parsedLineValue : TransactionPart1Line = parser.parse(sampleLineToParse) as TransactionPart1Line;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(1);
  expect(parsedLineValue.sequenceNumberDetail.value).toStrictEqual(0);
  expect(parsedLineValue.bankReference.value).toStrictEqual('0001200002835');
  expect(parsedLineValue.amount.value).toStrictEqual(2767.82);
  expect(parsedLineValue.valueDate.value).toStrictEqual(new Date('2014-12-25'));
  expect(parsedLineValue.transactionCode.type.value).toStrictEqual('0');
  expect(parsedLineValue.transactionCode.family.value).toStrictEqual('01');
  expect(parsedLineValue.transactionCode.operation.value).toStrictEqual('12');
  expect(parsedLineValue.transactionCode.category.value).toStrictEqual('000');
  expect(parsedLineValue.messageOrStructuredMessage.message).toBeUndefined();
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage).not.toBeNull();
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.structuredMessageType).toStrictEqual('101');
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.structuredMessage).toStrictEqual('112455446812  813                                 ');
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.value).toStrictEqual('112455446812');
  expect(parsedLineValue.transactionDate.value).toStrictEqual(new Date('2014-12-25'));
  expect(parsedLineValue.statementSequenceNumber.value).toStrictEqual(214);
  expect(parsedLineValue.globalisationCode.value).toStrictEqual(0);
})

test('Acceptance TransactionPart1LineParserTest with sepa debit', () => {
  const parser = new TransactionPart1LineParser()
  const sampleLineToParse = '2100280000VAAS00026BSDDXXXXXXXX1000000000050000050815005030001127050815112BEA123XXXXXXXXXXX                  M123  25121421401 0'
  const parsedLineValue : TransactionPart1Line = parser.parse(sampleLineToParse) as TransactionPart1Line;
  expect(parsedLineValue.sequenceNumber.value).toStrictEqual(28);
  expect(parsedLineValue.sequenceNumberDetail.value).toStrictEqual(0);
  expect(parsedLineValue.bankReference.value).toStrictEqual('VAAS00026BSDDXXXXXXXX');
  expect(parsedLineValue.amount.value).toStrictEqual(-50);
  expect(parsedLineValue.valueDate.value).toStrictEqual(new Date('2015-08-05'));
  expect(parsedLineValue.transactionCode.type.value).toStrictEqual('0');
  expect(parsedLineValue.transactionCode.family.value).toStrictEqual('05');
  expect(parsedLineValue.transactionCode.operation.value).toStrictEqual('03');
  expect(parsedLineValue.transactionCode.category.value).toStrictEqual('000');
  expect(parsedLineValue.messageOrStructuredMessage.message).toBeUndefined();
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage).not.toBeNull();
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.structuredMessageType).toStrictEqual('127');
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.structuredMessage).toStrictEqual('050815112BEA123XXXXXXXXXXX                  M123  ');
  expect(parsedLineValue.messageOrStructuredMessage.structuredMessage.value).toBe('');
  expect(parsedLineValue.transactionDate.value).toStrictEqual(new Date('2014-12-25'));
  expect(parsedLineValue.statementSequenceNumber.value).toStrictEqual(214);
  expect(parsedLineValue.globalisationCode.value).toStrictEqual(0);

  const sepaDirectDebit = parsedLineValue.messageOrStructuredMessage.structuredMessage.sepaDirectDebit;
  expect(sepaDirectDebit).not.toBeNull();
  expect(sepaDirectDebit.settlementDate.value).toStrictEqual(new Date('2015-08-05'));
  expect(sepaDirectDebit.type).toStrictEqual(1);
  expect(sepaDirectDebit.scheme).toStrictEqual(1);
  expect(sepaDirectDebit.creditorIndentificationCode).toStrictEqual('BEA123XXXXXXXXXXX');
  expect(sepaDirectDebit.mandateReference).toStrictEqual('M123');
})
