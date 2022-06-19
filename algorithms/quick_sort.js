const items = [20, 6, 8, 53, 56, 23, 87, 41, 49, 19]

function quickSort(dataset, first, last) {
  if (first < last) {
    const pivotIdx = partition(dataset, first, last);
    quickSort(dataset, first, pivotIdx - 1);
    quickSort(dataset, pivotIdx + 1, last);
  }
}

function partition(dataset, first, last) {
  const pivot = dataset[first];
  let lower = first + 1;
  let upper = last;

  let done = false;
  while (!done) {
    while (lower <= upper && dataset[lower] <= pivot) {
      lower++
    }

    while (upper >= lower && dataset[upper] >= pivot) {
      upper--
    }

    if (upper < lower) {
      done = true;
    } else {
      const temp = dataset[lower];
      dataset[lower] = dataset[upper];
      dataset[upper] = temp;
    }
  }

  const temp = dataset[first];
  dataset[first] = dataset[upper];
  dataset[upper] = temp;

  return upper;
}

console.log('before sort', items)
quickSort(items, 0, items.length - 1)
console.log('after sort', items)

