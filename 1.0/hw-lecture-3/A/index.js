// Количество различных чисел
// https://contest.yandex.ru/contest/27663/problems/A/
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let arr = []
rl.on('line', (line) => {
  arr = line.split(' ').map(Number)
})

rl.once('close', () => {
  console.log(solve(arr))
})

function solve(arr) {
  const numberSet = new Set(arr)
  return numberSet.size
}
console.log(solve([1, 2, 3, 2]))
