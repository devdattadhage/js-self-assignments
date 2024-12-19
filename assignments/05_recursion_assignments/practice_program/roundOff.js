function getdecimalIndex(numberInString, index) {  
  if (numberInString[index] === ".") {
    return index;
  }

  return getdecimalIndex(numberInString, index + 1);
}

function roundoffs(number, roundTill) {
  const numberInString = "" + number;
  const decimalPoint = getdecimalIndex(numberInString, 0);
  console.log(decimalPoint);
  
}

console.log(roundoffs(10.1122, 2));