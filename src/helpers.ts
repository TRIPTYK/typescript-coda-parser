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
export { validateStringDigitOnly, validateStringLength, validateStringMultipleLengths, formatDateString, getTrimmedData }
