// Метро
// https://contest.yandex.ru/contest/27393/problems/H/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let lines = []
rl.on('line', (line) => {
  lines.push(line)
})

rl.once('close', () => {
  console.log(...solve(...lines.map(Number)))
})

function solve(a, b, n, m) {
  const aTime = n + (n - 1) * a
  const aTimeWithPads = aTime + 2 * a
  const bTime = m + (m - 1) * b
  const bTimeWithPads = bTime + 2 * b
  if (aTime > bTimeWithPads + 1 || bTime > aTimeWithPads + 1) return [-1]
  return [Math.max(aTime, bTime), Math.min(aTimeWithPads, bTimeWithPads)]
}

// console.log(solve(1, 3, 3, 2)) // [ 5, 7 ]
// console.log(solve(2, 4, 2, 1)) // [ 4, 8 ]
// console.log(solve(1, 5, 1, 2)) // [ -1 ]
// console.log(solve(1, 1, 1, 1)) // [ 1, 3 ]
// console.log(solve(1, 2, 1, 1)) // [ 1, 3 ]
