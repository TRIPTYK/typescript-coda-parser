import parseCodafile from './coda-parser.js';

((await parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`)));

// console.log(t)
// console.log(t[2][0])
// console.log(JSON.stringify((await parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`))[1]))
