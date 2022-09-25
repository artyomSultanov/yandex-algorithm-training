// Сапер
// https://contest.yandex.ru/contest/27472/problems/I/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []
rl.on('line', (line) => {
  lines.push(line)
})

rl.once('close', () => {
  const [n, m, k] = lines[0].split(' ').map(Number)
  const coordinates = lines.slice(1).map((line) => line.split(' ').map(Number))
  console.log(solve(n, m, k, coordinates))
})

function solve(n, m, k, coordinates) {
  if (k === 0) return new Array(n).fill('0 '.repeat(m)).join('\n')
  const field = new Array(n).fill(null)
  for (let i = 0; i < n; i++) {
    field[i] = new Array(m).fill(0)
    for (let j = 0; j < m; j++) {
      for (const [y, x] of coordinates) {
        if (i === y - 1 && j === x - 1) field[i][j] = '*'
        if (
          Math.abs(y - 1 - i) <= 1 &&
          Math.abs(x - 1 - j) <= 1 &&
          field[i][j] !== '*'
        )
          field[i][j] += 1
      }
    }
  }
  return field.map((row) => row.join(' ')).join('\n')
}

console.log(
  solve(3, 2, 2, [
    [1, 1],
    [2, 2],
  ])
)
console.log(solve(2, 2, 0))
console.log(
  solve(4, 4, 4, [
    [1, 3],
    [2, 1],
    [4, 2],
    [4, 4],
  ])
)
