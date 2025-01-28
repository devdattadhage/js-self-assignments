//  ### **Type 2: Task**
// 1. Match any string that contains a number.
const containsNumber = (string) => /\d+/.test(string);

// 2. Find all lowercase letters in a string.
const findLowerCaseChar = (string) => string.match(/[a-z]/g);

// 3. Match a string that ends with "ed".
const isEndingWithED = (string) => /ed$/.test(string);

// 4. Match the word "yes" in a string.
const isYesPresent = (string) => /yes/.test(string);

// 5. Find any two consecutive vowels in a string.
const findTwoConsecutiveVowels = (string) => string.match(/[aeiou]{2}/i);

// 6. Match any string containing the word "hello".
const isHelloPresent = (string) => /hello/.test(string);

// 7. Find a string that contains exactly two spaces.
const exactlyTwoSpaces = (string) => /^\S*(\s\S*){2}$/.test(string);

// 8. Find a string that starts with "abc".
const isStartingWithAbc = (string) => /^abc/.test(string);

// 9. Match any string that contains the digit `7`.
const containsSeven = (string) => /7/.test(string);

// 10. Find all occurrences of the letter `e`.
const occurrencesOfE = (string) => string.match(/e/g);

// 11. Match a string that has at least one uppercase letter.
const atleastOneUpperCase = (string) => /[A-Z]/.test(string);

// 12. Find a string with a period (`.`) in it.
const atleastOneDot = (string) => /\./.test(string);

// 13. Match a string that contains a single space.
const containsSingleSpace = (string) => /^\S*\s\S*$/.test(string);

// 14. Match all words that start with the letter `c`.
const wordsStartsWithC = (string) => string.match(/\b(c\w*)\b/g);

// 15. Match a string that contains the sequence "123".
const contains123 = (string) => /123/.test(string);

// 16. Match a string that contains a forward slash (`/`).
const containsForwardSlash = (string) => /\//.test(string);

// 17. Find all strings that contain "and".
const containsAnd = (string) => /and/.test(string);

// 18. Match a string that starts and ends with the same letter.
const isStartAndEndSame = (string) => /(\w)*\1/.test(string);

// 19. Match all lowercase letters except "x" and "y".
const matchAllLowerExceptXY = (string) => string.match(/[a-wz]/);

// 20. Find all words in a string that are exactly 5 letters long.
const allWordsOf5Length = (string) => string.match(/\b(\w{5})\b/g);

// 21. Match all words starting with a vowel.
const wordsStartingWithVowel = (string) => string.match(/\b([aeiou]\w*)\b/g);

// 22. Find all sequences of two or more consecutive digits.
const findAllConsecutiveDigits = (string) => string.match(/\d{2,}/g);

// 23. Match all words that contain exactly three letters.
const wordsOfLength3 = (string) => string.match(/\b\w{3}\b/g);

// 24. Find all occurrences of the word "cat" or "dog".
const occurrencesOfCatOrDog = (string) => string.match(/\b(cat|dog)\b/g);

// 25. Capture the first and last name from a string like `"John Doe"`.
const getFirstAndLastName = (string) => {
  const name = string.match(/(\w+)(.*)\b(\w+)/);

  return name[1].concat(" ", name[3]);
};

// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
const repeatingChars = (string) => string.match(/(.)\1/g);

// 27. Extract all the hashtags from a tweet.
const extractHastag = (string) => string.match(/\#(\w+)/g);

// 28. Validate a 24-hour time format like `"23:59"`.
const isTimeValid = (string) => /^(?:[01]\d|2[0-3]))\:[0-5]\d$/.test(string);

// 29. Capture the area code and phone number from `(123) 456-7890`.
const captureAreaAndPhoneNo = (string) => string.match(/^(\d{3})(.+)/);

// 30. Find sequences of whitespace followed by a word.
// 31. Match strings containing at least one uppercase and one digit.
// 32. Find all non-alphanumeric characters in a string.
// 33. Match email addresses.
// 34. Validate dates in the format `YYYY-MM-DD`.
// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
// 36. Find all duplicate words in a sentence.
// 37. Match words that do not contain the letter "e".
// 38. Extract the domain name from a URL like `https://www.example.com`.
// 39. Match strings containing three consecutive vowels.
// 40. Find all 4-letter palindromes in a string.
