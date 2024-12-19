function toBinary(n) {
  if (n === 0) {
    return '0';
  }

  let binaryRepresentation = '';
  let dividend = n;

  while (dividend > 0) {
    binaryRepresentation = dividend % 2 + binaryRepresentation;
    dividend = Math.floor(dividend / 2);
  }

  return binaryRepresentation;
}
