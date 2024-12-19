const palindromeCandidate = 12321;
let remainder = 0;
let quotient = palindromeCandidate;
let reverse = 0;
let palindromeCandidateCopy = 0;

while(quotient !== 0) {
    palindromeCandidateCopy = quotient;
    quotient = 0;
    remainder = palindromeCandidateCopy % 10;
    palindromeCandidateCopy = palindromeCandidateCopy - remainder;
    reverse = reverse * 10 + remainder ;
    quotient = palindromeCandidateCopy / 10;
}

if(palindromeCandidate === reverse) {
    console.log(101,palindromeCandidate,reverse);
}else {
    console.log(99);
}