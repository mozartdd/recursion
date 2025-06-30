function mergeSort(array) {
  if (array.length <= 1) return array; // Base case

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort and merge
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let l = 0, r = 0;

  // Merge until one side is empty
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  // Append any remaining elements
  return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([3, 5, 2, 1, 1, 5, 12, 15, 5, 1, 2, 5, 0, 22]));
