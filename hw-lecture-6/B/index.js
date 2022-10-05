// Приближенный двоичный поиск
// https://contest.yandex.ru/contest/27844/problems/B/
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
  console.log(solve(lines[0][0], lines[0][1], lines[1], lines[2]))
})

function solve(n, k, nArr, kArr) {
  const result = []
  for (let i = 0; i < k; i++) {
    result.push(binSearch(n, kArr[i], nArr))
  }
  return result.join('\n')
}

function binSearch(n, k, arr) {
  let l = 0
  let r = n - 1
  let m = Math.floor((r - l) / 2)
  while (l < r) {
    if (arr[m] >= k) {
      r = m
    } else {
      l = m + 1
    }
    m = l + Math.floor((r - l) / 2)
  }
  return k - arr[l - 1] <= arr[l] - k ? arr[l - 1] : arr[l]
}
