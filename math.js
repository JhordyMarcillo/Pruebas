
function factorial(n) {
  if (n < 0) {
    throw new Error("El factorial no está definido para números negativos.");
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function fibonacci(n) {
  if (n < 0) {
    throw new Error("La secuencia de Fibonacci no está definida para números negativos.");
  }
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = {
  factorial,
  fibonacci,
};
