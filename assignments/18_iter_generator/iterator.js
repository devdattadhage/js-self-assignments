const makeRangeIterator = (start, end) => {
  let value = start;
  const iterObj = {
    next() {
      if (value >= end) return { value: undefined, done: true };
      const result = { value, done: false };
      value += 1;
      return result;
    },
  };

  return iterObj;
};

const iter = makeRangeIterator(1, 10);

let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value);
