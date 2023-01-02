export default class InitialStateLineParser {
  canAcceptString (codaLine:string) {
    return codaLine.length === 128 && codaLine.substring(0, 1) === '1';
  }

  parse (codaLine:string) {

  }
}
