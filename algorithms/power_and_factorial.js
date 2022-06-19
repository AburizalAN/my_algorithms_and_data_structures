function power(num, pwr) {
  switch (pwr) {
    case 0:
      return 1;
    default:
      return num * power(num, pwr - 1);
  }
}

function factorial(num) {
  switch (num) {
    case 0:
      return 1;
    default:
      return num * factorial(num - 1);
  }
}

function power2(a, b) {
  const pwr = a;

  return () => {
    for (let i = 0; i < b; i++) {
      a *= a;
    }
    return a
  }
}

// console.log(`power of 5 of 3 is ${power(5, 2)}`)
// console.log(`5! is ${factorial(5)}`)
console.log(`power of 5 of 5 is ${power2(4, 1.2)}`)