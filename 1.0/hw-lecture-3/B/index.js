// Пересечение множеств
// https://contest.yandex.ru/contest/27663/problems/B/
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
  console.log(solve(lines[0], lines[1]))
})

function solve(arr1, arr2) {
  const arr2Set = new Set(arr2)
  return [...new Set(arr1)]
    .filter((v) => arr2Set.has(v))
    .sort((a, b) => a - b)
    .join(' ')
}
