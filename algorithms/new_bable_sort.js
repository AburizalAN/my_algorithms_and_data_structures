function new_bable_sort(arr) {
  for (let length = arr.length; length > 0; length--) {
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp 
      }
    }
  }
}

const arr = [3, 4, 1, 2, 6, 5, 8, 7, 10]

console.log(arr)
new_bable_sort(arr)
console.log(arr)