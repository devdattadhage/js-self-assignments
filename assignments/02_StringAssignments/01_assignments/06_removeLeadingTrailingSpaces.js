// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "a b c b a";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let lastTrailSpacesRemovedString = string;
let finalString = "";
let isStartTrailingSpacesRemove = false;
const lastCharacter = string.length - 1;

if (string[lastCharacter] === " ") {
    let isEndTrailingSpacesRemove = false;
    lastTrailSpacesRemovedString = "";

    for (let index = string.length - 1; index >= 0; index--) {
        if (string[index] === " " && !isEndTrailingSpacesRemove) {
            continue;
        }

        isEndTrailingSpacesRemove = true;
        lastTrailSpacesRemovedString = string[index] + lastTrailSpacesRemovedString;
    }
}

for (let index = 0; index < lastTrailSpacesRemovedString.length; index++) {
    if (lastTrailSpacesRemovedString[index] === " " && !isStartTrailingSpacesRemove) {
        continue;
    }

    isStartTrailingSpacesRemove = true;
    finalString = finalString + lastTrailSpacesRemovedString[index];
}

console.log(finalString);