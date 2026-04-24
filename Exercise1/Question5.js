const calculateFactorial = (n) => {
  if (!Number.isInteger(n) || n < 0) return null;

  if (n <= 1) return 1;

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(calculateFactorial(1.5))//=>null