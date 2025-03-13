const add = (a, b) => a + b;

const execAfter = (task, ms) => setTimeout(task, ms);

const addAndSquare = (a, b) =>
  new Promise((resolve, reject) => {
    // const sum = add(a, b);
    console.log("inside add and Square");
    execAfter(() => {
      console.log("inside settime out");
      reject("fail");
      resolve("success");
      console.log("inside settime end");
      // resolve(sum * sum);
    }, 1000);
  });

// const demo = (a, b) =>
//   new Promise((resolve, reject) => {
//     const sum = add(a, b);
//     console.log("inside demo");
//     execAfter(() => resolve(sum * sum), 1000);
//   });

const result = addAndSquare(2, 3);

result.then(console.log);

// const result1 = demo(3, 3);

// result.then((r) => {
//   console.log("inside result.then");
//   console.log("Square : ", r);
// });
// result1.then((r) => {
//   console.log("inside result1.then");
//   console.log("Square : ", r);
// });

// result.then((r) => console.log("1"));
// result.then((r) => console.log("2"));
// result.then((r) => console.log("3"));
// result.then((r) => console.log("4"));
// result.then((r) => console.log("5"));
