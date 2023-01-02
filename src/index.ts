import parseCodafile from './coda-parser.js';

console.log(await parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`))
