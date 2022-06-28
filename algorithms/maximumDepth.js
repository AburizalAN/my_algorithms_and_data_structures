var maxDepth = function(root) {
  let i = root.length + 1
  let count = 0
  while (i > 1) {
      i = i / 2
      count++
  }
  return count
};

console.log(maxDepth([3,9,20,null,null,15,7]))