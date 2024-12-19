function generatePowerSet(array) {
  const powerSet = [[]];

  for (let arrIndex = 0; arrIndex < array.length; arrIndex++) {
    const element = array[arrIndex];
    const powerSetLength = powerSet.length;

    for (let index = 0; index < powerSetLength; index++) {
      powerSet.push(powerSet[index].concat([element]));
    }
  }

  return powerSet;
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
  return "\nPower Set := ";
}

function createMessage(array) {
  const inputSegment = "Array : [" + array + "]";

  return inputSegment + composeStatement();
}

function testMultiplyMatrices(array, expected) {
  const actual = generatePowerSet(array);
  const mark = getMark(actual, expected);
  const message = createMessage(array);

  console.log(mark, message, "Expected : ", expected, " Actual : ", actual);
}

function testAll() {
  testMultiplyMatrices([], [[]]);
  testMultiplyMatrices([1], [[], [1]]);
  testMultiplyMatrices(['a'], [[], ['a']]);
  testMultiplyMatrices([1, 2], [[], [1], [2], [1, 2]]);
  testMultiplyMatrices(['a', 'b'], [[], ['a'], ['b'], ['a', 'b']]);
  testMultiplyMatrices(['a', 1], [[], ['a'], [1], ['a', 1]]);
  testMultiplyMatrices([1, 2, 3], [
    [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
  testMultiplyMatrices([1, 2, 3, 4], [
    [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4],
    [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]);
}

testAll();