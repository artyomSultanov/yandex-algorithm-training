// Узник замка Иф
// https://contest.yandex.ru/contest/27393/problems/I/

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
  console.log(solve(...lines.map(Number)))
})

function solve(a, b, c, d, e) {
  if (
    (a <= d && b <= e) ||
    (a <= e && b <= d) ||
    (a <= d && c <= e) ||
    (a <= e && c <= d) ||
    (b <= d && c <= e) ||
    (b <= e && c <= d)
  )
    return 'YES'
  return 'NO'
}

console.log(solve(1, 1, 1, 1, 1))
console.log(solve(2, 2, 1, 2, 1))
