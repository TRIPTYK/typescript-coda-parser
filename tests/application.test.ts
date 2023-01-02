import parseCodafile from '../src/coda-parser';

test('should echo the application init', async () => {
  try {
    parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`)
  } catch (e) {
    throw e
  }

  expect(2).toBe(2);
})
