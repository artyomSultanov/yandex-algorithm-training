// Возрастает ли список?
// https://contest.yandex.ru/contest/27472/problems/A/

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
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) return 'NO'
  }
  return 'YES'
}
