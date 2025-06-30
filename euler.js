function sumMultiplesRecursive(n, max, current = 1) {
  let value = n * current;
  if (value >= max) return 0;
  return value + sumMultiplesRecursive(n, max, current + 1);
}

// console.log(sumMultiplesRecursive(3, 10) + sumMultiplesRecursive(5, 10));

function primeFactor(num) {
  let i = 2;
  let highest;
  while (i < num) {
    if (num % i === 0 && findPrime(i)) {
      highest = i;
    }
    i++;
  }
  return highest;
}

function findPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      return false;
  }
  return true;
}

console.log(primeFactor(13195));

