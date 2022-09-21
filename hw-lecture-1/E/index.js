// Скорая помощь
// https://contest.yandex.ru/contest/27393/problems/E/
// Нужно дорешать :(

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let lines = []

rl.on('line', (line) => {
  lines = line.split(' ').map(Number)
})

rl.once('close', () => {
  console.log(...solve(...lines))
})

function getEntranceAndFloor(k1, m, k2, p2, n2, i) {
  if (
    Math.ceil((k2 - i * m * (p2 - 1)) / i) === n2 &&
    Math.ceil(k2 / (i * m)) === p2
  ) {
    const p1 = Math.ceil(k1 / (i * m))
    const n1 = Math.ceil((k1 - i * m * (p1 - 1)) / i)
    return [p1, n1]
  }
  return [-1, -1]
}

console.log(getEntranceAndFloor(10, 11, 11, 1, 3, 4))

function solve(k1, m, k2, p2, n2) {
  if (k1 === k2) return [p2, n2]
  let p1 = -1,
    n1 = -1
  for (let i = 0; i < 100; i++) {
    const [pi, ni] = getEntranceAndFloor(k1, m, k2, p2, n2, i)
    // console.log(pi, ni)
    if (p1 === -1 && p1 !== pi) {
      p1 = pi
    } else if (p1 !== -1 && pi !== -1) {
      p1 = 0
    }
    if (n1 === -1 && n1 !== ni) {
      n1 = ni
    } else if (n1 !== -1 && ni !== -1 && m !== 1) {
      n1 = 0
    }
  }
  return [p1, n1]
}

// console.log(solve(44, 11, 149, 3, 8)) // 1 9
// console.log(solve(149, 11, 44, 1, 9)) // 3 8
// console.log(solve(55, 11, 111, 3, 1)) // 1 11
// console.log(solve(10, 11, 6, 1, 2)) // 1 2
// console.log(solve(10, 11, 11, 1, 3)) // 1 2
// console.log(solve(3, 2, 2, 2, 1)) // 1 2
// console.log(solve(11, 1, 1, 1, 1))
// console.log(solve(10, 11, 54, 1, 11)) // 1 2
// console.log(solve(10, 11, 44, 1, 9)) // 1 2
// console.log(solve(10, 11, 18, 1, 4)) // 1 2
// console.log(solve(3, 2, 2, 2, 1)) // 1 2
// console.log(solve(11, 1, 2, 1, 2)) // 1 2
// console.log(solve(10, 11, 10, 1, 2)) // 1 2
// console.log(solve(56, 11, 56, 2, 1)) // 2 1

// 45 46 47 48
// 41 42 43 44
// 37 38 39 40
// 33 34 35 36

// 29 30 31 32
// 25 26 27 28
// 21 22 23 24
// 17 18 19 20

// 13 14 15 16
//  9 10 11 12
//  5  6  7  8
//  1  2  3  4
