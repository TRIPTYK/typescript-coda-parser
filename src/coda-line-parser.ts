import IdentificationLineParser from './line-parsers/identification-line-parser.js';
import InformationPart3LineParser from './line-parsers/information-part3-line-parser.js';
import InformationPart1lineParser from './line-parsers/information-part1-line-parser.js';
import InformationPart2LineParser from './line-parsers/information-part2-line-parser.js';
import InitialStateLineParser from './line-parsers/initial-state-line-parser.js';
import EndSummaryLineParser from './line-parsers/end-summary-line-parser.js';
import MessageLineParser from './line-parsers/message-line-parser.js';
import NewStateLineParser from './line-parsers/new-state-line-parser.js';
import TransactionPart1LineParser from './line-parsers/transaction-part1-line-parser.js';
import TransactionPart2LineParser from './line-parsers/transaction-part2-line-parser.js';
import TransactionPart3LineParser from './line-parsers/transaction-part3-line-parser.js';

function initLineParsers () {
  return [
    new IdentificationLineParser(),
    new InitialStateLineParser(),
    new InformationPart1lineParser(),
    new InformationPart2LineParser(),
    new InformationPart3LineParser(),
    new MessageLineParser(),
    new NewStateLineParser(),
    new TransactionPart1LineParser(),
    new TransactionPart2LineParser(),
    new TransactionPart3LineParser(),
    new EndSummaryLineParser()

  ];
}
export default async function parseLines (lines:string[]) {
  const lineParsers = initLineParsers();
  return lines.filter(line => line !== '' || line !== null).map(line => {
    return lineParsers.filter(parser => parser.canAcceptString(line)).map(parser => parser.parse(line));
  }).flat();
}
