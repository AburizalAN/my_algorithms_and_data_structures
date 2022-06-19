function mergeSort(dataset) {

  if (dataset.length > 1) {
    const mid = Math.floor(dataset.length / 2);

    const leftArr = mergeSort(dataset.slice(0, mid))
    const rightArr = mergeSort(dataset.slice(mid, dataset.length))

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] < rightArr[j]) {
        dataset[k] = leftArr[i];
        i++;
      } else {
        dataset[k] = rightArr[j];
        j++;
      }
      k++;
    }

    while (i < leftArr.length) {
      dataset[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < rightArr.length) {
      dataset[k] = rightArr[j];
      j++;
      k++;
    }
  }
  return dataset
}

const arr = [3, 1, 2, 4, 5, 6, 67, 8];
console.log(mergeSort(arr));