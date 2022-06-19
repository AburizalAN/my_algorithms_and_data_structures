function isThereCommonItem(arr1, arr2) {
  let howManyRuns = 0
  for (i of arr1) {
    for (j of arr2) {
      howManyRuns++
      if (i === j) {
        console.log(howManyRuns)
        return true
      }
    }
  }
  console.log(howManyRuns)
  return false
}

function isThereCommonItem2(arr1, arr2) {
  const newSet = new Set()
  let howManyRuns = 0

  const smallestArr = arr1.length > arr2.length ? arr2 : arr1
  const largestArr = arr1.length > arr2.length ? arr1 : arr2

  for (item of smallestArr) {
    howManyRuns++
    newSet.add(item)
  }

  for (item of largestArr) {
    howManyRuns++
    if (newSet.has(item)) {
      console.log(howManyRuns)
      return true
    }
  }
  console.log(howManyRuns)
  return false
}

console.log(isThereCommonItem2([1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 14, 16, 17, 8]))