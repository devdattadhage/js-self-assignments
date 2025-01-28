const strings = ["ab", "a", "", "abc", "abcd"];

const evenLengthStrings = (strings) =>
  strings.filter((word) => word.match(/^(\w{2})*$/));

console.log(evenLengthStrings(strings));
