import { Expenditure, sum } from "./Expenditure.js";

const main = (expenses) => {
  const parsed = expenses.map((e) => Expenditure.parse(e));
  const total = parsed.reduce(sum, new Expenditure(0, 0));

  return total.display();
};

main([2, 1.5, 3.75]);
