import type Line from './lines/line';
import type { Class } from 'type-fest';
import type { LineType } from './lines/LineType.enum';
function validateStringLength (value:string, expectedLength:number, typeName:string) {
  if (value.length !== expectedLength) {
    throw new Error(`${value} is invalid for type ${typeName} Should be ${expectedLength} long`);
  }
}

function validateStringDigitOnly (value:string, typeName:string) {
  if (!value.match('^\\d+$')) {
    throw new Error(`${typeName} ${value} Should contain only numeric values`);
  }
}

function validateStringMultipleLengths (value:string, expectedLengthArray:number[], typeName:string) {
  if (expectedLengthArray.filter(expectedLength => value.length === expectedLength).length === 0) throw new Error(`${value} is invalid for type ${typeName} Length is not valid`);
  return true
}

function formatDateString (dateCoda:string) {
  return '20' + dateCoda.substring(4, 6) + '-' + dateCoda.substring(2, 4) + '-' + dateCoda.substring(0, 2);
}
function getTrimmedData (data:string, startPosition:number) {
  return data.substring(startPosition).trim()
}

function getFirstLineOfType<T extends Line> (lines:Line[], type:Class<T>):T | undefined {
  return lines.find(line => line.constructor === type) as T;
};

function filterLinesOfTypes<T extends Line> (lines:Line[], types:LineType[]):T[] {
  return lines.filter(line => types.includes(line.getLineType())) as T[];
}

export { validateStringDigitOnly, validateStringLength, validateStringMultipleLengths, formatDateString, getTrimmedData, getFirstLineOfType, filterLinesOfTypes }
