// Пирамида
// https://contest.yandex.ru/contest/27665/problems/E/
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
  console.log(solve(lines[0], lines.slice(1)))
})

function solve(n, wh) {
  const sortedByW = wh.sort((a, b) => b[0] - a[0])
  const pyramid = new Map()
  for (let i = 0; i < n; i++) {
    const [w, h] = sortedByW[i]
    if (pyramid.has(w) && pyramid.get(w) < h) pyramid.set(w, h)
    else if (!pyramid.has(w)) pyramid.set(w, h)
  }
  let result = 0
  for (const [_, h] of pyramid) {
    result += h
  }
  return result
}
