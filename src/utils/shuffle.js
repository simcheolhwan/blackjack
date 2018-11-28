/* Fisher–Yates Shuffle */
export default array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--)
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
