const add = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const mul = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

const mod = (num1, num2) => num1 % num2;

const pow = (num, power) => Math.pow(num, power);

const sqrt = (num) => Math.sqrt(num);

const round = (num) => Math.round(num);

const abs = (num) => Math.abs(num);

const min = (...nums) => Math.min(...nums);

const max = (...nums) => Math.max(...nums);

export const dev = { add, sub, mul, div, mod, pow, sqrt, round, min, max, abs };
