function reverseStringR(str, lastIndex = null) {
  if (lastIndex == null) lastIndex = str.length - 1

  if (lastIndex === 0) {
    return str[lastIndex]
  } else {
    return str[lastIndex] + reverseString(str, lastIndex - 1)
  }
}

var reverseString = function(s) {
  let i = 0;
  let last = s.length - 1
  let med = Math.ceil(s.length / 2)
  while (i < med) {
      const temp = s[i]
      s[i] = s[last - i]
      s[last - i] = temp
      i++
  }
  return s
};

console.log(reverseString(["a", "b", "c", "d"]))