const code = `
function factorial(number) {
  let factorialOfNum = 1;

  for (let multiplier = 1; multiplier <= number; multiplier++) {
    factorialOfNum = factorialOfNum * multiplier;
  }

  return factorialOfNum;
}

function makeMessage(number, expected, actualResult) {
  const message = " Factorial of " + number + " should be " + expected;

  return message + " and is " + actualResult;
}

function getmark(isPassing) {
  return isPassing ? '✅' : '❌';
}

function testFactorial(number, expected) {
  const actualResult = factorial(number);
  const isPassing = expected === actualResult;

  console.log(getmark(isPassing), makeMessage(number, expected, actualResult));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(5, 120);
}

testAll();
`;

// const funDef = code.split("\n").filter((e) => e.match(/function/));
// const funNames = funDef.flatMap((e) => e.match(/function\s\w+/));

// const funResult = funNames.map((e) => e.split(" ")[1]);

const funDef = code.match(/function\s\w+/g);
