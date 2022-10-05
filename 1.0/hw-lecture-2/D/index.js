// Больше своих соседей
// https://contest.yandex.ru/contest/27472/problems/D/

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
  let result = 0
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) result++
  }
  return result
}
