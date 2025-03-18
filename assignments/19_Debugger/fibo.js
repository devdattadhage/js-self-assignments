const fibo = (term) => {
  if (term === 1) return 0;
  if (term === 2) return 1;

  return fibo(term - 1) + fibo(term - 2);
};

const main = () => {
  const term = 2;
  const nthTerm = fibo(term);
  console.log(nthTerm);
};

main();
