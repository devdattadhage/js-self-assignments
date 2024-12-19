/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function makeMessage(text, target, expected, actualResult) {
  const textSegment = "In text : '" + text + "' '" + target;
  const expectedSegment = "' should be at index '" + expected;
  const actualSegment = "' and is at index '" + actualResult + "'";

  return textSegment + expectedSegment + actualSegment;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testFindIndex(text, target, expected) {
  const actualResult = findIndex(text, target);
  const isPassing = expected === actualResult;
  const message = makeMessage(text, target, expected, actualResult);

  console.log(getmark(isPassing), message);
}

function testAll() {
  testFindIndex('hello', 'o', 4);
  testFindIndex('hello', 'z', -1);
  testFindIndex('hello', 'l', 2);
  testFindIndex('ollll', 'l', 1);
  testFindIndex('hello', '', -1);
  testFindIndex('', 'l', -1);
  testFindIndex('', '', -1);
}

testAll();