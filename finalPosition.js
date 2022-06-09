let moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function(moves) {
  let y = 0
  let x = 0
  for (let i = 0; i < moves.length; i++)  {
    if (moves[i] === 'north') {
      y++
    }
    if (moves[i] === 'south') {
      y--
    }
    if (moves[i] === 'east') {
      x++
    }
    if (moves[i] === 'west') {
      x--
    }
  }
  return [x, y];
}