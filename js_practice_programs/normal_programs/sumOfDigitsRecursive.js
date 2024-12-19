const num = 9;
let sum = num;

while(sum > 9) {
    
    let remainder = 0;
    let quotient = sum;
    let numCopy = 0;
    sum = 0;

    while(quotient !== 0) {
        numCopy = quotient;
        quotient = 0;
        remainder = numCopy % 10;
        numCopy = numCopy - remainder;
        sum = sum + remainder ;
        quotient = numCopy / 10;
    }
    
}

console.log(num,sum);
