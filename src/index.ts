import parseCodafile from './coda-parser.js';

const t = ((await parseCodafile(`${process.cwd()}/tests/samples/12298862.BC2`)))[0].transactions[0];
console.log(t);

// t.transactions.forEach((transaction) => {
//   console.log(transaction);
// })
// console.log(t[2][0])
// console.log(JSON.stringify((await parseCodafile(`${process.cwd()}/tests/samples/sample1.cod`))[1]))
