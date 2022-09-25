// Симметрическая последовательность (палиндром)
// https://contest.yandex.ru/contest/27472/problems/F/

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []
rl.on('line', (line) => {
  lines.push(line)
})

rl.once('close', () => {
  const result = solve(Number(lines[0]), lines[1].split(' ').map(Number))
  console.log(result[0])
  if (result[0] !== 0) console.log(result[1].join(' '))
})

function solve(n, arr) {
  let j = n - 1
  let startPalindrom = -1

  for (let i = 0; i < j; i++) {
    if (arr[i] === arr[j] && startPalindrom === -1) {
      startPalindrom = i
      j--
    } else if (arr[i] === arr[j]) {
      j--
    } else {
      startPalindrom = -1
      j = n - 1
    }
  }

  if (startPalindrom === -1)
    return [n + startPalindrom, arr.slice(0, startPalindrom).reverse()]
  if (startPalindrom === 0) return [0]
  return [startPalindrom, arr.slice(0, startPalindrom).reverse()]
}

console.log(solve(3, [1, 2, 2]))
console.log(solve(6, [1, 2, 1, 2, 3, 2]))
console.log(solve(4, [1, 1, 4, 4]))
console.log(solve(3, [1, 3, 3]))
console.log(solve(6, [1, 2, 1, 2, 2, 3]))
console.log(solve(3, [3, 3, 1]))
console.log(solve(9, [1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(solve(5, [1, 2, 3, 4, 5]))

// left = [1, 2, 3, 4, 5, 4, 3, 2, 1]
// arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
//                                +
// left = [1, 2, 1]
// arr = [1, 2, 1, 2, 2]
//              +
