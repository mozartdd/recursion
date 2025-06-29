function bubbleSortArray(array) {
  let newArray = array.slice();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] <= newArray[j]) {
        continue;
      }
      if (newArray[i] > newArray[j]) {
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
    }
  }
  return newArray;
}

console.log(bubbleSortArray([22, 5, 21, 4, 5]));