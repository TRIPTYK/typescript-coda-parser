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
  expectedLengthArray.forEach(expectedLength => {
    if (value.length === expectedLength) {
      return true;
    }
  })
  throw new Error(`${value} is invalid for type ${typeName} Length is not valid`);
}

function formatDateString (dateCoda:string) {
  return '20' + dateCoda.substring(4, 2) + '-' + dateCoda.substring(2, 2) + '-' + dateCoda.substring(0, 2);
}

export { validateStringDigitOnly, validateStringLength, validateStringMultipleLengths, formatDateString }
