function memoizationAddto80() {
  let cache = {}
  return function(n) {
    if (cache[n]) {
      return cache[n]
    } else {
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memoized = memoizationAddto80()

console.log(memoized(2))
console.log(memoized(3))
console.log(memoized(4))