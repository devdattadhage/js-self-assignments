const num = 999;
let remainder = 0;
let quotient = num;
let sum = 0;
let numCopy = 0;

while(quotient !== 0) {
    numCopy = quotient;
    quotient = 0;
    remainder = numCopy % 10;
    numCopy = numCopy - remainder;
    sum = sum + remainder ;
    quotient = numCopy / 10;
}

console.log(num,sum);
