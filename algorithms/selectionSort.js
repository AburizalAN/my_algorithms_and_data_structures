function selectionSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    let temp = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    arr[i] = arr[min]
    arr[min] = temp
  }
}


const array = [5, 3, 2, 4, 19, 1]
console.log(array)
selectionSort(array)
console.log(array)