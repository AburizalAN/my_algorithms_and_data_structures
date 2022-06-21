function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[i] < arr[j]) {
          const temp = arr[j]
          arr[j] = arr[i]
          arr[i] = temp
          i = j
        } else {
          break
        }
      }
    }
  }
}

const array = [1, 2, 5, 2, 3, 5, 5, 19, 4]
console.log(array)
insertionSort(array)
console.log(array)