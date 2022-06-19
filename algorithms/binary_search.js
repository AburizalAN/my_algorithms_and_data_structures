function binary_search(n, arr) {
  if (arr.length == 1) {
    return arr[0] === n ? "Item ditemukan" : "item tidak ditemukan"
  } else {
    const median = Math.round(arr.length / 2)
    const newArr = n >= arr[median] ? arr.slice(median, arr.length) : arr.slice(0, median)
    return binary_search(n, newArr)
  }
}

console.log(binary_search(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))