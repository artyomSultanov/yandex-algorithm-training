// Треугольник
// https://contest.yandex.ru/contest/27393/problems/B/

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
  const result = isTriangle(...lines.map(Number)) ? 'YES' : 'NO'
  console.log(result)
})

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a
}
