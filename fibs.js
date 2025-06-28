const fibonacci = [0, 1, 1];

function fibs(n) {
  if (n < 0) {
    return 'Fibonacci number can not be negative number.';
  } else if (n === 0) {
    return fibonacci[0];
  } else if (n === 1 || n === 2) {
    return fibonacci[1];
  } else {
    for (let i = fibonacci.length; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
  }
}

function fibsRec(n) {
  if (n === 0 ) return 0;
  else if (n === 1 || n === 2) return 1;
  return fibonacci[n] = fibsRec(n-1) + fibsRec(n-2);
}

fibsRec(44);
console.log(fibonacci);