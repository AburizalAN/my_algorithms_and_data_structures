function bubbleSort(arr) {
  for (let i = 0, arrLength = arr.length; i < arrLength; arrLength--) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const testArr = [5, 4, 3, 2, 1];

console.log(bubbleSort(testArr));