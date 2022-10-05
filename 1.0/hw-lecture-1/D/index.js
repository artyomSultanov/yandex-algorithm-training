// Уравнение с корнем
// https://contest.yandex.ru/contest/27393/problems/D/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const lines = []

rl.on('line', (line) => {
  lines.push(Number(line))
})

rl.once('close', () => {
  console.log(solveEquation(...lines))
})

function solveEquation(a, b, c) {
  const x = (c * c - b) / a
  if (a !== 0 && x === Math.floor(x) && c >= 0) return x
  if (a === 0 && c * c === b) return 'MANY SOLUTIONS'
  return 'NO SOLUTION'
}
