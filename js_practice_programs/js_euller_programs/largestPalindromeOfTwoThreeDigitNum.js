let num1 = 999;
let largestPalindromeProduct = 0;
let isPalindromic = true;
let num2 = 999;

while (num1 > 900 && isPalindromic) {

    while (num2 > 900 && isPalindromic) {
        let remainingDigits = num1 * num2;
        let reverseOfTwoNumProduct = 0;

        while (remainingDigits > 0) {
            let lastDigit = remainingDigits % 10;
            reverseOfTwoNumProduct = (reverseOfTwoNumProduct * 10) + lastDigit;
            remainingDigits = (remainingDigits - lastDigit) / 10;
        }

        if (num1 * num2 === reverseOfTwoNumProduct) {
            largestPalindromeProduct = reverseOfTwoNumProduct;
            isPalindromic = false;
            console.log(largestPalindromeProduct);
            console.log(num1, num2);
        }

        num2 = num2 - 1;
    }

    num1 = num1 - 1;
    num2 = num1;
}