/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno wornd'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function charAtPosition(currentChar, match, replacement) {
  return currentChar === match ? replacement : currentChar;
}

function replace(text, match, replacement) {
  let replacedString = "";

  for (let index = 0; index < text.length; index++) {
    const currentChar = text[index];
    replacedString += charAtPosition(currentChar, match, replacement);
  }

  return replacedString;
}

function makeMessage(text, match, replacement, expected, actualResult) {
  const textSegment = " In text : '" + text + "' '" + match;
  const replaceSegment = "' replaced by '" + replacement;
  const expectedSegment = "' Expected O/P : '" + expected;
  const actualSegment = "' Actual O/P : '" + actualResult + "'";

  return textSegment + replaceSegment + expectedSegment + actualSegment;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testReplace(text, match, replacement, expected) {
  const actualResult = replace(text, match, replacement);
  const isPassed = expected === actualResult;
  const message = makeMessage(text, match, replacement, expected, actualResult);

  console.log(getmark(isPassed), message);
}

function testAll() {
  testReplace('a', 'a', 'b', 'b');
  testReplace('hello', 'e', 'a', 'hallo');
  testReplace('hello', 'z', 'a', 'hello');
  testReplace('hello', '', 'a', 'hello');
  testReplace('hello', 'l', '', 'heo');
  testReplace('', 'l', 'a', '');
}

testAll();