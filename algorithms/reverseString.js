function reverseString(str, lastIndex = null) {
  if (lastIndex == null) lastIndex = str.length - 1

  if (lastIndex === 0) {
    return str[lastIndex]
  } else {
    return str[lastIndex] + reverseString(str, lastIndex - 1)
  }
}

console.log(reverseString("halo nama saya abu"))