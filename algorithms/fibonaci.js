function fibonaci(n) {
  const arr = [1]
  for (let i = 0; i <= n;  i++) {
    const result = arr.length == 1 ? arr[0] : arr[i] + arr[i - 1]
    arr.push(result)
  }
  return arr
}

function fibonaciRecursive(n, arr) {
  
  if (n > 0) {
    return newArr
  } else {
  }
}

console.log(fibonaci(5))

function oddOrEven(n) {
  return n % 2 === 0 ? "Genap" : "Ganjil"
}

console.log(oddOrEven(4))