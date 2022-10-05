// Кубики
// https://contest.yandex.ru/contest/27663/problems/C/
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
  const [n, m] = lines[0].split(' ').map(Number)
  const arr = lines.slice(1).map(Number)
  console.log(solve(n, m, arr))
})

function solve(n, m, arr) {
  const A = new Set(arr.slice(0, n))
  const B = new Set(arr.slice(n))
  const common = new Set()
  for (let i = 0; i < n + m; i++) {
    if (A.has(arr[i]) && B.has(arr[i])) {
      common.add(arr[i])
      A.delete(arr[i])
      B.delete(arr[i])
    }
  }
  return `${common.size}
${[...common.values()].sort((a, b) => a - b).join(' ')}
${A.size}
${[...A.values()].sort((a, b) => a - b).join(' ')}
${B.size}
${[...B.values()].sort((a, b) => a - b).join(' ')}`
}
