function compoundInterest(principal, rate, time) {
  if (time <= 1) {
    return principal * rate * time / 100;
  }

  const yearlyInterest = principal * rate / 100;
  const newPrincipal = principal + yearlyInterest;

  return yearlyInterest + compoundInterest(newPrincipal, rate, time - 1);
}

/********************* Test Framework *********************/

function getMark(result, expected) {
  return result === expected ? '✅' : '❌';
}

function createStatement() {
  return "\nCompound Interest := ";
}

function createResultMessage(expected, actual) {
  return "Expected : " + expected + " | Actual : " + actual + "\n";
}

function createMessage(principal, rate, time) {
  const inputSegment = "Principal : " + principal + " | Rate : " + rate;
  const inputSegment2 = " | Time : " + time;

  return inputSegment + inputSegment2 + createStatement();
}

function testCompoundInterest(principal, rate, time, expected) {
  const actual = compoundInterest(principal, rate, time);
  const isPassing = getMark(actual, expected);
  const message = createMessage(principal, rate, time);
  const result = createResultMessage(expected, actual);

  console.log(isPassing, message, result);
}

function testAll() {
  testCompoundInterest(100, 5, 2, 10.25);
  testCompoundInterest(0, 5, 2, 0);
  testCompoundInterest(100, 0, 2, 0);
  testCompoundInterest(100, 5, 0, 0);
  testCompoundInterest(0, 0, 0, 0);
}

testAll();