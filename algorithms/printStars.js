function printStars(n) {
  for (let i = 0; i < n; i++) {
    let stars = '';
    for (let j = n; j > 0; j--) {
      stars = stars + (j <= i + 1 ? '*' : ' ') 
    }
    console.log(stars)
  }
}

printStars(5)