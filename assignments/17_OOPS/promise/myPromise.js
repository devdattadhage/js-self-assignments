const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = false; // Try changing to false to see the rejection case
    if (success) {
      resolve("Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  }, 1000);
});

myPromise.then(console.log).catch(console.log);
console.log(myPromise);

// const fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data fetched");
//   }, 1000);
// });

// fetchData
//   .then((data) => {
//     console.log(data);
//     return "Processing data";
//   })
//   .then((processedData) => {
//     console.log(processedData);
//     return "Displaying data";
//   })
//   .then((finalStep) => {
//     console.log(finalStep);
//   });
