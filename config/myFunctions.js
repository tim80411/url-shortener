const library = {
  generateRandom: (length = 5) => {
    let random = ''

    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperLetters = lowerLetters.toUpperCase()
    const nums = '0123456789'

    const randomPool = lowerLetters + upperLetters + nums


    for (i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * randomPool.length)

      random += randomPool[randomIndex]
    }

    return random
  }
}


module.exports = library