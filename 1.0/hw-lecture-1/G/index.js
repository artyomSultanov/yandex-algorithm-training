// Детали
// https://contest.yandex.ru/contest/27393/problems/G/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let lines = []
rl.on('line', (line) => {
  lines = line.split(' ').map(Number)
})

rl.once('close', () => {
  console.log(solve(...lines))
})

function solve(n, k, m) {
  const addedToN = k > m ? k % m : 0
  const addedToResult = parseInt(k / m)
  let nk = 0
  while (n >= k) {
    nk += parseInt(n / k)
    n = (n % k) + parseInt(n / k) * addedToN
  }
  return addedToResult * nk
}
