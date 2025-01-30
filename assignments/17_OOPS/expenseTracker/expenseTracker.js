const calculateExpenses = (expenses) => expenses.reduce((sum, e) => sum + e, 0);

const displayExpense = (expense) => console.log(`Total: ${expense.toFixed(2)}`);

const main = () => {
  const totalExpense = calculateExpenses([12.5, 3.45, 1.75, 2.3]);

  return displayExpense(totalExpense);
};

main();
