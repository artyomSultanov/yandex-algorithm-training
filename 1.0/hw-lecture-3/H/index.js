// Злые свинки
// https://contest.yandex.ru/contest/27663/problems/H/
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
  console.log(solve(lines[0][0], lines.slice(1)))
})

function solve(n, birds) {
  const xCoords = new Map()
  let result = birds.length
  for (let i = 0; i < n; i++) {
    if (xCoords.has(birds[i][0]))
      xCoords.set(birds[i][0], xCoords.get(birds[i][0]) + 1)
    else xCoords.set(birds[i][0], 0)
  }
  for (const [x, c] of xCoords) {
    if (c > 0) result -= c
  }
  return result
}
