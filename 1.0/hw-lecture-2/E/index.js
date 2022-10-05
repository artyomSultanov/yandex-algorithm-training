// Чемпионат по метанию коровьих лепешок
// https://contest.yandex.ru/contest/27472/problems/E/

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// let lines = []
// rl.on('line', (line) => {
//   lines.push(line)
// })

// rl.once('close', () => {
//   console.log(solve(Number(lines[0]), lines[1].split(' ').map(Number)))
// })

function solve(n, arr) {
  const sortedArr = arr.slice().sort((a, b) => b - a)
  let x = -Infinity
  let k = 1

  for (let i = 1; i < n - 1; i++) {
    if (
      arr[i] > x &&
      arr[i - 1] >= sortedArr[0] &&
      arr[i] % 10 === 5 &&
      arr[i + 1] < arr[i]
    ) {
      x = arr[i]
    }
  }
  if (!Number.isFinite(x)) return 0
  for (let i = 0; i < n; i++) {
    if (sortedArr[i] > x) k++
  }

  return k
}
console.log(solve(3, [15, 15, 10]))
console.log(solve(7, [10, 10, 12, 10, 12, 5, 1]))
console.log(solve(3, [10, 15, 20]))
console.log(solve(3, [15, 15, 14]))
