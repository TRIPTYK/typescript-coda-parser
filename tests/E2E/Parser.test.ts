import parseCodafile from '../../src/coda-parser'

describe('Parser End to End', () => {
  test('should parse a simple file with 4 etries with structured messages', async () => {
    console.log('______________________');
    const result = await parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`);
    console.log('result', result)
  })
})
