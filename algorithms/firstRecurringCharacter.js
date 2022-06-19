function firstRecurringChar(arr) {
  const map = {}
  
  for (item of arr) {
    if (!map[item]) {
      map[item] = true
    } else {
      return item
    }
  }

  return "All Characters are unique"
}

console.log(firstRecurringChar([1, 2, 2, 3, 4]))