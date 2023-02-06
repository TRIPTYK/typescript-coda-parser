/* eslint-disable max-statements */
import parseCodafile from '../../src/coda-parser'

describe('Parser End to End', () => {
  test('should parse a simple file with 4 etries with structured messages', async () => {
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`);
    expect(result.length).toStrictEqual(1);
    const firstResult = result[0];
    expect(firstResult.initialBalance).toStrictEqual(17752.12);
    expect(firstResult.newBalance).toStrictEqual(17832.12);
    expect(firstResult.date).toStrictEqual(new Date('2017-10-11'));
    expect(firstResult.transactions.length).toStrictEqual(4);
    const firstTransaction = firstResult.transactions[0];
    expect(firstTransaction.message).toStrictEqual('GROTE WEG            32            3215    HASSELT');
    expect(firstTransaction.structuredMessage).toStrictEqual('000003505158')
    expect(firstTransaction.amount).toStrictEqual(5);
    expect(firstTransaction.account.name).toStrictEqual('KLANT1 MET NAAM1');
    expect(firstTransaction.account.number).toStrictEqual('BE22313215646432');
  })

  test('should parse message on multiple lines information', async () => {
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample4.cod`);
    expect(result[0].transactions[0].message).toStrictEqual('Europese overschrijving (zie bijlage) + 17.233,54Van: COMPANY BLABLABLAH BVBA - BE64NOT PR');
  })

  test('should parse a file with message on multiple lines tnasaction block', async () => {
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample3.cod`);
    expect(result[0].transactions[0].message).toStrictEqual('Message goes here and continues here or here');
  })

  test('should parse a file with no Account', async () => {
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample2.cod`);
    expect(result[0].transactions[0].account.name).toStrictEqual('');
    expect(result[0].transactions[0].message).toStrictEqual('Zichtrekening nr  21354598 - 2,11Justification in annex 00001680');
  })

  test('should parse and simplme format', async () => {
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample5.cod`);
    expect(result.length).toStrictEqual(1);
    const statement = result[0];
    expect(statement.date).not.toStrictEqual(new Date());
    expect(statement.account).not.toBeNull();
    expect(statement.transactions.length).toStrictEqual(3);
    statement.transactions.forEach(transaction => {
      expect(transaction.transactionDate).not.toStrictEqual(new Date());
      expect(transaction.message).not.toStrictEqual('');
      expect(transaction.valueDate).not.toStrictEqual(new Date());
      expect(transaction.account).not.toBeNull();
    })

    expect(statement.transactions[0].transactionSequence).toStrictEqual(1);
    expect(statement.transactions[0].statementSequence).toStrictEqual(214);
    expect(statement.transactions[1].transactionSequence).toStrictEqual(2);
    expect(statement.transactions[1].statementSequence).toStrictEqual(214);
    expect(statement.transactions[2].transactionSequence).toStrictEqual(9);
    expect(statement.transactions[2].statementSequence).toStrictEqual(214);
  })

  test('final parsing', async () => {
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample6.cod`);
    expect(result.length).toStrictEqual(1);
    const statement = result[0];
    expect(statement.account).not.toBeNull();
    expect(statement.transactions.length).toStrictEqual(3);
    expect(statement.initialBalance).toStrictEqual(4004.1);
    expect(statement.newBalance).toStrictEqual(-500012.1);
    expect(statement.informationalMessage).toStrictEqual('THIS IS A PUBLIC MESSAGE');
    expect(statement.account.name).toStrictEqual('CODELICIOUS');
    expect(statement.account.bic).toStrictEqual('GEBABEBB');
    expect(statement.account.companyIdentifier).toStrictEqual('09029308273');
    expect(statement.account.number).toStrictEqual('001548226815');
    expect(statement.account.currencyCode).toStrictEqual('EUR');
    expect(statement.account.countryCode).toStrictEqual('BE');
    const transaction1 = statement.transactions[0];
    const transaction2 = statement.transactions[1];
    const transaction3 = statement.transactions[2];
    expect(transaction1.account).not.toBeNull();
    expect(transaction1.amount).toStrictEqual(-767.823);
    expect(transaction1.message).toStrictEqual('112/4554/46812   813 ANOTHER MESSAGE MESSAGE');
    expect(transaction1.structuredMessage).toStrictEqual('');

    expect(transaction1.account.name).toStrictEqual('BVBA.BAKKER PIET');
    expect(transaction1.account.bic).toStrictEqual('GEBCEEBB');
    expect(transaction1.account.number).toStrictEqual('BE54805480215856');
    expect(transaction1.account.currency).toStrictEqual('EUR');
    expect(transaction1.transactionSequence).toStrictEqual(1);
    expect(transaction1.statementSequence).toStrictEqual(214);
    expect(transaction2.message).toStrictEqual('54875');
    expect(transaction2.structuredMessage).toStrictEqual('112455446812');
    expect(transaction2.transactionSequence).toStrictEqual(2);
    expect(transaction2.statementSequence).toStrictEqual(214);

    expect(transaction3.account.name).toStrictEqual('');
    expect(transaction3.account.bic).toStrictEqual('GEBCEEBB');
    expect(transaction3.transactionSequence).toStrictEqual(9);
    expect(transaction3.statementSequence).toStrictEqual(214);
  });
})
