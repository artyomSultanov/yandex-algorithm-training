// Наибольшее произведение трёх чисел
// https://contest.yandex.ru/contest/27472/problems/H/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let arr = []
rl.on('line', (line) => {
  arr = line.split(' ').map(Number)
})

rl.once('close', () => {
  console.log(...solve(arr))
})

function solve(arr) {
  const values = getMaxAndMinValues(arr)
  return getMaxSlice([
    [values[0], values[1], values[10]],
    [values[8], values[9], values[10]],
    [values[3], values[4], values[5]],
    [values[5], values[6], values[7]],
  ])
}
function getMaxAndMinValues(arr) {
  let max1 = -Infinity
  let max2 = -Infinity
  let max3 = -Infinity
  let min1 = Infinity
  let min2 = Infinity
  let min3 = Infinity
  let maxNeg1 = -Infinity
  let maxNeg2 = -Infinity
  let maxNeg3 = -Infinity
  let minPos1 = Infinity
  let minPos2 = Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (arr[i] < min1) [min1, min2, min3] = [arr[i], min1, min2]
      else if (arr[i] < min2) [min2, min3] = [arr[i], min2]
      else if (arr[i] < min3) min3 = arr[i]

      if (arr[i] > maxNeg1)
        [maxNeg1, maxNeg2, maxNeg3] = [arr[i], maxNeg1, maxNeg2]
      else if (arr[i] > maxNeg2) [maxNeg2, maxNeg3] = [arr[i], maxNeg2]
      else if (arr[i] > maxNeg3) maxNeg3 = arr[i]
    } else {
      if (arr[i] > max1) [max1, max2, max3] = [arr[i], max1, max2]
      else if (arr[i] > max2) [max2, max3] = [arr[i], max2]
      else if (arr[i] > max3) max3 = arr[i]

      if (arr[i] < minPos1) [minPos1, minPos2] = [arr[i], minPos1]
      else if (arr[i] < minPos2) minPos2 = arr[i]
    }
  }
  return [
    min1,
    min2,
    min3,
    maxNeg3,
    maxNeg2,
    maxNeg1,
    minPos1,
    minPos2,
    max3,
    max2,
    max1,
  ]
}
function getMaxSlice(slices) {
  const finites = slices.filter(
    (slice) => !slice.includes(Infinity) && !slice.includes(-Infinity)
  )
  finites.sort((a, b) => mult(b) - mult(a))
  return finites[0]
}
function mult(arr) {
  return arr.reduce((acc, v) => acc * v, 1)
}
// console.log(solve([1, 2, 3]))
// console.log(solve([1, 2, 3, 4, -5, -6, -7]))
// console.log(solve([-4, -2, 1, 2, 4, -5]))
// console.log(solve([3, 5, 1, 7, 9, 0, 9, -3, 10]))
// console.log(solve([-5, -30000, -12]))
// console.log(solve([1, 2, 3]))
// console.log(solve([-1, 2, -3, -2]))
// console.log(solve([-1, 0, 0, 0, 1]))
// console.log(solve([0, 0, 0, 0, -1, 2, 1]))
// console.log(solve([-1, 0, 1, 1]))
// console.log(solve([-5, -3, -2, -7, -8])) // [-5, -3, -2]
// const test =
//   '-70 -68 -29 -45 -34 -88 -32 -38 -25 -95 -68 -96 -28 -45 -59 -95 -73 -8 -37 -49 -47 -9 -61 -91 -11 -90 -16 -25 -17 -4 -14 -38 -38 -85 -46 -16 -22 -63 -54 -14 -51 -4 -20 -44 -74 -78 -83 -91 -35 -43 -49 -89 -100 -27 -39 -95 -90 -90 -92 -48 -44 -4 -37 -13 -73 -28 -61 -32 -95 -43 -83 -43 -51 -19'
// console.log(solve(test.split(' ').map(Number)))
