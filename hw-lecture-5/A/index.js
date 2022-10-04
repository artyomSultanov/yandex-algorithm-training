// Стильная одежда
// https://contest.yandex.ru/contest/27794/problems/A/
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
  console.log(solve(lines[0], lines[1], lines[2], lines[3]))
})

function solve(n, tn, m, jm) {
  const minDiff = [Infinity, 0]
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (Math.abs(minDiff[0] - minDiff[1]) > Math.abs(tn[i] - jm[j])) {
      minDiff[0] = tn[i]
      minDiff[1] = jm[j]
    }
    if (tn[i] < jm[j]) i++
    else j++
  }
  return `${minDiff[0]} ${minDiff[1]}`
}
