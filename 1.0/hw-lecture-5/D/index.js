// Город Че
// https://contest.yandex.ru/contest/27794/problems/D/
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []
rl.on('line', (line) => {
  lines.push(line.split(' ').map(Number))
})

rl.once('close', () => {
  console.log(solve(lines[0][0], lines[0][1], lines[1]))
})

function solve(n, r, dn) {
  let result = 0
  let i = 0
  let j = 1
  while (j < n) {
    if (dn[j] - dn[i] <= r) j++
    if (dn[j] - dn[i] > r) {
      result += n - j
      i++
    }
  }
  return result
}
