const addD = (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.group("addD");
      resolve(a + b);
      console.log(a, "+", b);
      console.groupEnd();
    }, 2000);
  });

console.time("Promise all");
Promise.all([addD(2, 3), addD(4, 5)])
  .then(([c, d]) => addD(c, d))
  .then((sum) => {
    console.log(sum);
    console.timeEnd("Promise all");
  });
