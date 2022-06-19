// [0, 3, 4, 31] [4, 6, 30]

function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  const result = []
  let running = 0

  while (i < arr1.length && j < arr2.length) {
    running++
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i]
      k++
      i++
    } else {
      result[k] = arr2[j]
      k++
      j++
    }
  }

  while (i < arr1.length) {
    running++
    result[k] = arr1[i]
    k++
    i++
  }

  while (j < arr2.length) {
    running++
    result[k] = arr2[j]
    k++
    j++
  }

  console.log(running)
  return result
}

console.log(mergeArrays([0, 3, 4, 31], [4, 6, 30]))