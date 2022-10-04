// Сумма номеров
// https://contest.yandex.ru/contest/27794/problems/B/
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
  console.log(solve(lines[0][0], lines[0][1], lines[1]))
})

function solve(n, k, arr) {
  const prefixSum = [0]
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i]
  }
  let i = 0
  let j = 1
  let result = 0
  while (i < n + 1 && j < n + 1) {
    const sum = prefixSum[j] - prefixSum[i]
    if (sum === k) {
      result++
      i++
      j++
    }
    if (sum < k) j++
    if (sum > k) i++
  }
  return result
}
