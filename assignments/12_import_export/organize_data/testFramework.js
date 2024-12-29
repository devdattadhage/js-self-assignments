const resultMsg = (actual, expected) => {
  return "\n Actual : " + actual + " | Expected : " + expected;
};

const isEqual = (value1, value2) => value1 === value2;

const areEqual = (value1, value2) => {
  if (!Array.isArray(value1)) return isEqual(value1, value2);

  if (value1.length !== value2.length) return false;

  return value1.every((element, index) => areEqual(element, value2[index]));
};

export const test = (description, expected, testFun) => {
  const actual = testFun;
  const mark = areEqual(actual, expected) ? "✅" : "❌";
  const message = description + resultMsg(actual, expected);

  console.log(mark, message);
};
