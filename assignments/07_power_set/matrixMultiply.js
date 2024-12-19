function areEmpty(matrixA, matrixB) {
  return matrixA.length === 0 || matrixB.length === 0;
}

function areDimensionsValid(matrixA, matrixB) {
  return matrixA[0].length === matrixB.length;
}

function getElement(matrixA, matrixB, rowIndex, columnB) {
  let element = 0;

  for (let index = 0; index < matrixA[0].length; index++) {
    element += matrixA[rowIndex][index] * matrixB[index][columnB];
  }

  return element;
}

function getResultRow(matrixA, matrixB, rowIndex) {
  const row = [];

  for (let columnB = 0; columnB < matrixB[0].length; columnB++) {
    row.push(getElement(matrixA, matrixB, rowIndex, columnB));
  }

  return row;
}

function getProductMatrix(matrixA, matrixB) {
  const product = [];

  for (let rowIndex = 0; rowIndex < matrixA.length; rowIndex++) {
    product.push(getResultRow(matrixA, matrixB, rowIndex));
  }

  return product;
}

function multiplyMatrices(matrixA, matrixB) {
  if (areEmpty(matrixA, matrixB)) {
    return [];
  }

  if (!areDimensionsValid(matrixA, matrixB)) {
    return NaN;
  }

  return getProductMatrix(matrixA, matrixB);
}

/****************************  Test Framework  ******************************/

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    for (let subIndex = 0; subIndex < array1[index].length; subIndex++) {
      if (!(array1[index].includes(array2[index][subIndex]))) {
        return false;
      }
    }
  }

  return true;
}

function getMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function composeStatement() {
  return "Multiply Matrices := ";
}

function testMultiplyMatrices(matrixA, matrixB, expected) {
  const actual = multiplyMatrices(matrixA, matrixB);
  const mark = getMark(actual, expected);
  const message = composeStatement();

  console.log("\n", mark, "Matrix A : ", matrixA, "Matrix B : ", matrixB);
  console.log(message, "Expected : ", expected, " Actual : ", actual);
}

function testInvalidMatrices() {
  testMultiplyMatrices([], [], []);
  testMultiplyMatrices([[1]], [], []);
  testMultiplyMatrices([[]], [[]], NaN);
  testMultiplyMatrices([[1]], [[]], [[]]);
  testMultiplyMatrices([[1, 2]], [[7, 8]], NaN);
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10]], NaN);
}

function testAll() {
  testInvalidMatrices();

  testMultiplyMatrices([[1]], [[1]], [[1]]);
  testMultiplyMatrices([[1, 2]], [[1], [2]], [[5]]);
  testMultiplyMatrices([[1], [2]], [[1, 2]], [[1, 2], [2, 4]]);
  testMultiplyMatrices([[1, 2], [3, 4]], [[1], [2]], [[5], [11]]);
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]],
    [[58, 64], [139, 154]]);
}

testAll();