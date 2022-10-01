// Инопланетный геном
// https://contest.yandex.ru/contest/27663/problems/F/
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
  console.log(solve(lines[0], lines[1]))
})

function solve(gen1, gen2) {
  const genPairs = new Set()
  let countEqualPairs = 0
  for (let i = 1; i < gen2.length; i++) {
    genPairs.add(gen2[i - 1] + gen2[i])
  }
  for (let i = 1; i < gen1.length; i++) {
    if (genPairs.has(gen1[i - 1] + gen1[i])) countEqualPairs++
  }
  return countEqualPairs
}
