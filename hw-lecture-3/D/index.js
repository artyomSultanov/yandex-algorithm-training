// Количество слов в тексте
// https://contest.yandex.ru/contest/27663/problems/D/
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const arr = []
rl.on('line', (line) => {
  arr.push(...line.split(' ').filter((w) => w.length > 0))
})

rl.once('close', () => {
  console.log(solve(arr))
})

function solve(words) {
  return new Set(words).size
}
