// Дипломы
// https://contest.yandex.ru/contest/27844/problems/C/
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// let arr = []
// rl.on('line', (line) => {
//   arr = line.split(' ').map(Number)
// })

// rl.once('close', () => {
//   console.log(solve(arr[0], arr[1], arr[2]))
// })

// function solve(w, h, n) {
//   const count = []
//   for (let i = 1; i <= n; i++) {
//     count.push(i * Math.floor((i * Math.max(w, h)) / Math.min(w, h)))
//   }
//   return (binSearch(count.length, n, count) + 1) * Math.max(w, h)
// }

function solve(w, h, n) {
  const getCount = (x) => x * Math.floor((x * Math.max(w, h)) / Math.min(w, h))
  let l = 0
  let r = n
  let m = Math.floor((r - l) / 2)
  let mx = getCount(m)
  while (l < r) {
    if (mx >= n) {
      r = m
    } else {
      l = m + 1
    }
    m = l + Math.floor((r - l) / 2)
    mx = getCount(m)
  }
  return l * Math.max(w, h)
}
console.log(solve(1, 1, 1))
console.log(solve(2, 3, 10))
console.log(solve(1, 2, 3))
console.log(solve(6, 6, 5))
console.log(solve(2, 3, 13))
