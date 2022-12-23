const carta = 'bici coche balon _playstation bici coche peluche'

const regalos = listGifts(carta)

function listGifts (letter) {
  return letter.trim().split(' ').reduce((acc, curr) => {
    if (curr.includes('_')) return acc
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
}

console.log(regalos)
