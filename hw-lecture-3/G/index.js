// Черепахи
// https://contest.yandex.ru/contest/27663/problems/G/
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

function solve(n, turtles) {}
