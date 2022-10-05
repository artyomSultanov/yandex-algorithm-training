// OpenCalculator
// https://contest.yandex.ru/contest/27663/problems/E/
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
  const [x, y, z] = lines[0].split(' ').map(Number)
  console.log(solve(x, y, z, Number(lines[1])))
})

function solve(x, y, z, n) {
  const extra = new Set()
  while (n > 0) {
    const d = n % 10
    if (d !== x && d !== y && d !== z) extra.add(d)
    n = Math.floor(n / 10)
  }
  return extra.size
}
