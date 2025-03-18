import _ from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.max(arr));
console.log(_.shuffle(arr));
console.log(_.take(arr, 3));
console.log(_.takeRight(arr, 3));
console.log(_.chunk(arr, 2));
console.log(_.compact([1, 3, , null, "hi", 0, undefined, true, false]));
console.log(_.head([1, 2, 3]));
console.log(_.first([1, 2, 3]));
console.log(_.last([1, 2, 3]));
console.log(_.tail([1, 2, 3]));
