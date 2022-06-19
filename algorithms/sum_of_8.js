
// Quadratic Time Solution O(n^2)
function sumOfEight(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log("running")
      if (arr[i] + arr[j] === 8) {
        return "sum of eight founded"
      }
    }
  }
  return "Oh no there is no sum of eight inside this array"
}

// Linear Quadratic Time Solution O(n log n)
function sumOfEight2(arr) {
  function binarySearch(array, n) {
    console.log(array)
    console.log(n)
    if (array.length == 1) {
      return array[0] == n ? "sum of eight founded" : null
    } else {
      const median = Math.round(array.length / 2)
      const newArr = n < array[median] ? array.slice(0, median) : array.slice(median, array.length)
      return binarySearch(newArr, n)
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const expectedNumber = 8 - arr[i]

    if (arr[i + 1] == expectedNumber) {
      return "sum of eight founded"
    } else if (arr.slice(i + 1, arr.length).length > 1) {
      const findExpectedNumber = binarySearch(arr.slice(i + 1, arr.length), expectedNumber)
      // console.log(findExpectedNumber)
      if (findExpectedNumber) return findExpectedNumber
    }
  }
  return "Oh no there is no sum of eight inside this array"
}

console.log(sumOfEight2([1, 2, 3, 4, 4]))