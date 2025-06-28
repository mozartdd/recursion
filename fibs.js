function fibs(n) {
  const fibonacci = [0, 1, 1];
  for (let i = 3; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(fibs(21));