// Клавиатура
// https://contest.yandex.ru/contest/27665/problems/D/
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
  console.log(solve(lines[0], lines[1], lines[2], lines[3]))
})

function solve(n, cn, k, pk) {
  const cMap = new Map()
  const result = []
  for (let i = 0; i < n; i++) {
    cMap.set(i, cn[i])
  }
  for (let i = 0; i < k; i++) {
    const pi = pk[i] - 1
    if (cMap.has(pi)) cMap.set(pi, cMap.get(pi) - 1)
  }
  for (let i = 0; i < n; i++) {
    if (cMap.get(i) < 0) result.push('YES')
    else result.push('NO')
  }
  return result.join('\n')
}
