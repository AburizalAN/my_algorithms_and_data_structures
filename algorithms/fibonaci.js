function fibonaci(n) {
  const arr = [1]
  for (let i = 0; i <= n;  i++) {
    const result = arr.length == 1 ? arr[0] : arr[i] + arr[i - 1]
    arr.push(result)
  }
  return arr
}

function fibonaci2(n) {
  let arr = [0]
  let counter = 1
  return function() {
    if (arr.length > 1) {
      arr.push(arr[counter] + arr[counter-1])
    } else {
      arr.push(1)
    }
    console.log(counter)
    console.log(n)
    counter++
    if (n === counter) console.log(arr)
  }
}

function runFibonaci(n) {
  let i = 0
  const thisFibonaci = fibonaci2(n) 
  while (i < n) {
    thisFibonaci()
    i++
  }
}

runFibonaci(4)

// console.log(fibonaci(5))

// function oddOrEven(n) {
//   return n % 2 === 0 ? "Genap" : "Ganjil"
// }

// console.log(oddOrEven(4))