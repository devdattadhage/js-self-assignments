export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }
};

export const grade = (marks) => {
  if (marks === 100) {
    return "A++";
  }
  if (marks > 90) {
    return "A";
  }
  if (marks > 80) {
    return "B";
  }
  if (marks > 60) {
    return "C";
  }
  if (marks > 35) {
    return "D";
  }

  return "FAIL";
};

export const add = (a, b) => a + b;
