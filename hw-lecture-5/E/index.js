// Красота превыше всего
// https://contest.yandex.ru/contest/27794/problems/E/
// WA 14 тест
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

function solve(n, k, trees) {
  let i = 0
  let j = n - 1
  const kCountMap = new Map()
  for (let i = 0; i < n; i++) {
    if (kCountMap.has(trees[i]))
      kCountMap.set(trees[i], kCountMap.get(trees[i]) + 1)
    else kCountMap.set(trees[i], 0)
  }
  while (
    j - i >= k &&
    (kCountMap.get(trees[i]) > 0 || kCountMap.get(trees[j]) > 0)
  ) {
    if (kCountMap.get(trees[i]) > 0) {
      kCountMap.set(trees[i], kCountMap.get(trees[i]) - 1)
      i++
    } else if (kCountMap.get(trees[j]) > 0) {
      kCountMap.set(trees[j], kCountMap.get(trees[j]) - 1)
      j--
    }
  }
  return `${i + 1} ${j + 1}`
}

// console.log(solve(6, 4, [2, 4, 2, 3, 3, 1])) // 2 6
// console.log(solve(12, 5, [1, 2, 1, 3, 3, 2, 1, 4, 4, 5, 5, 5])) // 5 10
// console.log(solve(6, 3, [2, 1, 1, 3, 2, 1])) // 4 6
// console.log(solve(4, 2, [2, 1, 2, 1])) // 3 4
// console.log(solve(1, 1, [1])) // 1 1
// console.log(solve(5, 3, [1, 3, 1, 2, 3])) // 3 5
// console.log(solve(12, 5, [5, 1, 1, 2, 2, 4, 4, 4, 3, 2, 1, 5])) // 8 12
// console.log(solve(12, 5, [5, 1, 2, 4, 3, 4, 4, 4, 4, 2, 1, 5])) // 1 5        // WA
