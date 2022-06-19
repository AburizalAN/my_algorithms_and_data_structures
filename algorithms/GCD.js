function GCD(a, b) {
  while (b != 0) {
    const temp = a;
    a = b;
    b = temp % b;
  }

  return a;
}

console.log(GCD(12, 8));

// two dimensional array
const array = [[1, 2, 3], [4, 5, 6]]

console.log('two dimensional array', array[0][1])