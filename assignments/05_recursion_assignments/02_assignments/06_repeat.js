function repeat(string, number) {
  if (number < 1 || string === '') {
    return '';
  }
  
  return string + repeat(string, number - 1);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nRepeating String := ";
}

function createResultMessage(expected, actual) {
  return  "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(string, number) {
  const inputSegment = "String : " + string + " | No. Of Times : " + number;
  
  return inputSegment + createStatement();
}

function testRepeat(string, number, expected) {
  const actual = repeat(string, number);
  const isPassing = getMark(actual, expected);
  const message = createMessage(string, number);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testRepeat('Hi', 3, 'HiHiHi');
  testRepeat('Hi', 1, 'Hi');
  testRepeat('Hi', 0, '');
  testRepeat('Hi', -2, '');
  testRepeat('a', 10, 'aaaaaaaaaa');
  testRepeat('', 10, '');
}

testAll();