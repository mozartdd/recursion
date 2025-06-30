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

// Function to sum all even fibonacci numbers below 4 million
function evenFibs() {
  let a = 1, b = 2;
  let sum = 0;

  while (b < 400000000) {
    if (b % 2 === 0) sum += b;
    let next = a + b;
    a = b;
    b = next;
  }
  return sum;
}

console.log(evenFibs());