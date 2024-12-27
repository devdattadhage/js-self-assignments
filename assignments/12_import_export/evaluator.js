import { dev } from "./math_functions.js";
import { greeting, interns } from "./data.js";

console.log(greeting);
console.log(
  dev.add(11, 4),
  dev.sub(15, 3),
  dev.mul(11, 4),
  dev.div(10, 2),
  dev.mod(10, 2),
  dev.sqrt(9),
  dev.pow(2, 5),
  dev.round(3.8),
  dev.abs(-12),
  dev.min(1, 19, -3, 99),
  dev.max(1, 19, -3, 99)
);

const getInternNames = (interns) => interns.map((intern) => intern.name);

const getHobbies = (interns) =>
  interns.flatMap((intern) => intern.hobbies).map((hobby) => hobby.name);

console.log(getInternNames(interns));
console.log(getHobbies(interns));
