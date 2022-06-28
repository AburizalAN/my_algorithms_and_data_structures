var singleNumber = function(nums) {
  const map = {}
  for (num of nums) {
      if (!map[num]) {
          map[num] = 1
      } else {
          map[num]++
      }
  }
  const result = Object.keys(map).filter((num) => {
      if (map[num] === 1 ) {
        return true
      }
  })
  return result[0]
};

console.log(singleNumber([1, 2, 3, 3, 2]))