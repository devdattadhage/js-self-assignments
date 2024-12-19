// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "this    is";
//  Reverse the sentence
// If sentence = "this is cool" then sweepingField should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let index = 0;
const SPACE = " ";
let reversedSentence = "";
const sentenceWithAddedSpace = sentence + " ";

while (index < sentence.length) {
  let word = "";
  let wordNotFound = true;

  while (wordNotFound && index < sentenceWithAddedSpace.length - 1) {
    const isSpace = sentenceWithAddedSpace[index] === SPACE;
    word += !isSpace ? sentenceWithAddedSpace[index] : "";

    if (isSpace) {
      word = sentenceWithAddedSpace[index] + word;
      wordNotFound = false;
    }

    index++;
  }

  reversedSentence = word + reversedSentence;
}

console.log(reversedSentence);
console.log(reversedSentence.length, sentence.length);
console.log(sentence);