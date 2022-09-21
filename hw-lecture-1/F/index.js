// Расстановка ноутбуков
// https://contest.yandex.ru/contest/27393/problems/F/

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

function solve(h1, w1, h2, w2) {
  const tables = [
    [h1 + h2, Math.max(w1, w2)],
    [h1 + w2, Math.max(w1, h2)],
    [w1 + h2, Math.max(w2, h1)],
    [w1 + w2, Math.max(h1, h2)],
  ]
  let minTable = [Infinity, Infinity]
  for (const [h, w] of tables) {
    if (h * w < minTable[0] * minTable[1]) {
      minTable = [h, w]
    }
  }
  return minTable
}
console.log(solve(10, 2, 2, 10))
console.log(solve(5, 7, 3, 2))
