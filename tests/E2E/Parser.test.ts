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
    expect(result[0].transactions[0].message).toStrictEqual('Europese overschrijving (zie bijlage)+ 17.233,54Van: COMPANY BLABLABLAH BVBA - BE64NOT PR');
  })
})
