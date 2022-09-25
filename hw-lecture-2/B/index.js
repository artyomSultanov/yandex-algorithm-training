// Определить вид последовательности
// https://contest.yandex.ru/contest/27472/problems/B/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let lines = []
rl.on('line', (line) => {
  lines.push(Number(line))
})

rl.once('close', () => {
  console.log(solve(lines))
})

function solve(lines) {
  let constant = 'CONSTANT'
  let ascending = 'ASCENDING'
  let weaklyAscending = 'WEAKLY ASCENDING'
  let descending = 'DESCENDING'
  let weaklyDescending = 'WEAKLY DESCENDING'

  for (let i = 1; lines[i] !== -2_000_000_000; i++) {
    const prev = lines[i - 1]
    const cur = lines[i]
    if (prev !== cur) constant = false
    if (prev >= cur) ascending = false
    if (prev > cur) weaklyAscending = false
    if (prev <= cur) descending = false
    if (prev < cur) weaklyDescending = false
  }
  const types = [
    constant,
    ascending,
    weaklyAscending,
    descending,
    weaklyDescending,
  ].filter(Boolean)

  return types.length === 0 ? 'RANDOM' : types[0]
}

console.log(solve([-530, -430, -330, -230, -2_000_000_000]))
