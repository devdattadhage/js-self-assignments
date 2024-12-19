
/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubstring(string, subString) {
  let index = 0;

  while (index < string.length) {
      let subStringIndex = 0;

      while (string[index] === subString[subStringIndex]) {
          if (subStringIndex === subString.length - 1) {
              return true;
          }

          index++;
          subStringIndex++;
      }

      index = index - subStringIndex - 1;
  }

  return false;
}

console.log(isSubstring('', ''));